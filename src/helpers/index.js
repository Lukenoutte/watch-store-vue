const formatValue = (value) => {
    let floatValue = parseFloat(value).toFixed(2);
    return `R$ ${floatValue}` ;
}

const subtotalValue = (price, quantity) => {
    let subTotal = price * quantity;
    return parseFloat(subTotal).toFixed(2);
}

export { formatValue, subtotalValue };