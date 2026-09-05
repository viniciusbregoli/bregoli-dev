# Signal Studio

Selected for the personal portfolio on 2026-09-05.

- Matrix green accents on a near-black background, with falling Latin and katakana characters and cursor connections.
- Instrument Serif for display text, IBM Plex Sans for reading, and IBM Plex Mono for navigation and the functional terminal.
- The introduction emphasizes Computer Engineering graduation, robotics, and current AI and software work.
- Editorial project rows, animated experience disclosures, and a labeled portfolio/terminal switch.
- Rain and pointer effects respect reduced motion. Touch does not trigger hover effects.
- Blog posts are Markdown files with explicit publication flags. Article and experience backgrounds are transparent by user preference.

References inspected through 21st:

- Particle Drift: https://21st.dev/@mengto/components/particle-drift
- Editorial Hero: https://21st.dev/@felipemenezes098/components/hero-05
- Spotlight Card: https://21st.dev/@preetsuthar17/components/spotlight-card
- Matrix code rain (component 2507) and Blog 7 (component 686).

Motion reference: https://motion.dev/examples/react-scroll-triggered

Verification: `npm test`, `npx eslint app tests`, `npx tsc --noEmit`, and `npm run build`. Stop the development server before building because both commands write `.next`.

Publishing instructions: `content/blog/README.md`.
