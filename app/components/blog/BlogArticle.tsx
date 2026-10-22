'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../(core)/i18n/context';
import { useViewMode } from '../../(core)/view/context';
import type { Post } from '../../(features)/blog/posts';
import RetroWindow from '../retro/RetroWindow';

export default function BlogArticle({ post, children }: { post: Omit<Post, 'content'>; children: ReactNode }) {
  const { t, language } = useLanguage();
  const { mode } = useViewMode();
  const date = new Intl.DateTimeFormat(language, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(post.date));

  if (mode === 'retro') {
    return (
      <>
        <p>
          <Link href="/blog" className="retro-btn">« {t('blog.back')}</Link>
        </p>
        <RetroWindow title={`${post.title}.txt`}>
          <article lang={post.language}>
            <h2>{post.title}</h2>
            <p><i>{post.description}</i></p>
            <p>
              <small>
                <time dateTime={post.date}>{date}</time>
                {post.tags.length > 0 && ` · ${post.tags.join(' / ')}`}
              </small>
            </p>
            <hr className="retro-hr" />
            <div className="retro-prose">{children}</div>
          </article>
        </RetroWindow>
      </>
    );
  }

  return (
    <div className={`blog-page ${mode === 'terminal' ? 'blog-terminal' : 'studio-container'}`}>
      <Link className="studio-text-link mb-12" href="/blog">{t('blog.back')}</Link>
      <article className="blog-paper" lang={post.language}>
        <header>
          <p className="mono-label">{post.tags.join(' / ') || t('nav.blog')}</p>
          <h1 className="blog-title">{post.title}</h1>
          <p className="blog-intro">{post.description}</p>
          <time dateTime={post.date} className="blog-date">{date}</time>
        </header>
        <div className="blog-prose">{children}</div>
      </article>
    </div>
  );
}
