import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Components/ItemList/ItemList";
import './ItemListContainer.css';
import {getProducts} from './promiser'

function ItemListContainer({greeting}) {
  const [products, setProducts]   = useState([]);
  const { categoriaid } = useParams();

  useEffect(() => {
    if (categoriaid) {
        getProducts
      .then(response => setProducts(response.filter(prod=> prod.categoria === categoriaid)))
      .catch((error) => console.log(error))
      .finally(console.log('Loaded'));
        
    } else {
        getProducts
      .then(response => setProducts(response))
      .catch((error) => console.log(error))
      .finally(console.log('Loaded'));
    }

  },[categoriaid])

  console.log(categoriaid)
  return (
    <div className='itemListContainer'>
      <div className='greeting'>{greeting}</div>
      <div className="ItemsContainer">
        <ItemList products={products} />
      </div>
    </div>
  )
}

export default ItemListContainer