import { ReactNode } from 'react';
import TrafficLights from '../layout/TrafficLights';

type WindowCardProps = {
  /** Optional mono title shown in the titlebar, like a window/file name. */
  title?: string;
  children: ReactNode;
  /** Extra classes on the outer window. */
  className?: string;
  /** Padding (etc.) for the body. */
  bodyClassName?: string;
};

/**
 * A glass card styled like a terminal window: a titlebar with the macOS
 * traffic-light controls (with hover glyphs) on the left, and an HR-friendly
 * body below. Used for the cards on the classic home page.
 */
export default function WindowCard({
  title,
  children,
  className = '',
  bodyClassName = 'p-6',
}: WindowCardProps) {
  return (
    <div
      className={`panel overflow-hidden hover:border-primary/40 transition-colors duration-300 ${className}`}
    >
      <div className="term-titlebar">
        <TrafficLights />
        {title && <span className="truncate font-mono text-xs text-muted">{title}</span>}
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
