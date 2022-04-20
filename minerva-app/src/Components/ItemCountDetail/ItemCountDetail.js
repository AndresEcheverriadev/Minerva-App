import {useState,useContext} from 'react';
import {BagContext} from '../../Context/BagContext';
import './ItemCountDetail.css';
import { Link } from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import CartItemtWidget from '../Widgets/CartItemWidget';

function ItemCount ( {stock, initial , product} ) {
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

const InputAddtoBag= ({handleInter})=> {
  return ( 
    <Button variant="outline-light" className='itemCountDetailBtnAddOn'onClick={handleInter}><CartItemtWidget/> Agregar a la compra</Button>
  )

}

const InputContinue= ()=> {
  return (
      <div className='inputContinueContainer'>  
          <Link to='/' className='linkBtnContainer'>
              <Button variant="outline-light" className='btnComprando'>Seguir comprando</Button>
          </Link>
          <Link to='/bolsa' className='linkBtnContainer'>
              <Button variant="light" className='btnToBag'>Terminar compra</Button>
          </Link>
      </div>
  )
}

const [inputType, setInputType ] = useState('buttonsetadd')

const onAdd= () => {
  let bag ={...product, cantidad: count}
  addToBag(bag,count);
}

const handleInter=()=>{
  setInputType('buttonsetcontinue');
  onAdd();
}

return (
    <div className='itemDetailCountContainer'>
      <ButtonGroup aria-label="Basic example" className='itemCountBtnQuantityContainer'>
        <Button variant="secondary" className='itemCountBtnQuantity' onClick={() => handlerCountMinus()}>-1</Button>
        <Button variant="secondary" className='itemCountBtnQuantity' disabled>{count}</Button>
        <Button variant="secondary" className='itemCountBtnQuantity' onClick={() => handlerCountPlus()}>+1</Button>
      </ButtonGroup>
        {
                  inputType === 'buttonsetadd' ?
                  
                      <InputAddtoBag handleInter={handleInter} />
                  : 
                      <InputContinue /> 
        }
    </div>
)
}

export default ItemCount
 