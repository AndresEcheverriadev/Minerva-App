import {useEffect,useState} from "react";
import {Suspense} from 'react';
import {useParams} from "react-router-dom";
import {Spinner} from 'react-bootstrap';
import ItemList from "../Components/ItemList/ItemList";
import {getFirestore,collection,getDocs,where,query} from 'firebase/firestore'
import './ItemListContainer.css';

function ItemListContainer() {
  const [products, setProducts]   = useState([]);
  const {categoriaid} = useParams();
  
  useEffect(() => {
    
    async function getAll() {

      try {
      const db = getFirestore();
      const queryCollection = collection(db,'Items') 

      if (categoriaid) {
        const filterCategory = query(queryCollection, where('SubCategory','==',categoriaid));
        const response = await getDocs(filterCategory); 
        setProducts(response.docs.map(prod=> ({id:prod.id,...prod.data()})));
          
      } else {
        const response = await getDocs(queryCollection);
        setProducts(response.docs.map(prod=> ({id:prod.id,...prod.data()})));
      }
      }   catch (error) {

      }
    }

    getAll();

  },[categoriaid]);

  return (
    <Suspense fallback={<Spinner animation="border" role="status" variant="warning"><span className="visually-hidden">Loading...</span></Spinner>}> 
      <div className='itemListContainer'>
          <ItemList products={products} />
      </div>
    </Suspense>
  )
  
}

export default ItemListContainer