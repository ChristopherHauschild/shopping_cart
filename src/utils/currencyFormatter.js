export const toCurrency = (value) => {
  if (!value) return 'R$ 0,00';

  const parsedValue = value / 100;

  const formatted = parseFloat(parsedValue).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  return `R$ ${formatted}`;
};
