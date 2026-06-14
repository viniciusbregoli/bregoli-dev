import Cursor from '../terminal/Cursor';

export default function ProjectLoading() {
  return (
    <p className="flex items-center gap-2 text-muted">
      <span className="text-secondary">$</span> loading
      <Cursor />
    </p>
  );
}
