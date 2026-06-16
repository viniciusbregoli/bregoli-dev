import { ReactNode } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function TerminalChrome({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1600px] mx-auto px-3 sm:px-5 py-4 sm:py-8 min-h-screen flex flex-col">
      <div className="term-window flex flex-col flex-grow">
        <Header />
        <main className="flex-grow p-5 sm:p-8 md:p-10">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
