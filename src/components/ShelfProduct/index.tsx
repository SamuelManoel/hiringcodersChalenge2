import './style.css'
import './responsive.css'
import { addToCartShelf, formatterMoney } from '../../utils/helpers';

interface Product {
  id: number,
  name: string,
  image: string,
  price: number,
  bestPrice: number,
  quantity?: number
}

interface Props {
  readonly data: Product,
}

const ShelfProduct: React.FC<Props> = ({ data }) => {

  function addToCart() {
    const arrItems = []
    const items = localStorage.getItem(`@Items`)

    if (items) {
      let newItems: Product[] = []
      newItems = JSON.parse(items)
      const exist = newItems.findIndex(i => i.id === data.id)
      if (exist === -1) {
        data.quantity = 1
        newItems.push(data)
        localStorage.setItem(`@Items`, JSON.stringify(newItems))
      }
      if (exist !== -1) {
        const products = JSON.parse(items)
        data.quantity = products[exist].quantity + 1
        products.splice(exist, 1)
        products.push(data)
        localStorage.setItem(`@Items`, JSON.stringify(products))
      }
    } else {
      data.quantity = 1
      arrItems.push(data)
      localStorage.setItem(`@Items`, JSON.stringify(arrItems))
    }

    addToCartShelf()

  }

  return (
    <div className='shelf_product'>

      <div className='shelf_product--image'>
        <img src={data.image} alt="" />
      </div>

      <p className='shelf_product--description'>
        {data.name}
      </p>

      <div className='shelf_product--prices'>
        {data.bestPrice > 0 && <p className='price'>de <span>{formatterMoney(data.price)}</span> por:</p>}
        <p className='best_price'>{data.bestPrice > 0 ? formatterMoney(data.bestPrice) : formatterMoney(data.price)}</p>
      </div>

      <div className='shelf_product--actions'>
        <button className='btn_add' onClick={addToCart}>Adicionar</button>
      </div>
    </div>
  )

}

export default ShelfProduct;
