'use client';

import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { useLanguage } from '../../(core)/i18n/context';
import { useViewMode } from '../../(core)/view/context';
import type { Post } from '../../(features)/blog/posts';

export default function BlogIndex({ posts }: { posts: Omit<Post, 'content'>[] }) {
  const { t, language } = useLanguage();
  const { mode } = useViewMode();
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
            <time dateTime={post.date}>{new Intl.DateTimeFormat(language, { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(post.date))}</time>
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
