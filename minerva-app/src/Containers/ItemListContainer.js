import {useEffect, useState} from "react";
import {Suspense } from 'react';
import {useParams } from "react-router-dom";
import {Spinner} from 'react-bootstrap';
import ItemList from "../Components/ItemList/ItemList";
import './ItemListContainer.css';
import {getFirestore,collection, getDocs, where,query} from 'firebase/firestore'

function ItemListContainer() {
  const [products, setProducts]   = useState([]);
  const {categoriaid} = useParams();
  
  // useEffect(() => {
  //   const db = getFirestore();
  //   const queryCollection = collection(db,'Items') 
  //   // const queryFilter = query(queryCollection, where('','',''))
  //   getDocs(queryCollection)
  //   .then(resp => setProducts(resp.docs.map(producto =>({id: producto.id,categoriaid: producto.SubCategory,...producto.data()}))))
  // },[categoriaid])

  // useEffect(() => {
  //   const db = getFirestore();
  //   const queryDoc = doc(db,'Items','1IzFahOA9OhciaaakFaW') 
  //   getDoc(queryDoc)
  //   .then(resp => setProducts({id: resp.id, ...resp.data()}))
  // },[categoriaid])




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