import { ReactNode } from 'react';

type RetroWindowProps = {
  title: string;
  children: ReactNode;
  /** Wrap the body in a white sunken well (default) or leave it on the gray face. */
  sunken?: boolean;
  id?: string;
  className?: string;
};

/** A Windows 98 window: the building block of every retro page. */
export default function RetroWindow({
  title,
  children,
  sunken = true,
  id,
  className,
}: RetroWindowProps) {
  return (
    <section id={id} className={['retro-window', className].filter(Boolean).join(' ')}>
      <div className="retro-titlebar">
        <span className="retro-titlebar-text">{title}</span>
        <span className="retro-titlebar-buttons" aria-hidden="true">
          <span>_</span>
          <span>□</span>
          <span>×</span>
        </span>
      </div>
      <div className="retro-window-body">
        {sunken ? <div className="retro-sunken">{children}</div> : children}
      </div>
    </section>
  );
}
