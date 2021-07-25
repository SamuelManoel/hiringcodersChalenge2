import { useEffect, useState } from 'react';

import logo from '../../assets/images/logo.png'
import IconSearch from '../../assets/images/icons/IconSearch';
import IconLogin from '../../assets/images/icons/IconLogin';
import IconCart from '../../assets/images/icons/IconCart';

import './style.css'
import './responsive.css'

import { formatterMoney } from '../../utils/helpers';
import IconClose from '../../assets/images/icons/IconClose';


interface Product {
  id: number,
  name: string,
  bestPrice: number,
  price: number,
  image: string,
  quantity: number
}

interface Infos {
  total: number,
  discount: number,
  subtotal: number
}

const Header: React.FC = () => {
  const [productsCart, setProductsCart] = useState<Product[]>()
  const [totalItems, setTotalItems] = useState<number>(0)
  const [infosCart, setInfosCart] = useState<Infos>({
    subtotal: 0,
    total: 0,
    discount: 0
  })
  const [openCart, setOpenCart] = useState<boolean>(false)

  function getProducts() {
    const items = localStorage.getItem('@Items')
    if (items) {
      let total: number = 0
      const infos = {
        total: 0,
        discount: 0,
        subtotal: 0
      }

      const products = JSON.parse(items)

      products?.map((p: any) => {
        infos.total += (p.price*p.quantity)

        if(p.bestPrice) {
          infos.discount += ((p.price - p.bestPrice) * p.quantity)
        }

        total += p.quantity
        return true
      })

      infos.subtotal = infos.total - infos.discount

      setInfosCart(infos)
      setTotalItems(total)
      setProductsCart(JSON.parse(items))
    }
  }

  useEffect(() => {
    const body = document.querySelector('body')

    if (openCart) {
      getProducts()

      if(body){
        body.style.height = '100vh'
        body.style.overflow = 'hidden'
      }
      return
    }

    if(body){
      body.style.height = 'auto'
      body.style.overflow = 'auto'
    }


  }, [openCart])

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <div className='image_logo'>
              <img src={logo} alt="" />
            </div>
            <div>
              <p className='store_name'>Mens' <br/>Colone
              </p>
            </div>
          </div>

          <div className='search'>
            <IconSearch />
            <input type="text" name='search' />
          </div>

          <nav>
            <a href='/minha-conta' className='my_account'><span>Minha Conta</span><IconLogin /> </a>
            <p className='my_cart' onClick={e => setOpenCart(true)} ><IconCart /> <span className={`total_items ${productsCart && 'show'}`} id='total_items'>{totalItems}</span></p>
          </nav>
        </div>
      </header>

      <div id='overflow_cart' className={`${openCart && 'show'}`} onClick={e => setOpenCart(false)} />
      <div className={`${openCart && 'show'} container_cart`}>
        <div className='content_cart'>
          <h4>Mini Carrinho <IconClose className='btn_close_cart' onClick={() => setOpenCart(false)} /></h4>

          <div className='box_items_cart'>
            {productsCart?.map(p => (
              <div className='box_item_cart' key={p.id}>
                <span className='quantity_items_cart'>{p.quantity}</span>
                <div className='box_item_cart--image'>
                  <img src={p.image} alt="" />
                </div>
                <div className='box_item_cart--infos'>
                  <span className='box_item_cart--infos--name'>{p.name}</span>

                  {p.bestPrice > 0 &&
                    <span className='box_item_cart--infos--discount'>
                      <span>De <label>{formatterMoney(p.price)}</label> por:</span>
                      <span>{formatterMoney(p.bestPrice)}</span>
                    </span>
                  }

                  {!p.bestPrice &&
                    <span className='box_item_cart--infos--price'>{formatterMoney(p.price)}</span>
                  }
                </div>
              </div>
            ))}
          </div>

          <div className='box_infos_cart'>
            <p className='total'><span>Total:</span><span>{formatterMoney(infosCart?.total)}</span></p>
            <p className='total_discount'><span>Desconto:</span><span> - {formatterMoney(infosCart?.discount)}</span></p>
            <hr />
            <p className='subtotal'><span>Subtotal:</span><span>{formatterMoney(infosCart?.subtotal)}</span></p>
          </div>

          <div className='btn_finalize_purchase'>
            <button>Finalizar compra</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
