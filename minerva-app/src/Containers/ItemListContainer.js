import { useEffect, useState } from "react";
import {Suspense } from 'react';
import { useParams } from "react-router-dom";
import { Spinner } from 'react-bootstrap';
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

  return (
    <Suspense fallback={<Spinner animation="border" role="status" variant="warning"><span className="visually-hidden">Loading...</span></Spinner>}> 
      <div className='greeting'>{greeting}</div>
      <div className='itemListContainer'>
          <ItemList products={products} />
      </div>
    </Suspense>
  )
}

export default ItemListContainer