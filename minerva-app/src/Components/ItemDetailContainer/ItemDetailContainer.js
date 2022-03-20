import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import {getProducts} from '../../Containers/promiser'

function ItemDetailContainer() {
  const [producto, setProducto]   = useState([])

  useEffect(() => {

    getProducts
    .then(response => setProducto(response.find(item => item.Id === 2)))
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