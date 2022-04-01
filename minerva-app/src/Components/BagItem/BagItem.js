import React from 'react'
import './BagItem.css'
import { useContext } from 'react'
import {BagContext} from '../../Context/BagContext';
import Button  from 'react-bootstrap/Button';



function BagItem({product}) {
    
    const {bagList,deleteItem} = useContext(BagContext);
    
    const deleteitem = () =>{
        deleteItem();
        console.log('borrar item');
    }


  return (  
    <div className='bagItemContainer'>
        <div className='bagItemData'>
            <div className='bagitemImgContainer'><img alt='' src='/Assets/ImgsProductos9.png' className='bagitemImage'></img> </div>
            <h6 className='bagitemTitle'>nombre</h6>
            <Button onClick={deleteitem}>borrar</Button>
        </div>
        <hr></hr>
    </div>
  )
}

export default BagItem