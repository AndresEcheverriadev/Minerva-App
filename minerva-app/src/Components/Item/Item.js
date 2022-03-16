import React from 'react'
import './Item.css'

function Item() {
  return (
<>
<div>Item</div>
<h6 className='itemTitle'>{itemName}</h6>
<div className='itemImgContainer'> <img alt='' src={itemImageURL} className='itemImage'></img> </div>
<h6 className='itemPrice'>{itemPrice}</h6> 
</>    
  )
}

export default Item





