import React from 'react'
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
  return (
    <div className='itemListContainer'>{greeting}</div>
  )
}

export default ItemListContainer