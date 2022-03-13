import React from 'react'
import Itemcount from '../Components/ItemCount/Itemcount'
import './ItemListContainer.css'


function ItemListContainer({greeting}) {
  return (
    <div className='itemListContainer'>
      <div className='greeting'>{greeting}</div>
      <div className='itemCountContainer'><Itemcount stock={5} initial={1} /></div>
    </div>
  )
}

export default ItemListContainer