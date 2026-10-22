'use client';

import { FiStar, FiTerminal } from 'react-icons/fi';
import { useViewMode } from '../../(core)/view/context';
import { useLanguage } from '../../(core)/i18n/context';

export default function ViewModeToggle() {
  const { mode, setMode } = useViewMode();
  const { t } = useLanguage();
  return (
    <div className="studio-mode">
      <button onClick={() => setMode('classic')} aria-pressed={mode === 'classic'}>
        {t('studio.portfolio')}
      </button>
      <button onClick={() => setMode('terminal')} aria-pressed={mode === 'terminal'}>
        <FiTerminal aria-hidden />
        <span>Terminal</span>
      </button>
      <button
        onClick={() => setMode('retro')}
        aria-pressed={mode === 'retro'}
        title={t('retro.look.retro')}
      >
        <FiStar aria-hidden />
        <span>Y2K</span>
      </button>
    </div>
  );
}
