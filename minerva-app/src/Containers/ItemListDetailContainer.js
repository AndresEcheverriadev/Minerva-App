import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListDetail from "../Components/ItemListDetail/ItemListDetail";
import './ItemListDetailContainer.css';
import {getProducts} from './promiser'

function ItemListDetailContainer({greeting}) {
  const [products, setProducts]   = useState([]);
  const {detalleId} = useParams();
  console.log(detalleId);


  useEffect(() => {
    getProducts
    .then(response => setProducts(response))
    .catch((error) => console.log(error))
    .finally(console.log('Loaded'));

  },[])

  return (
    <div className='itemListDetailContainer'>
      <div className='greeting'>{greeting}</div>
      <div className="ItemsDetailContainer">
        <ItemListDetail products={products} />
      </div>
    </div>
  )
}

export default ItemListDetailContainer
