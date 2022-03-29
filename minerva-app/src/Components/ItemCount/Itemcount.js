import {useState} from 'react';
import './ItemCount.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import CartWidget from '../Widgets/CartWidget';

function ItemCount ( {stock, initial} ) {
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

const InputAddtoBag= ()=> {
  return ( 
  <Button variant="outline-light" className='itemCountBtnAddOn'onClick={onAdd}><CartWidget/> Agregar a la compra</Button>
  )

}

const onAdd = (count) =>{
  console.log(onAdd);
}



return (
    <div className='itemCountContainer'>
      <ButtonGroup aria-label="Basic example" className='itemCountBtnQuantityContainer'>
        <Button variant="secondary" className='itemCountBtnQuantity' onClick={() => handlerCountMinus()}>-1</Button>
        <Button variant="secondary" className='itemCountBtnQuantity' disabled>{count}</Button>
        <Button variant="secondary" className='itemCountBtnQuantity' onClick={() => handlerCountPlus()}>+1</Button>
      </ButtonGroup>
      <InputAddtoBag />
    </div>
)
}

export default ItemCount
 