import { ReactNode } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function TerminalChrome({ children }: { children: ReactNode }) {
  return (
    <div className="studio-terminal-shell max-w-[1500px] mx-auto px-3 sm:px-6 lg:px-16 py-4 sm:py-10 min-h-screen flex flex-col">
      <div className="term-window flex flex-col flex-grow">
        <Header />
        <main className="flex flex-col flex-grow p-5 sm:p-8 md:p-10">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
