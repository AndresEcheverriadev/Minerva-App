import BagItem from '../BagItem/BagItem';
import { useContext } from 'react'
import {BagContext} from '../../Context/BagContext';
import './BolsaCompras.css'
import Button  from 'react-bootstrap/Button';

function BolsaCompras({greeting}) {

  const {bagList,clearBag} = useContext(BagContext);
  
  console.log(bagList)

  const clearbag = () =>{
    clearBag();
    console.log('borrar bolsa');
  }


  

  return (
    <div className='bagPageContainer'>{greeting}
      <div className='inBagContainer' >
        <div className='bagListContainer'>
            <BagItem />
        </div>
        <div className='buyControlsContainer'>
            <Button onClick={clearbag}>borrar</Button>
        </div> 
      </div>
    </div>
  )
}

export default BolsaCompras