import {Link} from "react-router-dom";
import {useContext} from 'react'
import {BagContext} from '../../Context/BagContext';
import BagItem from '../BagItem/BagItem';
import ClearBagWidget from '../Widgets/ClearBagWidget'
import CheckoutContinue from '../Widgets/CheckoutContinue'
import Button  from 'react-bootstrap/Button';
import './BolsaCompras.css'

function BolsaCompras() {

  const {bagList,clearBag,NotItems,calcSumTotalItems,calcTotalItems} = useContext(BagContext);
  
  const btnClearBag = () => {
    clearBag();
  }

  const localeSumTotalItems = (calcTotalItems).toLocaleString();

  return (
    <div className='bagPageContainer'>
      {
                  NotItems === true ?
                  <div className='noitemsContainer'>
                    <h6> Aún no hay productos en tu bolsa de compra.  </h6>
                    <h6>¡Seguro hay algo especial esperando por ti!</h6>
                    <Link to='/' className='linkBtnContainer'>
                      <Button  variant='light' className='btnBackItems'>Volver a los productos</Button>
                    </Link> 
                    <div className='videoNoItemContainer'> 
                      <video className='video1' type="video/mp4" muted autoPlay loop src='/Assets/Videonoitem1baja.mp4'></video>
                    </div>
                  </div>
                  : 
                  <div className='inBagContainer' >
                    <div className='bagListContainer'>
                      {
                        bagList.map((product) => <BagItem key={product.id} product={product}/>)
                      }
                    </div>
                    <div className='buyControlsContainer'>
                        <Button variant='outline-secondary' className='btnClearBag' onClick={btnClearBag}>Limpiar bolsa de compras<ClearBagWidget /></Button>
                        <hr></hr>
                        <div className='sumsContainer'>
                          <h6 className='subtotalSum'>Total: ${localeSumTotalItems}</h6>
                          <h6 className='totalProductos'>Cantidad de productos: {calcSumTotalItems}</h6>
                        </div>
                        <Link to='/checkout' className='linkBtnContainer'>
                          <Button variant='light' className='btnToCheckout'>Proceder al pago <CheckoutContinue/></Button>
                        </Link> 
                    </div> 
                  </div>
        }
    </div>
  )
}

export default BolsaCompras