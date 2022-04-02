import React from 'react'
import './BagItem.css'
import { useContext } from 'react'
import {BagContext} from '../../Context/BagContext';
import Button  from 'react-bootstrap/Button';
import DeleteItemWidget from '../Widgets/DeleteItemWidget'



function BagItem({product}) {
    
    const {bagList,deleteItem} = useContext(BagContext);
    
    const deleteitem = () =>{
        deleteItem();
        console.log('borrar item');
    }

  return (  
    <div className='bagItemContainer'>
        <div className='bagItemData'>
            <div className='bagItemImgContainer'>
              <img alt='' src='/Assets/ImgsProductos9.png' className='bagItemImage'></img>
            </div>
            <div className='bagItemTxtContainer'>
              <h6 className='bagItemTitle'>Anillo Rubí Bodicea</h6>
              <div className='bagItemProductTxtContainer'>
                <h6 className='bagItemPrice'>Precio: $39.000</h6>
                <h6 className='bagItemQuantity'>Cantidad: 5</h6>
                <h6 className='bagItemSubtotal'>Subtotal: $199.950</h6>
              </div>
            </div>
            <Button variant='outline-secondary' onClick={deleteitem} className='btnDeleteItem'>Quitar producto <DeleteItemWidget /></Button>
        </div>
        <hr></hr>
    </div>
  )
}

export default BagItem