import BagItem from '../BagItem/BagItem';
import { useContext } from 'react'
import {BagContext} from '../../Context/BagContext';
import './BolsaCompras.css'
import ClearBagWidget from '../Widgets/ClearBagWidget'
import CheckoutWidget from '../Widgets/CheckoutWidget'
import Button  from 'react-bootstrap/Button';

function BolsaCompras({greeting}) {

  const {bagList,clearBag} = useContext(BagContext);
  
  console.log(bagList)

  const clearbag = () => {
    clearBag();
    console.log('borrar bolsa');
  }

  const checkout = () => {
    console.log('to checkout');
  }

  

  return (
    <div className='bagPageContainer'>
      <div className='inBagContainer' >
        <div className='bagListContainer'>
            <BagItem />
            <BagItem />
            <BagItem />
            <BagItem />
        </div>
        <div className='buyControlsContainer'>
            <Button variant='outline-secondary' className='btnClearBag' onClick={clearbag}>Limpiar bolsa de compras <ClearBagWidget /></Button>
            <hr></hr>
            <h6 className='subtotalSum'>Subtotal: $199.950</h6>
            <Button variant='outline-secondary' className='btnToCheckout' onClick={checkout}>Proceder al pago <CheckoutWidget /></Button>
        </div> 
      </div>
    </div>
  )
}

export default BolsaCompras