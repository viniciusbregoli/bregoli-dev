import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const exports = {};
runInNewContext(ts.transpileModule(readFileSync('app/(core)/assistant/knowledge.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText, {
  exports,
  require: (name) => {
    if (name.includes('experienceData')) return { getExperienceData: () => [] };
    if (name.includes('educationData')) return { getEducationData: () => [] };
    if (name.includes('skillsData')) return { technicalSkills: [], spokenLanguages: [] };
    if (name.includes('projectData')) return { projects: [] };
    throw new Error(`Unexpected import: ${name}`);
  },
});

test('context includes verified public engineering work and distinguishes polling from WebSockets', () => {
  const prompt = exports.buildSystemPrompt('en');
  for (const fact of ['Sim2Log', 'SoundSense', 'Anki Flashcard Maker', 'Graduated in Computer Engineering', 'polling, not WebSockets', 'does not prove job progress', 'The Matrix']) {
    assert.ok(prompt.includes(fact), fact);
  }
  assert.ok(prompt.includes('not Vinícius himself'));
  assert.ok(prompt.includes('Never provide employer code'));
  assert.ok(prompt.includes('Do not invent personal opinions'));
  assert.ok(prompt.includes('Do not pretend to browse GitHub'));
});

test('language selection changes reply instructions without dropping the profile', () => {
  for (const [language, expected] of Object.entries({ en: 'English', pt: 'Portuguese', de: 'German', es: 'Spanish', zh: 'Mandarin Chinese' })) {
    const prompt = exports.buildSystemPrompt(language);
    assert.ok(prompt.includes(`Reply in ${expected}`));
    assert.ok(prompt.includes('Sim2Log'));
  }
});
