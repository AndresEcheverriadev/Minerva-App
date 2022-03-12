import React,{useState} from 'react';
import './ItemCount.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
export default function Itemcount() {
const [count, setCount] = useState(0); 
const stock = useState(11);

const handlerCountPlus = () => {
  if (count < stock[0]) {
    setCount(count+1);
  }
  else {
    alert(`Lo sentimos solo nos quedan ${stock[0]}`)
  }  
};

const handlerCountMinus = () => {
  if(count > 0) {
    setCount(count-1);
  }
};


  return (
    <div className='itemCountContainer'>
      <ButtonGroup aria-label="Basic example" className='btnQuantity'>
        <Button variant="secondary" onClick={() => handlerCountMinus()}>-1</Button>
        <Button variant="secondary" disabled>{count}</Button>
        <Button variant="secondary" onClick={() => handlerCountPlus()}>+1</Button>
    </ButtonGroup>
    <Button variant="outline-light" className='btnAddOn'>Agregar a la compra</Button>
  </div>
    
    
  )
}

 