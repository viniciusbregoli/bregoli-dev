import { ReactNode } from 'react';
import ClassicHeader from '../layout/ClassicHeader';
import ClassicFooter from '../layout/ClassicFooter';

export default function ClassicChrome({ children }: { children: ReactNode }) {
  return (
    <div className="studio-classic flex flex-col min-h-screen">
      <ClassicHeader />
      <main className="flex-grow">{children}</main>
      <ClassicFooter />
    </div>
  );
}
