import {useContext,useEffect,useState} from 'react'
import {BagContext} from '../../Context/BagContext';
import {getFirestore,collection,addDoc} from 'firebase/firestore'
import Button  from 'react-bootstrap/Button';
import BagItemCheckout from "../BagItem/BagItemCheckout";
import CheckoutWidget from '../Widgets/CheckoutWidget'
import './CheckoutCompras.css'
import {Col, Form, Row} from 'react-bootstrap';

function CheckoutCompras() {

  const {bagList,calcSumTotalItems,calcTotalItems} = useContext(BagContext);
  const [inputName, setinputName] = useState('')
  const [inputSurname, setinputSurname] = useState('')
  const [inputEmail, setinputEmail] = useState('')
  const [inputEmail2, setinputEmail2] = useState('')
  const [inputPhone, setinputPhone] = useState('')
  const [variantCheckoutButton, setvariantCheckoutButton] = useState('secondary')
  const [disabledCheckoutButton, setdisabledCheckoutButton] = useState('true')

  useEffect(() => {
  if (inputName && inputSurname && inputEmail === inputEmail2 && inputPhone) {
    setvariantCheckoutButton('success');
    setdisabledCheckoutButton('');
  }
  else {
    setvariantCheckoutButton('secondary');
    setdisabledCheckoutButton('true');
  }
  }, [inputName,inputSurname,inputEmail,inputEmail2,inputPhone]);
  
  const newOrder = (e) => {
    e.preventDefault();

    let order = {}
    order.buyer = {name:inputName, surname:inputSurname,email:inputEmail,phone:inputPhone}
    order.total = calcTotalItems;

    order.items = bagList.map(orderItem => {

      const id = orderItem.id
      const nameItem = orderItem.Name
      const totalItem = orderItem.Price * orderItem.cantidad 

      return {id,nameItem,totalItem}
    })

    const alertCheckout = `Se ha generado tu orden de compra. 
    Nombre: ${JSON.stringify(order.buyer.name)}
    Apellido: ${JSON.stringify(order.buyer.surname)}
    E-mail: ${JSON.stringify(order.buyer.email)}
    Teléfono: ${JSON.stringify(order.buyer.phone)}
    ------------------------------------------------
    Total: $ ${(order.total).toLocaleString()}`;
    
    const database = getFirestore();
    const queryCollection = collection(database,'Orders');
    addDoc(queryCollection,order)
    .then(resp => alert(alertCheckout))
  ;} 

  const localeSumTotalItems = (calcTotalItems).toLocaleString();

  return (
    <div className='checkoutPageContainer'>
      {
        <div className='inBagContainer' >
          <div className='checkoutbagListContainer'>
            {
              bagList.map((product) => <BagItemCheckout key={product.id} product={product}/>)
            }
              <div className='checkoutsumsContainer'>
                <h6 className='checkoutsubtotalSum'>Total: ${localeSumTotalItems}</h6>
                <h6 className='checkouttotalProductos'>Cantidad de productos: {calcSumTotalItems}</h6>
              </div>
          </div>
          <div className='checkoutbuyControlsContainer'>
            <div className='checkoutInputTitle'><h4>Ingresa tus datos para generar la orden de compra</h4></div>
              <hr></hr>
              <div className='checkoutInputContainer'>
              <Form className='formContainer'>
                <Form.Group className="mb-3 formGroupContainer" controlId="formGroupEmail">
                <Form>
                  <Row>
                    <Col>
                      <Form.Control type='text' placeholder="Nombre" onChange={(e) => setinputName(e.target.value)}/>
                    </Col>
                    <Col>
                      <Form.Control type='text' placeholder="Apellido"onChange={(e) => setinputSurname(e.target.value)}/>
                    </Col>
                  </Row>
                </Form>
                  <Form.Control type="telephone" placeholder="Teléfono" onChange={(e) => setinputPhone(e.target.value)}/>
                  <Form.Control type="email" placeholder="E-mail" onChange={(e) => setinputEmail(e.target.value)}/>
                  <Form.Control type="email" placeholder="Repita su E-mail" onChange={(e) => setinputEmail2(e.target.value)}/>
                </Form.Group>
              </Form>
              </div> 
              <hr></hr>
              <Button variant={variantCheckoutButton} className='btnToCheckout' onClick={newOrder} disabled={disabledCheckoutButton}>Proceder al pago<CheckoutWidget/></Button>
          </div>
        </div>
        }
    </div>
  )
}

export default CheckoutCompras