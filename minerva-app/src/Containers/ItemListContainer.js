import React from 'react'
import Itemcount from '../Components/ItemCount/Itemcount'
import './ItemListContainer.css'
import Item from '../Components/Item/Item'

function ItemListContainer({greeting}) {
  return (
    <div className='itemListContainer'>
      <div className='greeting'>{greeting}</div>
      <Item />
      <div className='itemCountContainer'><Itemcount stock={5} initial={1} /></div>
    </div>
  )
}

export default ItemListContainer