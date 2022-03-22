import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import {getProducts} from '../../Containers/promiser'

function ItemDetailContainer({greeting}) {
  const [products, setProducts]   = useState([])

  useEffect(() => {
    getProducts
    .then(response => setProducts(response))
    // .then(response => setProducto(response.find(item => item.Id === 2)))
    .catch((error) => console.log(error))
    .finally(console.log('Loaded'));

  },[])

  return (
    <div className='itemDetailContainer'>
      <div className='greeting'>{greeting}</div>
      <div className="ItemsContainer">
      <ItemDetail products={products} />
      </div>
    </div>
  )
}

export default ItemDetailContainer

