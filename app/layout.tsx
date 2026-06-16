import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './(core)/i18n/context';
import { ViewModeProvider } from './(core)/view/context';
import { AssistantChatProvider } from './components/chat/useAssistantChat';
import AppChrome from './components/chrome/AppChrome';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'bregoli_dev',
  description:
    'Portfolio of Vinícius Bregoli — a Computer Engineer leading a small AI team, building agentic AI systems and Python services on AWS.',
  openGraph: {
    title: 'bregoli_dev',
    description:
      'Portfolio of Vinícius Bregoli — a Computer Engineer leading a small AI team, building agentic AI systems and Python services on AWS.',
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          <ViewModeProvider>
            <AssistantChatProvider>
              <AppChrome>{children}</AppChrome>
            </AssistantChatProvider>
          </ViewModeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
