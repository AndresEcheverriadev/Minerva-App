import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import {getFirestore,getDoc,doc} from 'firebase/firestore'

function ItemDetailContainer() {
  const [product, setProduct]   = useState([]);
  const {detalleId} = useParams();

 useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db,'Items',detalleId) 
    getDoc(queryDoc)
    .then(resp => setProduct({id: resp.id, ...resp.data()}))
  },[]);






  // useEffect(() => {
  //   getProducts
  //   .then(response => response.find(prod => prod.Id === detalleId ))
  //   .then(response => setProduct(response))
  //   .catch((error) => console.log(error))
  //   .finally();

  // },[]);

  return (
    <div className='itemDetailContainerOut'>
      <div className="ItemsDetailContainerIn">
       <ItemDetail product={product}/>
      </div>
    </div>
  )
}

export default ItemDetailContainer
