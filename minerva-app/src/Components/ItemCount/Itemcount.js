import {useState} from 'react';
import './ItemCount.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import CartWidget from '../Widgets/CartWidget';



function ItemCount ( {stock, initial, addto} ) {
const [count, setCount] = useState(initial); 

const handlerCountPlus = () => {
  if (count < stock) {
    setCount(count+1);
  }
  else {
    alert(`Lo sentimos solo nos quedan ${stock}`)
  }  
};

const handlerCountMinus = () => {
  if(count > initial) {
    setCount(count-1);
  }
};

const addtoBag = () => {
  console.log(count)
}


  return (
    <>
    <div className='itemCountContainer'>
      <ButtonGroup aria-label="Basic example" className='itemCountBtnQuantityContainer'>
        <Button variant="secondary" className='itemCountBtnQuantity' onClick={() => handlerCountMinus()}>-1</Button>
        <Button variant="secondary" className='itemCountBtnQuantity' disabled>{count}</Button>
        <Button variant="secondary" className='itemCountBtnQuantity' onClick={() => handlerCountPlus()}>+1</Button>
      </ButtonGroup>
        <div className='itemCountBtnAddOnContainer'>
        <Button variant="outline-light" className='itemCountBtnAddOn'onClick={() => addtoBag()}><CartWidget/>Agregar a la compra</Button>
        </div>
        <Button variant="light" className='BtnComprando'>Seguir comprando</Button>
    </div>
  </>
    
  )
}

export default ItemCount
 