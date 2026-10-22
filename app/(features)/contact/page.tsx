'use client';

import { useViewMode } from '../../(core)/view/context';
import TerminalContact from '../../components/contact/TerminalContact';
import ClassicContact from '../../components/contact/ClassicContact';
import RetroContact from '../../components/retro/RetroContact';

export default function ContactPage() {
  const { mode } = useViewMode();
  if (mode === 'terminal') return <TerminalContact />;
  if (mode === 'retro') return <RetroContact />;
  return <ClassicContact />;
}
