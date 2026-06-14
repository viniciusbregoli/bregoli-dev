/**
 * Joins truthy class name fragments into a single string. Falsy values
 * (false, undefined, null, '') are dropped, so conditional classes can be
 * written inline: cn('base', active && 'active').
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
