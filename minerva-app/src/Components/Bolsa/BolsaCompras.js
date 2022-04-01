import Button  from 'react-bootstrap/Button';
import { useContext } from 'react'
import {BagContext} from '../../Context/BagContext';
import './BolsaCompras.css'

function BolsaCompras({greeting}) {

  const {bagList,deleteItem,clearBag} = useContext(BagContext);
  
  console.log(bagList)

  const borrar = () =>{
    deleteItem();
    console.log('borrar');
  }

  return (
    <>
    <div className='bolsaContainer'>{greeting}</div>
    <Button onClick={borrar}>borrar</Button>
    </>
  )
}

export default BolsaCompras