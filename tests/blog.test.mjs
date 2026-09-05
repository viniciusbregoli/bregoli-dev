import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const exports = {};
runInNewContext(ts.transpileModule(readFileSync('app/(features)/blog/posts.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText, { exports, require: createRequire(import.meta.url), process });
const { parsePost, getPosts, getPost } = exports;
const source = (extra = '') => `---\ntitle: "Entry"\ndescription: "Description"\ndate: "2026-09-05"\ndraft: false\n${extra}\n---\n## Body\n\nSome text.`;

test('drafts and absent publication flags are excluded, including direct lookup', () => {
  assert.equal(parsePost('draft.md', source().replace('draft: false', 'draft: true')), null);
  assert.equal(parsePost('draft.md', source().replace('draft: false', '')), null);
  assert.equal(getPost('first-post'), undefined);
});
test('published metadata is validated and path-like slugs are rejected', () => {
  const post = parsePost('my-entry.md', source('tags: [Python]\nlanguage: pt'));
  assert.equal(post.slug, 'my-entry');
  assert.equal(post.language, 'pt');
  assert.equal(post.tags[0], 'Python');
  assert.ok(post.content.includes('## Body'));
  assert.equal(parsePost('../escape.md', source()), null);
  assert.throws(() => parsePost('bad.md', source().replace('2026-09-05', '2026-02-30')), /valid quoted/);
  assert.throws(() => parsePost('bad.md', source('tags: Python')), /list of strings/);
  assert.throws(() => parsePost('bad.md', source('language: xx')), /unsupported language/);
  assert.throws(() => parsePost('bad.md', source().replace('title: "Entry"', 'title: ""')), /nonempty/);
});
test('files are sorted newest first and non-post documentation is ignored', () => {
  const directory = mkdtempSync(path.join(tmpdir(), 'blog-test-'));
  try {
    writeFileSync(path.join(directory, 'old.md'), source().replace('2026-09-05', '2025-01-01'));
    writeFileSync(path.join(directory, 'new.md'), source());
    writeFileSync(path.join(directory, 'README.md'), 'Documentation');
    writeFileSync(path.join(directory, 'draft.md'), source().replace('draft: false', 'draft: true'));
    assert.equal(getPosts(directory).map(post => post.slug).join(','), 'new,old');
  } finally { rmSync(directory, { recursive: true }); }
});
