'use client';

import { useViewMode } from '../../(core)/view/context';
import TerminalChat from '../../components/chat/TerminalChat';
import ClassicChat from '../../components/chat/ClassicChat';

export default function ChatPage() {
  const { mode } = useViewMode();
  return mode === 'terminal' ? <TerminalChat /> : <ClassicChat />;
}
