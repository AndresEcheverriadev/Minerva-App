import { useContext } from 'react'
import {BagContext} from '../../Context/BagContext';
import './BolsaCompras.css'

function BolsaCompras({greeting}) {

  const {bagList,deleteFromBag} = useContext(BagContext);
  
  console.log(bagList)

  return (
    <div className='bolsaContainer'>{greeting}</div>

  )
}

export default BolsaCompras