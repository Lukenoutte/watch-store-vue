const formatValue = (value) => `R$ ${parseFloat(value).toFixed(2)}`;

const subtotalValue = (price, quantity) => parseFloat(price * quantity).toFixed(2);

export { formatValue, subtotalValue };
