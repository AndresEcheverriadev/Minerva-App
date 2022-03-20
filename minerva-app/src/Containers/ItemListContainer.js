import { useEffect, useState } from "react";
import ItemList from "../Components/ItemList/ItemList";
import './ItemListContainer.css';
import {getProducts} from './promiser'

function ItemListContainer({greeting}) {
  const [prods, setProds]   = useState([])

  useEffect(() => {
    getProducts
    .then(response => setProds(response))
    .catch((error) => console.log(error))
    .finally(console.log('Loaded'));

  },[])

  return (
    <div className='itemListContainer'>
      <div className='greeting'>{greeting}</div>
      <div className="ItemsContainer">
        <ItemList prods={prods} />
      </div>
    </div>
  )
}

export default ItemListContainer