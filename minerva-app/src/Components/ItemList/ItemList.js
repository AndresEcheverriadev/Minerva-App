import React from 'react'
import prods from '../../Containers/ItemListContainer'
import Item from '../Item/Item'

function ItemList() {
  return (
    <>
    <div>ItemList</div>
    { 
    prods.map((Items)    =>
    <Item key={Items.id} itemName={Items.itemName} /> )}


    
    </>
    
  ) }


export default ItemList