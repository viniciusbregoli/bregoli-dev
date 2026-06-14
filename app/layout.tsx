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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          <ThemeProvider>
            {/* Decorative grid sits behind everything; its fade-out mask
                only affects this layer, never the page content. */}
            <div className="bg-grid fixed inset-0 -z-10" aria-hidden="true" />
            <div className="max-w-5xl mx-auto px-3 sm:px-5 py-4 sm:py-8 min-h-screen flex flex-col">
              <div className="term-window flex flex-col flex-grow">
                <Header />
                <main className="flex-grow p-5 sm:p-8 md:p-10">{children}</main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
