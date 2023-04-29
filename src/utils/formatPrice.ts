function changeDotToComma(value: string): string {
  return value.replace('.', ',');
}

export function formatPrice(value: any): string {
  if (typeof value === 'number') {
    return changeDotToComma(String(value));
  }

  if (typeof value === 'string') {
    return changeDotToComma(value);
  }

  return '0,00';
}
