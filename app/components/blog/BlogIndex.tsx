'use client';

import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { useLanguage } from '../../(core)/i18n/context';
import { useViewMode } from '../../(core)/view/context';
import type { Post } from '../../(features)/blog/posts';
import RetroWindow from '../retro/RetroWindow';

export default function BlogIndex({ posts }: { posts: Omit<Post, 'content'>[] }) {
  const { t, language } = useLanguage();
  const { mode } = useViewMode();
  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(language, { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(date));

  if (mode === 'retro') {
    return (
      <RetroWindow title="C:\My Documents\Blog">
        <h2>{t('blog.title')}</h2>
        <p>{t('blog.intro')}</p>
        {posts.length === 0 ? (
          <p className="mt-3"><i>{t('blog.empty')}</i></p>
        ) : (
          <ul className="retro-list mt-3">
            {posts.map((post) => (
              <li key={post.slug} lang={post.language}>
                <Link href={`/blog/${post.slug}`}><b>{post.title}</b></Link>{' '}
                <small>({formatDate(post.date)})</small>
                <br />
                {post.description}
              </li>
            ))}
          </ul>
        )}
      </RetroWindow>
    );
  }

  return (
    <section className={`blog-page ${mode === 'terminal' ? 'blog-terminal' : 'studio-container'}`}>
      <p className="mono-label">{mode === 'terminal' ? '~/blog' : t('nav.blog')}</p>
      <h1 className="blog-title">{t('blog.title')}</h1>
      <p className="blog-intro">{t('blog.intro')}</p>
      <div className="blog-entries">
        {posts.length === 0 ? (
          <div className="blog-empty">
            <span className="blog-prompt" aria-hidden>{'> _'}</span>
            <p>{t('blog.empty')}</p>
          </div>
        ) : posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-entry">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <div lang={post.language}>
              <div className="blog-tags">{post.tags.join(' / ')}</div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
            <FiArrowUpRight aria-hidden />
          </Link>
        ))}
      </div>
    </section>
  );
}
