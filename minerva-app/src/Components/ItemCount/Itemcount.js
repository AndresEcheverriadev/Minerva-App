import {useContext, useState} from 'react';
import {BagContext} from '../../Context/BagContext';
import './ItemCount.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import CartItemtWidget from '../Widgets/CartItemWidget';

function ItemCount ( {stock, initial, product} ) {
  const [count, setCount] = useState(initial); 
  const {addToBag} = useContext(BagContext);

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

const onAdd = () =>{
  let bag ={...product, cantidad: count}
  addToBag(bag,count);
}

const InputAddtoBag= ()=> {
  return (
    <Button variant="outline-light" className='itemCountBtnAddOn'onClick={onAdd}><CartItemtWidget/> Agregar a la compra</Button> 
  )

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
 