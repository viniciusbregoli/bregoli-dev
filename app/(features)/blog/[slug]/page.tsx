import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import { getPost, getPosts } from '../posts';
import BlogArticle from '../../../components/blog/BlogArticle';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return { title: `${post.title} | Vinícius Bregoli`, description: post.description,
    openGraph: { type: 'article', title: post.title, description: post.description, publishedTime: post.date } };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const { content, ...metadata } = post;
  return <BlogArticle post={metadata}><Markdown skipHtml>{content}</Markdown></BlogArticle>;
}
