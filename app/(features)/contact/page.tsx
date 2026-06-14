'use client';

import { useViewMode } from '../../(core)/view/context';
import TerminalContact from '../../components/contact/TerminalContact';
import ClassicContact from '../../components/contact/ClassicContact';

export default function ContactPage() {
  const { mode } = useViewMode();
  return mode === 'terminal' ? <TerminalContact /> : <ClassicContact />;
}
