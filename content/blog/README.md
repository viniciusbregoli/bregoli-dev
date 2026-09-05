# Publishing a post

1. Copy `first-post.md` to a lowercase, hyphenated filename such as `building-my-robot.md`. The filename becomes `/blog/building-my-robot`.
2. Set the title, description, quoted date (`YYYY-MM-DD`), tags, and language (`en`, `pt`, `de`, `es`, or `zh`). Write the body in Markdown. The page supplies the title, so start body headings with `##`.
3. Keep `draft: true` while writing. Missing draft values also hide the post.
4. Set `draft: false` to publish. Run `npm run dev` to preview the post locally, then deploy the site through your normal process. Publishing a file locally does not deploy it.

Posts appear newest first. Dates are labels, not scheduled publication times. Posts stay in their original language when visitors change the interface language.

Put images in `public/blog/` and reference them as `![Descriptive alternative text](/blog/my-image.png)`. Standard Markdown headings, links, lists, quotes, images, and code blocks are supported. Raw HTML is ignored. Code is displayed without syntax highlighting.

Do not put private notes in a public repository, even inside draft posts. Drafts are excluded from rendered pages, but repository files remain visible on GitHub.
