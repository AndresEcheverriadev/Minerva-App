import { useEffect, useState } from "react";
import ItemList from "../Components/ItemList/ItemList";
import './ItemListContainer.css';

const Items = [  
  {id:'1',category:'Anillos',itemName:'Anillo Zafiro Bodicea',itemImageURL:'/Assets/ImgsProductos1.png',itemPrice: 49.990},
  {id:'2',category:'Collares',itemName:'Collar Colores Ceres',itemImageURL:'/Assets/ImgsProductos2.png',itemPrice: 60.990},
  {id:'3',category:'Aros',itemName:'Aros Cobre Afrodita',itemImageURL:'/Assets/ImgsProductos3.png',itemPrice: 39.990},
  {id:'4',category:'Anillos',itemName:'Anillo Diamante Freya',itemImageURL:'/Assets/ImgsProductos4.png',itemPrice: 39.990}
];

const promise = new Promise((resolve, reject) => {
  let boolean = true;
  if(boolean) {
    setTimeout(() => { 
      resolve(Items);
    }, 2000);
  }
   
  else {
    reject('promise rejected');
  }
});

function ItemListContainer({greeting}) {
  const [prods, setProds]   = useState([])

  useEffect(() => {
    promise
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