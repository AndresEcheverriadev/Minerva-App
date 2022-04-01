import Button  from 'react-bootstrap/Button';
import { useContext } from 'react'
import {BagContext} from '../../Context/BagContext';
import './BolsaCompras.css'

function BolsaCompras({greeting}) {

  const {bagList,deleteItem,clearBag} = useContext(BagContext);
  
  console.log(bagList)

  const borrar = () =>{
    console.log('borrar'); 
    deleteItem();
  }

  return (
    <>
    <div className='bolsaContainer'>{greeting}</div>
    <Button onClick={borrar}>borrar</Button>
    </>
  )
}

export default BolsaCompras