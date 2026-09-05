'use client';

import { useEffect, useRef, type CSSProperties } from 'react';

export type ParticleDriftProps = {
  speed?: number;
  density?: number;
  size?: number;
  length?: number;
  strokeWidth?: number;
  opacity?: number;
  className?: string;
  style?: CSSProperties;
};

const CHARACTERS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノ';

function clamp(value: number, min: number, max: number, fallback: number) {
  return Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
}

export default function ParticleDrift({
  speed = 1,
  density = 1,
  size = 1,
  length = 1,
  strokeWidth = 1,
  opacity = 1,
  className,
  style,
}: ParticleDriftProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const colors = getComputedStyle(canvas);
    const primary = colors.getPropertyValue('--primary').trim();
    const rain = colors.getPropertyValue('--secondary').trim();
    const head = colors.getPropertyValue('--foreground').trim();
    const safeSpeed = clamp(speed, 0, 3, 1);
    const safeDensity = clamp(density, 0.25, 2.5, 1);
    const safeSize = clamp(size, 0.5, 3, 1);
    const safeLength = clamp(length, 0.35, 2.5, 1);
    const safeStroke = clamp(strokeWidth, 0.25, 8, 1);
    const cell = 18 * safeSize;
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let visible = false;
    let pointer = { x: -1000, y: -1000 };
    let streams: { x: number; y: number; velocity: number; chars: string[] }[] = [];
    const character = () => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

    function draw(delta = 0) {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      context.font = `${12 * safeSize}px monospace`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.lineWidth = safeStroke;
      const connections: { x: number; y: number; strength: number }[] = [];
      for (const stream of streams) {
        stream.y += stream.velocity * delta;
        if (stream.y - stream.chars.length * cell > height) {
          stream.y = -cell;
        }
        for (let index = 0; index < stream.chars.length; index++) {
          const y = stream.y - index * cell;
          const distance = Math.hypot(pointer.x - stream.x, pointer.y - y);
          const active = !motion.matches && distance < 180;
          const swapChance = active ? 0.18 : 0.005;
          if (delta > 0 && Math.random() < 1 - Math.pow(1 - swapChance, delta)) {
            stream.chars[index] = character();
          }
          const fade = Math.pow(1 - index / stream.chars.length, 1.8);
          context.globalAlpha = (active ? 0.9 : 0.38) * fade;
          context.fillStyle = active ? primary : index === 0 ? head : rain;
          context.fillText(stream.chars[index], stream.x, y);
          // Sample the trails so dense rain does not turn the hover web into a solid patch.
          if (active && index % 3 === 0 && connections.length < 40 && y >= 0 && y <= height) {
            connections.push({ x: stream.x, y, strength: (1 - distance / 180) * (0.5 + 0.5 * fade) });
          }
        }
      }
      context.lineWidth = 1 * safeStroke;
      context.strokeStyle = primary;
      for (let i = 0; i < connections.length; i++) {
        const point = connections[i];
        context.globalAlpha = 0.85 * point.strength;
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(pointer.x, pointer.y);
        context.stroke();
        for (let j = i + 1; j < connections.length; j++) {
          const neighbor = connections[j];
          const distance = Math.hypot(point.x - neighbor.x, point.y - neighbor.y);
          if (point.x === neighbor.x || distance > 100) continue;
          context.globalAlpha = 0.6 * Math.min(point.strength, neighbor.strength) * (1 - distance / 100);
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(neighbor.x, neighbor.y);
          context.stroke();
        }
      }
      context.globalAlpha = 1;
    }

    function animate(time: number) {
      // Keep the reference's 60 Hz speed consistent on high-refresh displays.
      const delta = lastTime ? Math.min((time - lastTime) / (1000 / 60), 2) * safeSpeed : 0;
      lastTime = time;
      draw(delta);
      frame = requestAnimationFrame(animate);
    }

    function updateAnimation() {
      cancelAnimationFrame(frame);
      lastTime = 0;
      draw();
      if (visible && !document.hidden && !motion.matches && safeSpeed > 0) {
        frame = requestAnimationFrame(animate);
      }
    }

    function resize() {
      if (!canvas || !context) return;
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Space columns apart to keep the rain readable behind the portfolio.
      const population = Math.min(100, Math.max(4, Math.round(width / 54 * safeDensity)));
      streams = Array.from({ length: population }, (_, index) => ({
        x: (index + 0.5) * width / population,
        y: Math.random() * height,
        velocity: Math.random() * 1.2 + 0.6,
        chars: Array.from({ length: Math.round((8 + Math.random() * 10) * safeLength) }, character),
      }));
      updateAnimation();
    }

    function onPointerMove(event: PointerEvent) {
      if (!canvas || event.pointerType === 'touch') return;
      const bounds = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
      if (pointer.x < 0 || pointer.y < 0 || pointer.x > width || pointer.y > height) {
        onPointerLeave();
      }
      if (safeSpeed === 0) draw();
    }
    function onPointerLeave() {
      pointer = { x: -1000, y: -1000 };
      if (safeSpeed === 0) draw();
    }

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updateAnimation();
    });
    resize();
    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    // The decorative canvas sits behind content; capture also sees events over controls.
    document.addEventListener('pointermove', onPointerMove, { capture: true, passive: true });
    document.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('blur', onPointerLeave);
    motion.addEventListener('change', updateAnimation);
    document.addEventListener('visibilitychange', updateAnimation);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('pointermove', onPointerMove, true);
      document.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('blur', onPointerLeave);
      motion.removeEventListener('change', updateAnimation);
      document.removeEventListener('visibilitychange', updateAnimation);
    };
  }, [density, length, size, speed, strokeWidth]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: clamp(opacity, 0, 1, 1),
        ...style,
      }}
    />
  );
}
