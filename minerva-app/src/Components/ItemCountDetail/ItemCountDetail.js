import {useState} from 'react';
import './ItemCount.css';
import { Link } from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import CartWidget from '../Widgets/CartWidget';

function ItemCount ( {stock, initial ,onAdd} ) {
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

const InputAddtoBag= ({handleInter})=> {
  return ( 
  <div className='itemCountBtnAddOnContainer'>
      <Button variant="outline-light" className='itemCountBtnAddOn'onClick={handleInter}><CartWidget/>Agregar a la compra</Button>
  </div>
  )

}

const InputContinue= ()=> {
  return (
      <>  
          <Link to='/' >
              <Button variant="outline-light" className='BtnComprando'>Seguir comprando</Button>
          </Link>
          <Link to='/bolsa' >
              <Button variant="light" className='BtnToBag'>Terminar compra</Button>
          </Link>
      </>
  )
}

const [inputType, setInputType ] = useState('buttonsetadd')

const handleInter=()=>{
  setInputType('buttonsetcontinue');
  onAdd(count);
}



return (
  <>
    <div className='itemCountContainer'>
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
</>
  
)
}

export default ItemCount
 