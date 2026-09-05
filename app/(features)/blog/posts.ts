import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  language: string;
  content: string;
};

export function parsePost(filename: string, source: string): Post | null {
  const slug = filename.replace(/\.md$/, '');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  const { data, content } = matter(source);
  // Publication requires an explicit opt-in, including for incomplete drafts.
  if (data.draft !== false) return null;
  for (const field of ['title', 'description', 'date']) {
    if (typeof data[field] !== 'string' || !data[field].trim()) {
      throw new Error(`${filename}: ${field} must be a nonempty string`);
    }
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date) ||
      !Number.isFinite(Date.parse(data.date)) ||
      new Date(data.date).toISOString().slice(0, 10) !== data.date) {
    throw new Error(`${filename}: date must be a valid quoted YYYY-MM-DD date`);
  }
  if (!content.trim()) throw new Error(`${filename}: post body is empty`);
  if (data.tags !== undefined && (!Array.isArray(data.tags) || data.tags.some((tag: unknown) => typeof tag !== 'string'))) {
    throw new Error(`${filename}: tags must be a list of strings`);
  }
  const language = data.language ?? 'en';
  if (!['en', 'pt', 'de', 'es', 'zh'].includes(language)) throw new Error(`${filename}: unsupported language`);
  return { slug, title: data.title, description: data.description, date: data.date, tags: data.tags ?? [], language, content };
}

export function getPosts(directory = path.join(process.cwd(), 'content/blog')): Post[] {
  return readdirSync(directory)
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => parsePost(filename, readFileSync(path.join(directory, filename), 'utf8')))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}
