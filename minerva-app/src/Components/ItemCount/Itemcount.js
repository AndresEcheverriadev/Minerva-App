import {useState} from 'react';
import './ItemCount.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
export default 

function Itemcount ( {stock, initial, onAdd} ) {
const [count, setCount] = useState(initial); 
// const stock = useState(11);

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
    <div className='itemCountContainer'>
      <ButtonGroup aria-label="Basic example" className='btnQuantity'>
        <Button variant="secondary" onClick={() => handlerCountMinus()}>-1</Button>
        <Button variant="secondary" disabled>{count}</Button>
        <Button variant="secondary" onClick={() => handlerCountPlus()}>+1</Button>
    </ButtonGroup>
    <Button variant="outline-light" className='btnAddOn'onClick={() => addtoBag()}>Agregar a la compra</Button>
  </div>
    
    
  )
}

 