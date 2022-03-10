import React from 'react'
import Itemcount from '../Components/ItemCount/Itemcount'
import './ItemListContainer.css'


function ItemListContainer({greeting}) {
  return (
    <div className='itemListContainer'>{greeting}
    <Itemcount/>
    
    
    </div>
  )
}

export default ItemListContainer