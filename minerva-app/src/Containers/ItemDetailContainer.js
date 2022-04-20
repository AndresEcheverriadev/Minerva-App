import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import {getFirestore,getDoc,doc} from 'firebase/firestore'
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const [product, setProduct]   = useState([]);
  const {detalleId} = useParams();

 useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db,'Items',detalleId) 
    getDoc(queryDoc)
    .then(resp => setProduct({id: resp.id, ...resp.data()}))
  },[detalleId]);

  return (
    <div className='itemDetailContainerOut'>
      <div className="ItemsDetailContainerIn">
       <ItemDetail product={product}/>
      </div>
    </div>
  )
}

export default ItemDetailContainer
