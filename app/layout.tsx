import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './(core)/i18n/context';
import { ViewModeProvider } from './(core)/view/context';
import AppChrome from './components/chrome/AppChrome';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          <ViewModeProvider>
            <AppChrome>{children}</AppChrome>
          </ViewModeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
