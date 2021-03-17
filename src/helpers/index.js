const formatValue = (value) => {
    let floatValue = parseFloat(value).toFixed(2);
    console.log(floatValue);
    return "R$ " + floatValue;
}

const subtotalValue = (price, quantity) => {
    let subTotal = price * quantity;
    return subTotal.toFixed(2);
}

export { formatValue, subtotalValue };