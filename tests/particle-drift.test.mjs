import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const source = ts.transpileModule(readFileSync('app/components/ui/particle-drift.tsx', 'utf8'), {
  compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS },
}).outputText;

function mount(props = {}, reducedMotion = false, random = Math.random) {
  const callbacks = new Map();
  const effects = [];
  const listeners = new Map();
  const options = new Map();
  const target = () => {
    const registered = new Map();
    return {
      addEventListener: (event, callback, config) => {
        const listener = (...args) => callback(...args);
        registered.set(event, listener);
        listeners.set(listener, event);
        options.set(event, config);
      },
      removeEventListener: (event) => listeners.delete(registered.get(event)),
    };
  };
  let resize;
  let intersect;
  let disconnected = 0;
  let frameId = 0;
  let letters = [];
  let lines = [];
  let start;
  const bounds = { width: 1400, height: 650, left: 0, top: 0 };
  const context = {
    clearRect: () => {
      letters = [];
      lines = [];
    },
    createLinearGradient: () => ({ addColorStop() {} }),
    beginPath() {},
    moveTo(x, y) { start = { x, y }; },
    lineTo(x, y) { lines.push({ start, end: { x, y } }); },
    stroke() {},
    setTransform() {},
    fillText: (char, x, y) =>
      letters.push({ char, x, y, color: context.fillStyle, alpha: context.globalAlpha }),
  };
  const canvas = {
    parentElement: target(),
    getContext: () => context,
    getBoundingClientRect: () => bounds,
  };
  const media = { ...target(), matches: reducedMotion };
  const document = { ...target(), hidden: false };
  const exports = {};
  runInNewContext(source, {
    exports,
    Math: Object.assign(Object.create(Math), { random }),
    require: (name) =>
      name === 'react'
        ? {
            useRef: () => ({ current: canvas }),
            useEffect: (effect) => effects.push(effect),
          }
        : { jsx: (_, props) => props },
    window: { ...target(), matchMedia: () => media, devicePixelRatio: 3 },
    document,
    getComputedStyle: () => ({
      getPropertyValue: (name) => (name === '--primary' ? '#c7b7f5' : '#a3a2ac'),
    }),
    requestAnimationFrame: (callback) => {
      callbacks.set(++frameId, callback);
      return frameId;
    },
    cancelAnimationFrame: (id) => callbacks.delete(id),
    ResizeObserver: class {
      constructor(callback) {
        resize = callback;
      }
      observe() {}
      disconnect() {
        disconnected++;
      }
    },
    IntersectionObserver: class {
      constructor(callback) {
        intersect = callback;
      }
      observe() {}
      disconnect() {
        disconnected++;
      }
    },
  });
  const rendered = exports.default(props);
  const cleanup = effects[0]();
  return {
    rendered,
    options,
    pointer: (x, y, pointerType = 'mouse') => {
      for (const [callback, event] of listeners) {
        if (event === 'pointermove') callback({ clientX: x, clientY: y, pointerType });
      }
    },
    leave: () => {
      for (const [callback, event] of listeners) {
        if (event === 'pointerleave') callback();
      }
    },
    canvas,
    media,
    document,
    bounds,
    callbacks,
    listeners,
    cleanup,
    letters: () => letters,
    lines: () => lines,
    disconnected: () => disconnected,
    resize: () => resize(),
    visible: (value) => intersect([{ isIntersecting: value }]),
    notify: () => {
      for (const [listener, event] of listeners) {
        if (event === 'change' || event === 'visibilitychange') listener();
      }
    },
    tick: (time) => {
      const [id, callback] = callbacks.entries().next().value;
      callbacks.delete(id);
      callback(time);
    },
  };
}

test('animates only while visible and releases observers, frames, and listeners', () => {
  const effect = mount();
  assert.equal(effect.callbacks.size, 0);
  effect.visible(true);
  assert.equal(effect.callbacks.size, 1);
  effect.tick(100);
  const before = effect.letters()[0].y;
  effect.tick(116.67);
  assert.ok(effect.letters()[0].y > before);
  effect.visible(false);
  assert.equal(effect.callbacks.size, 0);
  effect.visible(true);
  effect.document.hidden = true;
  effect.notify();
  assert.equal(effect.callbacks.size, 0);
  effect.document.hidden = false;
  effect.notify();
  assert.equal(effect.callbacks.size, 1);
  effect.cleanup();
  assert.equal(effect.callbacks.size, 0);
  assert.equal(effect.listeners.size, 0);
  assert.equal(effect.disconnected(), 2);
});

