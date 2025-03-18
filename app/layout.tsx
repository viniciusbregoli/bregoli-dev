import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import { LanguageProvider } from './(core)/i18n/context';
import { ThemeProvider } from './(core)/theme/context';
import Footer from './components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vinícius Bregoli Dev',
  description: 'My portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
