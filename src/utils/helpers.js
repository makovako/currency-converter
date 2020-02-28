export const currencyToString = (amount, currency) => {
    const finAmount = amount.toFixed(2)
    switch (currency) {
        case "EUR":
            return `${finAmount} €`
        case "USD":
            return `$${finAmount}`
        case "GBP":
            return `£${finAmount}`
        case "CZK":
            if (amount === 1) {
                return `${finAmount} koruna`
            } else if (amount === 2 || amount === 3 || amount === 4) {
                return `${finAmount} koruny`
            } else {
                return `${finAmount} korun`
            }
        default:
            return `${finAmount} ${currency}`
    }
}