test('reduced motion draws a still frame and responds to preference changes', () => {
  const effect = mount({}, true);
  effect.visible(true);
  assert.ok(effect.letters().length > 0);
  assert.equal(effect.callbacks.size, 0);
  effect.media.matches = false;
  effect.notify();
  assert.equal(effect.callbacks.size, 1);
  effect.media.matches = true;
  effect.notify();
  assert.equal(effect.callbacks.size, 0);
  effect.cleanup();
});

test('zero speed stays still and transparent decorations stay hidden from accessibility', () => {
  const effect = mount({ speed: 0, opacity: 0 });
  effect.visible(true);
  assert.equal(effect.callbacks.size, 0);
  assert.equal(effect.rendered.style.opacity, 0);
  assert.equal(effect.rendered.style.pointerEvents, 'none');
  assert.equal(effect.rendered['aria-hidden'], 'true');
  effect.cleanup();
});

test('resizes the drawing buffer and reduces particle count on mobile', () => {
  const effect = mount();
  assert.equal(effect.canvas.width, 2800);
  const desktopCount = effect.letters().length;
  effect.bounds.width = 390;
  effect.bounds.height = 844;
  effect.resize();
  assert.equal(effect.canvas.width, 780);
  assert.equal(effect.canvas.height, 1688);
  assert.ok(effect.letters().length < desktopCount);
  effect.cleanup();
});

test('pointer capture highlights particles over foreground content and clears on exit', () => {
  const effect = mount({ speed: 0 });
  const node = effect.letters()[0];
  assert.equal(effect.options.get('pointermove').capture, true);
  assert.equal(node.color, '#a3a2ac');
  effect.pointer(node.x, node.y);
  assert.equal(effect.letters()[0].color, '#c7b7f5');
  assert.ok(effect.letters()[0].alpha > node.alpha);
  effect.leave();
  assert.equal(effect.letters()[0].color, '#a3a2ac');
  effect.cleanup();
});

test('touch and reduced-motion preferences do not trigger hover highlights', () => {
  const touch = mount({ speed: 0 });
  const node = touch.letters()[0];
  touch.pointer(node.x, node.y, 'touch');
  assert.equal(touch.letters()[0].color, '#a3a2ac');
  touch.cleanup();
  const reduced = mount({ speed: 0 }, true);
  const still = reduced.letters()[0];
  reduced.pointer(still.x, still.y);
  assert.equal(reduced.letters()[0].color, '#a3a2ac');
  reduced.cleanup();
});

test('rain forms vertical fading trails that fall together without horizontal drift', () => {
  const effect = mount();
  const [head, tail] = effect.letters();
  assert.equal(head.x, tail.x);
  assert.ok(head.y > tail.y);
  assert.ok(head.alpha > tail.alpha);
  effect.visible(true);
  effect.tick(100);
  effect.tick(116.67);
  const [movedHead, movedTail] = effect.letters();
  assert.equal(movedHead.x, head.x);
  assert.ok(movedHead.y > head.y);
  assert.ok(Math.abs((movedHead.y - movedTail.y) - (head.y - tail.y)) < 0.001);
  effect.cleanup();
});


test('hover connects falling characters to the cursor and clears the web on exit', () => {
  const effect = mount({ speed: 0, density: 2.5 });
  assert.equal(effect.lines().length, 0);
  const point = effect.letters()[0];
  effect.pointer(point.x + 10, point.y);
  assert.ok(effect.lines().some(line => line.end.x === point.x + 10 && line.end.y === point.y));
  effect.leave();
  assert.equal(effect.lines().length, 0);
  effect.cleanup();
  const reduced = mount({ speed: 0 }, true);
  const still = reduced.letters()[0];
  reduced.pointer(still.x, still.y);
  assert.equal(reduced.lines().length, 0);
  reduced.cleanup();
});


test('characters near the cursor scramble more frequently than idle rain', () => {
  function seeded() {
    let state = 12345;
    return () => ((state = (state * 1664525 + 1013904223) >>> 0) / 4294967296);
  }
  function swaps(hover) {
    const effect = mount({}, false, seeded());
    effect.visible(true);
    let previous = effect.letters()[0].char;
    let count = 0;
    for (let tick = 1; tick <= 120; tick++) {
      const point = effect.letters()[0];
      if (hover) effect.pointer(point.x, point.y);
      effect.tick(tick * 16.67);
      const next = effect.letters()[0].char;
      if (next !== previous) count++;
      previous = next;
    }
    effect.cleanup();
    return count;
  }
  assert.ok(swaps(true) > swaps(false) + 5);
});
