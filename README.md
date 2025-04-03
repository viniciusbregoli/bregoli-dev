# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring a multilingual interface and dynamic project showcase.


## Features

- **Multilingual Support**: Available in English, Portuguese, and German
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark Mode**: Automatic dark mode support based on system preferences
- **Dynamic Project Showcase**: Easy-to-update project cards
- **Modern UI**: Beautiful gradients, animations, and interactive elements
- **Performance Optimized**: Fast loading times and smooth transitions

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

- **Deployment**: [Vercel](https://vercel.com/) - Cloud platform for static sites

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
│   ├── (core)/           # Core functionality (i18n, etc.)
│   ├── (features)/       # Feature-specific components
│   ├── components/       # Shared components
│   └── ...
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind CSS configuration
└── ...
```

