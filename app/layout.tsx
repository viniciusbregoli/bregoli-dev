import type { Metadata } from 'next';
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono, Press_Start_2P } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './(core)/i18n/context';
import { ViewModeProvider } from './(core)/view/context';
import { AssistantChatProvider } from './components/chat/useAssistantChat';
import AppChrome from './components/chrome/AppChrome';

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
const plexSans = IBM_Plex_Sans({
  variable: '--font-plex-sans',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});
const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

// Pixel/bitmap font for the chat wordmark — crisp blocky logo, no ASCII-art seams.
const pressStart = Press_Start_2P({
  weight: '400',
  variable: '--font-pixel',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vinícius Bregoli | Computer Engineer',
  description:
    'Vinícius Bregoli, Computer Engineering graduate from PUCPR. Robotics, computer vision, agentic AI, and Python services on AWS.',
  openGraph: {
    title: 'Vinícius Bregoli | Computer Engineer',
    description:
      'Vinícius Bregoli, Computer Engineering graduate from PUCPR. Robotics, computer vision, agentic AI, and Python services on AWS.',
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
        className={`${instrumentSerif.variable} ${plexSans.variable} ${plexMono.variable} ${pressStart.variable} antialiased bg-background text-foreground`}
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
