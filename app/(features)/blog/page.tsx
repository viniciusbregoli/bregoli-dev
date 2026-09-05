import type { Metadata } from 'next';
import { getPosts } from './posts';
import BlogIndex from '../../components/blog/BlogIndex';

export const metadata: Metadata = {
  title: 'Blog | Vinícius Bregoli',
  description: 'Project updates, ideas, and opinions from Vinícius Bregoli.',
};

export default function BlogPage() {
  const posts = getPosts().map(({ slug, title, description, date, tags, language }) => ({ slug, title, description, date, tags, language }));
  return <BlogIndex posts={posts} />;
}
