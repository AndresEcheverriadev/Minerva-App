import {useState} from 'react';
import './ItemCount.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ImageProductos from '../../Assets/ImgsProductos1.png'
export default 

function Itemcount ( {stock, initial, onAdd} ) {
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
      <h6 className='itemCountTitle'>Anillo Zafiro Bodicea</h6>
      <div className='itemCountImgContainer'> <img alt='' src={ImageProductos} className='imageProduct'></img> </div>
      <ButtonGroup aria-label="Basic example" className='itemCountBtnQuantityContainer'>
        <Button variant="secondary" className='itemCountBtnQuantity' onClick={() => handlerCountMinus()}>-1</Button>
        <Button variant="secondary" className='itemCountBtnQuantity' disabled>{count}</Button>
        <Button variant="secondary" className='itemCountBtnQuantity' onClick={() => handlerCountPlus()}>+1</Button>
      </ButtonGroup>
      <Button variant="outline-light" className='itemCountBtnAddOn'onClick={() => addtoBag()}>Agregar a la compra</Button>
    </div>
  </>
    
  )
}

 