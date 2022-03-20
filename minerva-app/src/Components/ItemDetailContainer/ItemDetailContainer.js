import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import {getProducts} from '../../Containers/promiser'

function ItemDetailContainer() {
  const [producto, setProducto]   = useState([])

  useEffect(() => {

    // puse una funcion que randomiza el Id de mi array para verificar que accede bien a todos los productos  

    function anyItem() {
    return Math.floor(Math.random() * 4)
    };

    anyItem();

    const any = anyItem();

    getProducts
    .then(response => setProducto(response.find(item => item.Id === any)))
    .catch((error) => console.log(error))
    .finally(console.log('Loaded'));

  },[])

  return (
    <div className='itemDetailContainer'>
      <div className="ItemsContainer">
      <ItemDetail producto={producto} />
      </div>
    </div>
  )
}

export default ItemDetailContainer