import {Link} from "react-router-dom";
import {useContext} from 'react'
import {BagContext} from '../../Context/BagContext';
import {getFirestore,collection,addDoc} from 'firebase/firestore'
import BagItem from '../BagItem/BagItem';
import ClearBagWidget from '../Widgets/ClearBagWidget'
import CheckoutWidget from '../Widgets/CheckoutWidget'
import Button  from 'react-bootstrap/Button';
import './BolsaCompras.css'

function BolsaCompras() {

  const {bagList,clearBag,NotItems,calcSumTotalItems,calcTotalItems} = useContext(BagContext);
  
  const newOrder = (e) => {
    e.preventDefault();

    let order = {}
    order.buyer = {name:'Andres',email:'email@mail.com',phone:'5622235698'}
    order.total = calcTotalItems;

    order.items = bagList.map(orderItem => {

      const id = orderItem.id
      const nameItem = orderItem.Name
      const totalItem = orderItem.Price * orderItem.cantidad 

      return {id,nameItem,totalItem}
    })

    const alertCheckout = `Se ha generado tu orden de compra. 
    Nombre: ${JSON.stringify(order.buyer.name)}
    E-mail: ${JSON.stringify(order.buyer.email)}
    Teléfono: ${JSON.stringify(order.buyer.phone)}
    ------------------------------------------------
    Total: $ ${(order.total).toLocaleString()}`;
    
    const database = getFirestore();
    const queryCollection = collection(database,'Orders');
    addDoc(queryCollection,order)
    .then(resp => alert(alertCheckout))
  ;} 

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
                            <Button variant='light' className='btnToCheckout' onClick={newOrder}>Proceder al pago <CheckoutWidget /></Button>
                        </div> 
                      </div>
        }
    </div>
  )
}

export default BolsaCompras