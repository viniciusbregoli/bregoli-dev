import { cn } from '../../(core)/utils/cn';

// macOS-style window controls. The close/minimize/zoom glyphs reveal on hover
// of the cluster, like a real titlebar. Shared by both the terminal titlebar
// and the classic header so the chrome feels consistent across view modes.
export default function TrafficLights({ className }: { className?: string }) {
  return (
    <div className={cn('term-dots flex items-center gap-2', className)}>
      <span className="term-dot red">
        <svg className="term-dot-glyph" viewBox="0 0 10 10" aria-hidden="true">
          <path
            d="M3 3l4 4M7 3l-4 4"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="term-dot yellow">
        <svg className="term-dot-glyph" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M2.4 5h5.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </span>
      <span className="term-dot green">
        <svg className="term-dot-glyph" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M3 3.2h2.4L3 5.6z" fill="currentColor" />
          <path d="M7 6.8H4.6L7 4.4z" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}
