import { useState } from 'react';
import React from 'react'
import './Item.css';
import ItemList from '../ItemList/ItemList';



function Item() {

  const [itemList, setItemList] = useState(ItemList)

  return ( 
    <div>
     {Item.map((itemList) => {
        return (
          {itemList}
      )
      })
      }
    </div>
  )
}

export default Item

// <h6 className='itemTitle'>{itemName}</h6>
//         <div className='itemImgContainer'> <img alt='' src={itemImageURL} className='itemImage'></img> </div>
//         <h6 className='itemPrice'>{itemPrice}</h6>

/* <ItemList key={ItemList.id} name={ItemList.itemName} img={ItemList.itemImageURL} price={ItemList.itemPrice} />  */