import { useState } from "react"

import Header from "../components/Header/header"
import ShelfProduct from "../components/ShelfProduct"

import products from '../utils/json/products.json'

import './style.css'

interface Products {
  id: number,
  price: number,
  bestPrice: number,
  image: string,
  name: string,
  description: string
}

const Home: React.FC = () => {
  const [allProducts] = useState<Products[]>(products)

  return (
    <div>
      <Header />

      <section className='container_content'>
        { allProducts?.map( p => (
          <ShelfProduct data={p}  key={p.id}/>
        ))}
      </section>


    </div>
  )
}

export default Home
