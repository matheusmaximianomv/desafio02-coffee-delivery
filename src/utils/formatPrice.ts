export function formatPrice(value: number): string {
  return String(value).replace('.', ',');
}
