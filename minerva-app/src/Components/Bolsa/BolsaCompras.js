import BagItem from '../BagItem/BagItem';
import { useContext } from 'react'
import {BagContext} from '../../Context/BagContext';
import './BolsaCompras.css'
import ClearBagWidget from '../Widgets/ClearBagWidget'
import CheckoutWidget from '../Widgets/CheckoutWidget'
import Button  from 'react-bootstrap/Button';

function BolsaCompras() {

  const {bagList,clearBag,NotItems} = useContext(BagContext);
  
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
      {
                  NotItems === false ?
                  
                      <h6> No hay Items </h6>
                  : 
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
                            <div className='sumsContainer'>
                              <h6 className='subtotalSum'>Subtotal: $199.950</h6>
                              <h6 className='totalProductos'>Cantidad de productos: 20</h6>
                            </div>
                            <Button variant='outline-secondary' className='btnToCheckout' onClick={checkout}>Proceder al pago <CheckoutWidget /></Button>
                        </div> 
                      </div>
        }
    </div>
  )
}

export default BolsaCompras