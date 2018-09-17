/*
@deprecated
 */
export const formatCurrency = (amount) => new Intl.NumberFormat('nb-NO', {
  style: 'currency',
  currency: 'NOK',
}).format(amount);

export default {formatCurrency};
