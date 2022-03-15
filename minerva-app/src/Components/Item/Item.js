import React from 'react'
import './Item.css';
// import itemName from '../../Assets/ImgsProductos1.png'
import itemImageURL from '../../Assets/ImgsProductos1.png'
// import itemPrice from '../../Assets/ImgsProductos1.png'

const itemName = 'Anillo Zafiro Bodicea';
// const itemImageURL = '../../Assets/ImgsProductos1.png';
const itemPrice = '$49.990';


function Item() {
  return (
    <div>
        <h6 className='itemTitle'>{itemName}</h6>
        <div className='itemImgContainer'> <img alt='' src={itemImageURL} className='itemImage'></img> </div>
        <h6 className='itemPrice'>{itemPrice}</h6>
    </div>
  )
}

export default Item