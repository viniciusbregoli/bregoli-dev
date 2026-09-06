import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

test('chat ignores client model overrides and requests GPT-4o', async () => {
  let requested;
  const exports = {};
  const modelExports = {};
  const compile = file => ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  }).outputText;
  runInNewContext(compile('app/(core)/assistant/models.ts'), { exports: modelExports });
  runInNewContext(compile('app/api/chat/route.ts'), {
    exports, Response, ReadableStream, TextEncoder, console,
    process: { env: { OPENROUTER_API_KEY: 'test-placeholder' } },
    require: name => {
      if (name === 'openai') return class {
        chat = { completions: { create: async options => {
          requested = options;
          return (async function* () { yield { model: options.model, choices: [{ delta: { content: 'hey' } }] }; })();
        } } };
      };
      if (name.includes('models')) return modelExports;
      if (name.includes('knowledge')) return { buildSystemPrompt: () => 'Test persona' };
      return {};
    },
  });
  const response = await exports.POST({ json: async () => ({ model: 'other/model', messages: [{ role: 'user', content: 'hi' }] }) });
  assert.equal(requested.model, 'openai/gpt-4o');
  assert.equal(response.headers.get('X-Model'), 'openai/gpt-4o');
  assert.equal(await response.text(), 'hey');
});
