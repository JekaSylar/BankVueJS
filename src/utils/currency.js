const formatCurrency = new Intl.NumberFormat('ru-RU', { currency: 'UAH', style: 'currency' })

function currency(value) {
   return formatCurrency.format(value)
}

export default currency