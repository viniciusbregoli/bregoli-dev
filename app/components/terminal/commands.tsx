import { ReactNode } from 'react';
import Link from 'next/link';
import { Language, TranslationKey } from '../../(core)/i18n/translations';
import { getExperienceData } from '../home/experience/experienceData';
import { getEducationData } from '../home/education/educationData';
import { projects } from '../../(features)/projects/projectData';
import { technicalSkills, softSkillGroups, spokenLanguages } from '../home/skills/skillsData';

export type CommandContext = {
  t: (key: TranslationKey) => string;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  downloadCV: () => void;
};

/** Renders a translated string, styling `{token}` segments in the accent color. */
export function withTokens(text: string): ReactNode {
  return text.split(/(\{[^}]+\})/).map((part, i) =>
    part.startsWith('{') && part.endsWith('}') ? (
      <span key={i} className="text-primary">
        {part.slice(1, -1)}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export type Command = {
  name: string;
  aliases?: string[];
  description: string;
  /**
   * Pure commands only render content (no side effects), so the terminal can
   * re-run them on every render — that keeps their output in sync with the
   * current language/theme. Action commands (cv, theme, lang, …) run once.
   */
  pure?: boolean;
  /** Returns the output to print, or null for commands that only have side effects. */
  run: (ctx: CommandContext, args: string[]) => ReactNode;
};

// ── Output renderers ──────────────────────────────────────────────────────

function WhoAmI({ ctx }: { ctx: CommandContext }) {
  const { t } = ctx;
  return (
    <div className="space-y-2">
      <p className="text-xl text-primary font-semibold">{t('hero.name')}</p>
      <p className="text-foreground">{t('hero.professionalClaim')}</p>
      <p className="text-muted max-w-2xl">{t('hero.description')}</p>
      <p className="text-muted text-sm pt-1">
        <span className="text-secondary">{t('terminal.tipPrefix')}</span> {withTokens(t('terminal.whoamiTip'))}
      </p>
    </div>
  );
}

function Goals({ ctx }: { ctx: CommandContext }) {
  const { t } = ctx;
  return (
    <div className="space-y-3 text-muted">
      <p>
        <span className="text-secondary">short_term</span> ={' '}
        <span className="text-foreground">{t('goals.shortTermDesc')}</span>
      </p>
      <p>
        <span className="text-secondary">long_term</span> ={' '}
        <span className="text-foreground">{t('goals.longTermDesc')}</span>
      </p>
    </div>
  );
}

function Experience({ ctx }: { ctx: CommandContext }) {
  const { language } = ctx;
  const experiences = getExperienceData();
  return (
    <div className="space-y-6">
      {experiences.map((exp, i) => {
        const hash = (0xc0ffee + i * 0x1d4a7).toString(16).slice(0, 7);
        return (
          <div key={i}>
            <p className="flex flex-wrap items-baseline gap-2">
              <span className="text-primary">{hash}</span>
              <span className="text-foreground font-semibold">{exp.company}</span>
              <span className="text-muted">— {exp.position[language] || exp.position.en}</span>
            </p>
            <div className="pl-4 border-l border-line ml-1 mt-1 space-y-1 text-sm">
              <p className="text-muted">
                <span className="text-secondary">├</span> {exp.period[language] || exp.period.en} ·{' '}
                {exp.location}
              </p>
              <p className="text-muted">
                <span className="text-secondary">├</span> {exp.description[language] || exp.description.en}
              </p>
              <p className="text-muted flex flex-wrap gap-x-2 gap-y-1">
                <span className="text-secondary">└</span>
                {exp.technologies.map((tech, ti) => (
                  <span key={ti} className="text-foreground/80">
                    {tech[language] || tech.en}
                    {ti < exp.technologies.length - 1 && <span className="text-muted"> ·</span>}
                  </span>
                ))}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Skills({ ctx }: { ctx: CommandContext }) {
  const { t } = ctx;
  return (
    <div className="space-y-6">
      {/* technical */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
        {technicalSkills.map((cat) => (
          <div key={cat.category}>
            <p className="text-secondary">{cat.category}/</p>
            <div className="pl-4">
              {cat.skills.map((skill) => (
                <p key={skill} className="text-muted">
                  <span className="text-line">└─</span> <span className="text-foreground/90">{skill}</span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* soft */}
      <div>
        <p className="text-secondary">{t('skills.soft').toLowerCase()}/</p>
        <div className="pl-4 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mt-1">
          {softSkillGroups.map((g) => (
            <div key={g.categoryKey}>
              <p className="text-foreground/90">{t(g.categoryKey)}/</p>
              <div className="pl-4">
                {g.skillKeys.map((k) => (
                  <p key={k} className="text-muted">
                    <span className="text-line">└─</span> <span className="text-foreground/90">{t(k)}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* spoken */}
      <div>
        <p className="text-secondary">spoken/</p>
        <div className="pl-4 flex flex-wrap gap-x-6">
          {spokenLanguages.map((l) => (
            <p key={l.name} className="text-muted">
              <span className="text-foreground/90">{l.name}</span>{' '}
              <span className="text-primary">[{l.level.toLowerCase()}]</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Education({ ctx }: { ctx: CommandContext }) {
  const { language } = ctx;
  const educations = getEducationData();
  return (
    <div className="space-y-3">
      {educations.map((edu, i) => (
        <div key={i}>
          <p className="text-foreground">
            <span className="text-primary">#</span> {edu.institution}
          </p>
          <p className="pl-4 text-muted text-sm">
            {edu.program[language] || edu.program.en} · {edu.period[language] || edu.period.en} ·{' '}
            {edu.location}
          </p>
        </div>
      ))}
    </div>
  );
}

function Projects({ ctx }: { ctx: CommandContext }) {
  const { language } = ctx;
  return (
    <div className="space-y-1">
      {projects.map((p) => (
        <Link
          key={p.id}
          href={`/projects/${p.id}`}
          className="group flex flex-wrap items-baseline gap-2 hover:text-primary transition-colors"
        >
          <span className="text-muted text-xs">drwxr-xr-x</span>
          <span className="text-secondary group-hover:text-primary transition-colors">./{p.id}/</span>
          <span className="text-foreground/90 group-hover:text-primary">
            {p.title[language] || p.title.en}
          </span>
        </Link>
      ))}
      <p className="text-muted text-sm pt-2">{withTokens(ctx.t('terminal.projectsHint'))}</p>
    </div>
  );
}

function Contact({ ctx }: { ctx: CommandContext }) {
  const items = [
    { label: 'email', value: 'me@viniciusbregoli.dev', href: 'mailto:me@viniciusbregoli.dev' },
    { label: 'linkedin', value: 'linkedin.com/in/viniciusbregoli', href: 'https://linkedin.com/in/viniciusbregoli' },
    { label: 'github', value: 'github.com/viniciusbregoli', href: 'https://github.com/viniciusbregoli' },
    { label: 'location', value: 'Curitiba, PR - Brazil', href: null as string | null },
  ];
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <p key={item.label} className="flex flex-wrap items-baseline gap-2 text-sm">
          <span className="text-secondary w-20 shrink-0">{item.label}</span>
          {item.href ? (
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-foreground/90 hover:text-primary transition-colors"
            >
              {item.value}
            </a>
          ) : (
            <span className="text-foreground/90">{item.value}</span>
          )}
        </p>
      ))}
      <p className="text-muted text-sm pt-2">{withTokens(ctx.t('terminal.contactHint'))}</p>
    </div>
  );
}

function Neofetch({ ctx }: { ctx: CommandContext }) {
  const art = ['   ╭───────────╮', '   │  ╶▒▒▒▒╴  │', '   │ ▒ ◠   ◠ ▒ │', '   │  ╲  ◡  ╱  │', '   ╰───────────╯'];
  const info: [string, string][] = [
    ['user', 'vinicius'],
    ['role', ctx.t('hero.name').replace(/^I'?m\s*/i, '') + ' — Computer Engineer'],
    ['os', `catppuccin ${ctx.theme === 'dark' ? 'mocha' : 'latte'}`],
    ['shell', 'bregoli-sh'],
    ['lang', ctx.language],
    ['stack', 'Next.js · React · TypeScript · Tailwind'],
  ];
  return (
    <div className="flex flex-col sm:flex-row gap-6 text-sm">
      <pre className="text-primary leading-tight">{art.join('\n')}</pre>
      <div className="space-y-0.5">
        {info.map(([k, v]) => (
          <p key={k} className="text-muted">
            <span className="text-secondary">{k}</span>: <span className="text-foreground/90">{v}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

// ── Command registry ───────────────────────────────────────────────────────

export const COMMANDS: Command[] = [
  {
    name: 'help',
    description: 'list available commands',
    pure: true,
    run: () => (
      <div className="space-y-0.5">
        {COMMANDS.map((c) => (
          <p key={c.name} className="flex gap-3 text-sm">
            <span className="text-primary w-28 shrink-0">{c.name}</span>
            <span className="text-muted">{c.description}</span>
          </p>
        ))}
        <p className="text-muted text-sm pt-2">
          <span className="text-secondary">Tab</span> completes · <span className="text-secondary">↑/↓</span>{' '}
          history · <span className="text-secondary">Ctrl+L</span> clears
        </p>
      </div>
    ),
  },
  { name: 'whoami', description: 'who I am', pure: true, run: (ctx) => <WhoAmI ctx={ctx} /> },
  { name: 'goals', description: 'what I am working toward', pure: true, run: (ctx) => <Goals ctx={ctx} /> },
  {
    name: 'experience',
    aliases: ['exp', 'work'],
    description: 'work history',
    pure: true,
    run: (ctx) => <Experience ctx={ctx} />,
  },
  {
    name: 'skills',
    aliases: ['ls skills'],
    description: 'tech, soft & spoken languages',
    pure: true,
    run: (ctx) => <Skills ctx={ctx} />,
  },
  { name: 'education', aliases: ['edu'], description: 'where I studied', pure: true, run: (ctx) => <Education ctx={ctx} /> },
  {
    name: 'projects',
    aliases: ['ls projects'],
    description: "things I've built",
    pure: true,
    run: (ctx) => <Projects ctx={ctx} />,
  },
  { name: 'contact', description: 'how to reach me', pure: true, run: (ctx) => <Contact ctx={ctx} /> },
  {
    name: 'cv',
    aliases: ['resume'],
    description: 'download my resume',
    run: (ctx) => {
      ctx.downloadCV();
      return <p className="text-muted">downloading resume ({ctx.language.toUpperCase()})…</p>;
    },
  },
  {
    name: 'theme',
    description: 'switch theme (mocha | latte)',
    run: (ctx, args) => {
      const arg = args[0]?.toLowerCase();
      const next = arg === 'mocha' ? 'dark' : arg === 'latte' ? 'light' : ctx.theme === 'dark' ? 'light' : 'dark';
      ctx.setTheme(next);
      return (
        <p className="text-muted">
          theme → <span className="text-primary">{next === 'dark' ? 'mocha' : 'latte'}</span>
        </p>
      );
    },
  },
  {
    name: 'lang',
    description: 'set language (en | pt | de | es | zh)',
    run: (ctx, args) => {
      const arg = args[0]?.toLowerCase();
      if (arg === 'en' || arg === 'pt' || arg === 'de' || arg === 'es' || arg === 'zh') {
        ctx.setLanguage(arg);
        return (
          <p className="text-muted">
            language → <span className="text-primary">{arg}</span>
          </p>
        );
      }
      return (
        <p className="text-muted">
          current: <span className="text-primary">{ctx.language}</span> · usage:{' '}
          <span className="text-foreground/90">lang en|pt|de|es|zh</span>
        </p>
      );
    },
  },
  { name: 'neofetch', description: 'system info', pure: true, run: (ctx) => <Neofetch ctx={ctx} /> },
  {
    name: 'github',
    description: 'open my GitHub',
    run: () => {
      window.open('https://github.com/viniciusbregoli', '_blank', 'noopener');
      return <p className="text-muted">opening github.com/viniciusbregoli…</p>;
    },
  },
  {
    name: 'linkedin',
    description: 'open my LinkedIn',
    run: () => {
      window.open('https://linkedin.com/in/viniciusbregoli', '_blank', 'noopener');
      return <p className="text-muted">opening linkedin.com/in/viniciusbregoli…</p>;
    },
  },
  {
    name: 'sudo',
    description: 'nice try',
    run: () => <p className="text-muted">vinicius is not in the sudoers file. This incident will be reported.</p>,
  },
  { name: 'clear', aliases: ['cls'], description: 'clear the screen', run: () => null },
];

/** Resolves a typed command (name or alias) to its definition. */
export function resolveCommand(input: string): Command | undefined {
  const name = input.trim().toLowerCase();
  return COMMANDS.find((c) => c.name === name || c.aliases?.includes(name));
}

/** All names + aliases, for autosuggest. */
export const COMMAND_NAMES: string[] = COMMANDS.flatMap((c) => [c.name, ...(c.aliases ?? [])]);
