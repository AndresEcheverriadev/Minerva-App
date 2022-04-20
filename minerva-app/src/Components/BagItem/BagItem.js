import React from 'react'
import { useContext } from 'react'
import {BagContext} from '../../Context/BagContext';
import Button  from 'react-bootstrap/Button';
import DeleteItemWidget from '../Widgets/DeleteItemWidget'
import './BagItem.css'

function BagItem({product}) {
    const {deleteItem} = useContext(BagContext);
    const calcSubTotalItem = (product.cantidad * product.Price).toLocaleString(); 
   
  return (  
    <div className='bagItemContainer'>
        <div className='bagItemData'>
            <div className='bagItemImgContainer'>
              <img alt='' src={product.ImageURL} className='bagItemImage'></img>
            </div>
            <div className='bagItemTxtContainer'>
              <h6 className='bagItemTitle'>{product.Name}</h6>
              <div className='bagItemProductTxtContainer'>
                <h6 className='bagItemPrice'>Precio: $ {product.Price}</h6>
                <h6 className='bagItemQuantity'>Cantidad: {product.cantidad}</h6>
                <h6 className='bagItemSubtotal'>Subtotal: $ {calcSubTotalItem}</h6>
              </div>
            </div>
            <Button variant='outline-secondary' onClick={() => deleteItem(product.id)} className='btnDeleteItem'>Quitar producto <DeleteItemWidget /></Button>
        </div>
        <hr></hr>
    </div>
  )
}

export default BagItem