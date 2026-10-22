'use client';

import { useViewMode } from '../../(core)/view/context';
import TerminalChat from '../../components/chat/TerminalChat';
import ClassicChat from '../../components/chat/ClassicChat';
import RetroChat from '../../components/retro/RetroChat';

export default function ChatPage() {
  const { mode } = useViewMode();
  if (mode === 'terminal') return <TerminalChat />;
  if (mode === 'retro') return <RetroChat />;
  return <ClassicChat />;
}
