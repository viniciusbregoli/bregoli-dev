import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

function projectLink(reduced = false) {
  const exports = {};
  const source = ts.transpileModule(readFileSync('app/components/projects/StudioProjectList.tsx', 'utf8'), {
    compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const jsx = (type, props) => ({ type, props });
  runInNewContext(source, {
    exports,
    require: (name) => {
      if (name === 'react/jsx-runtime') return { jsx, jsxs: jsx };
      if (name === 'framer-motion') return { useReducedMotion: () => reduced };
      if (name.includes('i18n')) return { useLanguage: () => ({ language: 'en' }) };
      return {};
    },
  });
  return exports.default({ projects: [{ id: 'demo', title: { en: 'Demo' }, description: { en: 'Description' }, technologies: [] }] }).props.children[0].props;
}

test('project spotlight follows local pointer coordinates and resets on leave', () => {
  const props = projectLink();
  const values = new Map();
  const currentTarget = {
    getBoundingClientRect: () => ({ left: 100, top: 200 }),
    style: { setProperty: (key, value) => values.set(key, value), removeProperty: key => values.delete(key) },
  };
  props.onPointerMove({ pointerType: 'mouse', clientX: 140, clientY: 260, currentTarget });
  assert.equal(values.get('--spot-x'), '40px');
  assert.equal(values.get('--spot-y'), '60px');
  props.onPointerLeave({ currentTarget });
  assert.equal(values.size, 0);
  assert.equal(props.href, '/projects/demo');
});

test('touch and reduced motion skip pointer tracking', () => {
  const currentTarget = { getBoundingClientRect: () => assert.fail('Pointer tracking should be disabled') };
  projectLink().onPointerMove({ pointerType: 'touch', currentTarget });
  projectLink(true).onPointerMove({ pointerType: 'mouse', currentTarget });
});
