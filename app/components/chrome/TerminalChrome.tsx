import { ReactNode } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function TerminalChrome({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Decorative grid behind the window; its fade mask only affects this layer. */}
      <div className="bg-grid fixed inset-0 -z-10" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-3 sm:px-5 py-4 sm:py-8 min-h-screen flex flex-col">
        <div className="term-window flex flex-col flex-grow">
          <Header />
          <main className="flex-grow p-5 sm:p-8 md:p-10">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
