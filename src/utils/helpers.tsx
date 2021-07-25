const formatterMoney = (value: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  const price = parseFloat(value.toString().replace(/(\d{1,3})(\d{2})/g, '$1.$2'))
  return formatter.format(price)
}

const addToCartShelf = (): void => {
  const element = document.getElementById('total_items')
  const items = document.getElementById('total_items')?.innerText

  if (element) {
    if (!items) {
      element.classList.add('show')
      element.innerText = '1'
    }
    if (items) {
      element.classList.add('show')
      element.innerText = (parseInt(items)+1).toString()
    }
  }
}

export { formatterMoney, addToCartShelf }
