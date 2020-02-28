export const currencyToString = (amount, currency) => {
    switch (currency) {
        case "EUR":
            return `${amount} €`
        case "USD":
            return `$ ${amount}`
        case "GBP":
            return `£ ${amount}`
        case "CZK":
            if (amount === 1) {
                return `${amount} koruna`
            } else if (amount === 2 || amount === 3 || amount === 4) {
                return `${amount} koruny`
            } else {
                return `${amount} korun`
            }
        default:
            return `${amount} ${currency}`
    }
}