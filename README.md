# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring a
dark-first "dev/techy" design, a multilingual interface, and a dynamic project showcase.

## Features

- **Multilingual Support**: English, Portuguese, German, Spanish, and Chinese, with the selection persisted across visits
- **Dark-first Design**: Class-based theme toggle with a pre-paint script so there's no flash on load
- **Responsive**: Optimized for mobile, tablet, and desktop, and respects `prefers-reduced-motion`
- **Dynamic Project Showcase**: Easy-to-update project cards and detail pages
- **Accessible Contact Form**: Validated form that emails via a serverless API route

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (CSS-first config)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Environment Variables

The contact form (`app/api/contact/route.ts`) reads:

| Variable            | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `EMAIL_USER`        | Gmail account used to send mail                          |
| `EMAIL_PASSWORD`    | App password for that account                            |
| `CONTACT_RECIPIENT` | Where submissions are delivered (defaults to `EMAIL_USER`) |

## Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/viniciusbregoli/bregoli-dev.git
   cd bregoli-dev
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
bregoli-dev/
├── app/                  # Next.js app directory
│   ├── (core)/           # Core functionality (i18n, theme, utils)
│   ├── (features)/       # Route pages (projects, contact)
│   ├── api/              # Route handlers (contact)
│   ├── components/       # Shared components
│   └── globals.css       # Tailwind 4 theme tokens + design-system utilities
├── public/               # Static assets
└── ...
```

