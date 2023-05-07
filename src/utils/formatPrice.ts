function convertIntToCurrencyFormat(value: number): string {
  return value.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  });
}

export function formatPrice(value: any): string {
  if (typeof value === 'number') {
    return convertIntToCurrencyFormat(value);
  }

  if (typeof value === 'string') {
    return convertIntToCurrencyFormat(parseInt(value));
  }

  return '0,00';
}
