import { ReactNode } from 'react';
import Link from 'next/link';
import { Language, TranslationKey } from '../../(core)/i18n/translations';
import { getExperienceData } from '../home/experience/experienceData';
import { getEducationData } from '../home/education/educationData';
import { projects } from '../../(features)/projects/projectData';
import { technicalSkills, softSkillGroups, spokenLanguages } from '../home/skills/skillsData';
import ChatAnswer from './ChatAnswer';

export type CommandContext = {
  t: (key: TranslationKey) => string;
  language: Language;
  setLanguage: (lang: Language) => void;
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
  /** Translation key for the command's description (shown in help/autosuggest). */
  descriptionKey?: TranslationKey;
  /**
   * Hidden commands work when typed but are kept out of `help` and the
   * autosuggest — classic-Linux easter eggs, a nice touch for those who poke.
   */
  hidden?: boolean;
  /**
   * Pure commands only render content (no side effects), so the terminal can
   * re-run them on every render — that keeps their output in sync with the
   * current language. Action commands (cv, lang, …) run once.
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
    ['os', 'catppuccin mocha'],
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
    descriptionKey: 'terminal.cmd.help',
    pure: true,
    run: (ctx) => (
      <div className="space-y-0.5">
        {COMMANDS.filter((c) => !c.hidden).map((c) => (
          <p key={c.name} className="flex gap-3 text-sm">
            <span className="text-primary w-28 shrink-0">{c.name}</span>
            <span className="text-muted">{c.descriptionKey ? ctx.t(c.descriptionKey) : ''}</span>
          </p>
        ))}
        <p className="text-muted text-sm pt-2">
          <span className="text-secondary">Tab</span> {ctx.t('terminal.help.completes')} ·{' '}
          <span className="text-secondary">↑/↓</span> {ctx.t('terminal.help.history')} ·{' '}
          <span className="text-secondary">Ctrl+L</span> {ctx.t('terminal.help.clears')}
        </p>
      </div>
    ),
  },
  { name: 'whoami', descriptionKey: 'terminal.cmd.whoami', pure: true, run: (ctx) => <WhoAmI ctx={ctx} /> },
  {
    name: 'ask',
    aliases: ['chat'],
    descriptionKey: 'terminal.cmd.ask',
    // Not pure: it must run once (fires a network request), not re-run on every
    // render. The returned component owns the streaming lifecycle.
    run: (ctx, args) => {
      const question = args.join(' ').trim();
      if (!question) return <p className="text-muted">{withTokens(ctx.t('terminal.askUsage'))}</p>;
      return <ChatAnswer question={question} language={ctx.language} errorText={ctx.t('assistant.error')} />;
    },
  },
  { name: 'goals', descriptionKey: 'terminal.cmd.goals', pure: true, run: (ctx) => <Goals ctx={ctx} /> },
  {
    name: 'experience',
    aliases: ['exp', 'work'],
    descriptionKey: 'terminal.cmd.experience',
    pure: true,
    run: (ctx) => <Experience ctx={ctx} />,
  },
  {
    name: 'skills',
    aliases: ['ls skills'],
    descriptionKey: 'terminal.cmd.skills',
    pure: true,
    run: (ctx) => <Skills ctx={ctx} />,
  },
  {
    name: 'education',
    aliases: ['edu'],
    descriptionKey: 'terminal.cmd.education',
    pure: true,
    run: (ctx) => <Education ctx={ctx} />,
  },
  {
    name: 'projects',
    aliases: ['ls projects'],
    descriptionKey: 'terminal.cmd.projects',
    pure: true,
    run: (ctx) => <Projects ctx={ctx} />,
  },
  { name: 'contact', descriptionKey: 'terminal.cmd.contact', pure: true, run: (ctx) => <Contact ctx={ctx} /> },
  {
    name: 'cv',
    aliases: ['resume'],
    descriptionKey: 'terminal.cmd.cv',
    run: (ctx) => {
      ctx.downloadCV();
      return <p className="text-muted">downloading resume ({ctx.language.toUpperCase()})…</p>;
    },
  },
  {
    name: 'lang',
    descriptionKey: 'terminal.cmd.lang',
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
  { name: 'neofetch', descriptionKey: 'terminal.cmd.neofetch', pure: true, run: (ctx) => <Neofetch ctx={ctx} /> },
  {
    name: 'github',
    descriptionKey: 'terminal.cmd.github',
    run: () => {
      window.open('https://github.com/viniciusbregoli', '_blank', 'noopener');
      return <p className="text-muted">opening github.com/viniciusbregoli…</p>;
    },
  },
  {
    name: 'linkedin',
    descriptionKey: 'terminal.cmd.linkedin',
    run: () => {
      window.open('https://linkedin.com/in/viniciusbregoli', '_blank', 'noopener');
      return <p className="text-muted">opening linkedin.com/in/viniciusbregoli…</p>;
    },
  },
  {
    name: 'sudo',
    descriptionKey: 'terminal.cmd.sudo',
    run: () => <p className="text-muted">vinicius is not in the sudoers file. This incident will be reported.</p>,
  },
  { name: 'clear', aliases: ['cls'], descriptionKey: 'terminal.cmd.clear', run: () => null },

  // ── Hidden classic-Linux commands — easter eggs, kept out of help. ─────────
  {
    name: 'ls',
    hidden: true,
    run: () => (
      <p className="flex flex-wrap gap-x-4 gap-y-1">
        <span className="text-primary">experience/</span>
        <span className="text-primary">education/</span>
        <span className="text-primary">projects/</span>
        <span className="text-foreground/80">about.txt</span>
        <span className="text-foreground/80">skills.json</span>
        <span className="text-foreground/80">contact.md</span>
        <span className="text-secondary">cv.pdf</span>
      </p>
    ),
  },
  { name: 'pwd', hidden: true, run: () => <p className="text-foreground/90">/home/vinicius</p> },
  {
    name: 'cd',
    hidden: true,
    run: (_ctx, args) =>
      !args.length || args[0] === '~' || args[0] === '/home/vinicius' ? null : (
        <p className="text-muted">{`cd: ${args[0]}: No such file or directory`}</p>
      ),
  },
  { name: 'echo', hidden: true, run: (_ctx, args) => <p className="text-foreground/90">{args.join(' ')}</p> },
  { name: 'date', hidden: true, run: () => <p className="text-foreground/90">{new Date().toString()}</p> },
  {
    name: 'uname',
    hidden: true,
    run: (_ctx, args) => (
      <p className="text-foreground/90">
        {args.includes('-a') ? 'Linux bregoli-dev 6.6.0-bregoli #1 SMP x86_64 GNU/Linux' : 'Linux'}
      </p>
    ),
  },
  {
    name: 'uptime',
    hidden: true,
    run: () => (
      <p className="text-foreground/90">up since you opened this tab · load average: 0.42, 0.13, 0.07</p>
    ),
  },
  {
    name: 'cat',
    hidden: true,
    run: (_ctx, args) => {
      if (!args.length) return <p className="text-muted">{'usage: cat <file>'}</p>;
      if (args[0] === 'cv.pdf')
        return <p className="text-muted">{'cat: cv.pdf: binary file — run `cv` to download it'}</p>;
      return <p className="text-muted">{`cat: ${args[0]}: No such file or directory`}</p>;
    },
  },
  {
    name: 'man',
    hidden: true,
    run: (_ctx, args) =>
      args.length ? (
        <p className="text-muted">{`No manual entry for ${args[0]} — try help`}</p>
      ) : (
        <p className="text-muted">What manual page do you want?</p>
      ),
  },
  {
    name: 'vim',
    aliases: ['vi'],
    hidden: true,
    run: () => <p className="text-muted">{'to exit vim, close the tab. (the only known method)'}</p>,
  },
  { name: 'nano', hidden: true, run: () => <p className="text-muted">{'nano? bold choice.'}</p> },
  {
    name: 'emacs',
    hidden: true,
    run: () => <p className="text-muted">{'a fine operating system, lacking only a decent editor.'}</p>,
  },
  {
    name: 'rm',
    hidden: true,
    run: (_ctx, args) => {
      const joined = args.join(' ');
      if (joined.includes('-rf') && (joined.includes('/') || joined.includes('*')))
        return <p className="text-muted">{'whoa — nice try. this portfolio is read-only. 🙂'}</p>;
      return (
        <p className="text-muted">{`rm: cannot remove '${args[0] ?? ''}': Operation not permitted`}</p>
      );
    },
  },
  {
    name: 'exit',
    aliases: ['logout', 'quit'],
    hidden: true,
    run: () => <p className="text-muted">{'there is no escape — but thanks for visiting.'}</p>,
  },
  {
    name: 'top',
    aliases: ['htop'],
    hidden: true,
    run: () => <p className="text-muted">{'all systems nominal. (1 process: curiosity, 99% CPU)'}</p>,
  },
  {
    name: 'cowsay',
    hidden: true,
    run: (_ctx, args) => {
      const text = args.join(' ') || 'moo';
      const bar = '-'.repeat(text.length + 2);
      const cow = [
        '        \\   ^__^',
        '         \\  (oo)\\_______',
        '            (__)\\       )\\/\\',
        '                ||----w |',
        '                ||     ||',
      ].join('\n');
      return (
        <pre className="text-foreground/90 leading-tight text-xs sm:text-sm">
          {` _${bar}_\n< ${text} >\n -${bar}-\n${cow}`}
        </pre>
      );
    },
  },
];

/** Resolves a typed command (name or alias) to its definition. */
export function resolveCommand(input: string): Command | undefined {
  const name = input.trim().toLowerCase();
  return COMMANDS.find((c) => c.name === name || c.aliases?.includes(name));
}

/** Visible names + aliases, for autosuggest (hidden easter eggs are excluded). */
export const COMMAND_NAMES: string[] = COMMANDS.filter((c) => !c.hidden).flatMap((c) => [
  c.name,
  ...(c.aliases ?? []),
]);
