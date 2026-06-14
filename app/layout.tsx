import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import { LanguageProvider } from './(core)/i18n/context';
import { ThemeProvider } from './(core)/theme/context';
import Footer from './components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vinícius Bregoli — Computer Engineer',
  description:
    'Portfolio of Vinícius Bregoli, a Computer Engineer working in programming, fullstack development, IT infrastructure and AI.',
  openGraph: {
    title: 'Vinícius Bregoli — Computer Engineer',
    description:
      'Portfolio of Vinícius Bregoli, a Computer Engineer working in programming, fullstack development, IT infrastructure and AI.',
    type: 'website',
  },
};

// Runs before first paint to set the theme class, preventing a flash of the
// wrong theme on load. Mirrors the logic in ThemeProvider.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <Header />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
