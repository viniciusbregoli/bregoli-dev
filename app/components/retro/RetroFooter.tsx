'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../../(core)/i18n/context';
import { projects } from '../../(features)/projects/projectData';

type Badge = { href: string; icon: string; label: string; colors: [string, string, string] };

// [icon block background, text block background, text color]
const BADGES: Badge[] = [
  {
    href: 'https://neocities.org/',
    icon: '🐱',
    label: 'Neocities inspired',
    colors: ['#ffffff', '#ff66cc', '#ffffff'],
  },
  {
    href: 'https://github.com/viniciusbregoli',
    icon: '🐙',
    label: 'GitHub',
    colors: ['#ffffff', '#24292e', '#ffffff'],
  },
  {
    href: 'https://linkedin.com/in/viniciusbregoli',
    icon: 'in',
    label: 'LinkedIn',
    colors: ['#ffffff', '#0a66c2', '#ffffff'],
  },
  {
    href: 'https://nextjs.org/',
    icon: '▲',
    label: 'Made with Next.js',
    colors: ['#000000', '#ffffff', '#000000'],
  },
  {
    href: 'mailto:me@viniciusbregoli.dev',
    icon: '✉',
    label: 'E-mail me!',
    colors: ['#ffff00', '#008000', '#ffff00'],
  },
  {
    href: 'https://www.anybrowser.org/campaign/',
    icon: '🌐',
    label: 'Any browser',
    colors: ['#ffffff', '#000080', '#ffffff'],
  },
];

export default function RetroFooter() {
  const { t } = useLanguage();
  const router = useRouter();

  const goToRandomProject = (e: React.MouseEvent) => {
    e.preventDefault();
    const project = projects[Math.floor(Math.random() * projects.length)];
    router.push(`/projects/${project.id}`);
  };

  return (
    <footer className="mt-4 text-center" style={{ color: '#ffffff' }}>
      <hr className="retro-hr" />

      <div className="retro-construction" role="note">
        <span>🚧 {t('retro.underConstruction')} 🚧</span>
      </div>

      <nav className="my-4" aria-label="Webring">
        <span style={{ color: '#ffff66' }}>« </span>
        <a
          href="https://github.com/viniciusbregoli"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#66ccff' }}
        >
          GitHub
        </a>
        <span style={{ color: '#ffff66' }}> | ★ </span>
        <Link href="/projects" onClick={goToRandomProject} style={{ color: '#66ccff' }}>
          {t('retro.random')}
        </Link>
        <span style={{ color: '#ffff66' }}> ★ | </span>
        <a
          href="https://linkedin.com/in/viniciusbregoli"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#66ccff' }}
        >
          LinkedIn
        </a>
        <span style={{ color: '#ffff66' }}> »</span>
      </nav>

      <div className="retro-badges">
        {BADGES.map((badge) => (
          <a
            key={badge.label}
            href={badge.href}
            className="retro-badge"
            target={badge.href.startsWith('http') ? '_blank' : undefined}
            rel={badge.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{ background: badge.colors[1], color: badge.colors[2] }}
          >
            <b style={{ background: badge.colors[0], color: badge.colors[1] }} aria-hidden="true">
              {badge.icon}
            </b>
            <span>{badge.label}</span>
          </a>
        ))}
      </div>

      <p className="mt-4" style={{ fontSize: 12 }}>
        {t('retro.bestViewed')}
        <br />© {new Date().getFullYear()} Vinícius Bregoli · {t('footer.rights')} ·{' '}
        <a href="#top" style={{ color: '#66ccff' }}>
          {t('retro.top')} ↑
        </a>
      </p>
    </footer>
  );
}
