import './BolsaCompras.css'
import {Link} from "react-router-dom";
import {useContext} from 'react'
import {BagContext} from '../../Context/BagContext';
import {getFirestore, collection, addDoc} from 'firebase/firestore'
import BagItem from '../BagItem/BagItem';
import ClearBagWidget from '../Widgets/ClearBagWidget'
import CheckoutWidget from '../Widgets/CheckoutWidget'
import Button  from 'react-bootstrap/Button';

function BolsaCompras() {

  const {bagList,clearBag,NotItems,itemsFinder,calcSumTotalItems,calcTotalItems} = useContext(BagContext);
  
  console.log(bagList)
  itemsFinder();
  console.log(NotItems)

  const newOrder = (e) => {
    e.preventDefault();

    let order = {}
    order.buyer = {name:'Andres',email:'email@mail.com',phone:'5622235698'}
    order.total = calcTotalItems;

    order.items = bagList.map(orderItem => {

      const id = orderItem.id
      const nombre = orderItem.Name
      const precio = orderItem.Price * orderItem.cantidad 

      return {id,nombre,precio}
    })
    
    console.log(order);

    const database = getFirestore();
    const queryCollection = collection(database,'Orders');
    addDoc(queryCollection,order)
    .then(resp => console.log(resp))

  }

  const clearbag = () => {
    clearBag();
    console.log('borrar bolsa');
  }

  // const checkout = () => {
  //   console.log('to checkout');
  // }

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
                            bagList.map((product) => <BagItem key={product.Id} product={product}/>)
                          }
                        </div>
                        <div className='buyControlsContainer'>
                            <Button variant='outline-secondary' className='btnClearBag' onClick={clearbag}>Limpiar bolsa de compras<ClearBagWidget /></Button>
                            <hr></hr>
                            <div className='sumsContainer'>
                              <h6 className='subtotalSum'>Total: ${calcTotalItems}</h6>
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