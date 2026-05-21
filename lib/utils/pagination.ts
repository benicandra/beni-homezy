export function getPaginationRange(
  current: number,
  total: number
): (number | string)[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const range: (number | string)[] = [1];

  if (current <= 3) {
    range.push(2, 3, "...", total);
  } else if (current >= total - 2) {
    range.push("...", total - 2, total - 1, total);
  } else {
    range.push("...", current - 1, current, current + 1, "...", total);
  }

  return range;
}
