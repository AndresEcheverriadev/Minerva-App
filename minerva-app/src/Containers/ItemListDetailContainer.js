import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import './ItemListDetailContainer.css';
import {getProducts} from './promiser'

function ItemListDetailContainer({greeting}) {
  const [product, setProduct]   = useState([]);
  const {detalleId} = useParams();


  useEffect(() => {
    getProducts
    .then(response => response.find(prod => prod.Id === detalleId ))
    .then(response => setProduct(response))
    .catch((error) => console.log(error))
    .finally(console.log('Loaded'));

  },[]);

  return (
    <div className='itemListDetailContainer'>
      <div className='greeting'>{greeting}</div>
      <div className="ItemsDetailContainer">
       <ItemDetail product={product}/>
      </div>
    </div>
  )
}

export default ItemListDetailContainer
