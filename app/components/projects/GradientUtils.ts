export function getGradientByColor(color: string): {
  from: string;
  to: string;
  darkFrom: string;
  darkTo: string;
} {
  const gradients: Record<string, { from: string; to: string; darkFrom: string; darkTo: string }> =
    {
      blue: {
        from: 'from-blue-400',
        to: 'to-blue-600',
        darkFrom: 'dark:from-blue-600',
        darkTo: 'dark:to-blue-800',
      },
      purple: {
        from: 'from-purple-400',
        to: 'to-purple-600',
        darkFrom: 'dark:from-purple-600',
        darkTo: 'dark:to-purple-800',
      },
      green: {
        from: 'from-green-400',
        to: 'to-green-600',
        darkFrom: 'dark:from-green-600',
        darkTo: 'dark:to-green-800',
      },
      orange: {
        from: 'from-orange-400',
        to: 'to-orange-600',
        darkFrom: 'dark:from-orange-600',
        darkTo: 'dark:to-orange-800',
      },
    };

  return gradients[color] || gradients.blue;
}
