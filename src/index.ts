export function shuffled<T>(items: readonly T[], random: () => number = Math.random): T[] {
  if (!Array.isArray(items) || typeof random !== 'function')
    throw new TypeError('Expected array and random source');
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const value = random();
    if (!Number.isFinite(value) || value < 0 || value >= 1)
      throw new RangeError('Random source must return [0,1)');
    const j = Math.floor(value * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}
