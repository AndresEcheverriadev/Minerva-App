import './InterchangeButtons.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import CartWidget from '../Widgets/CartWidget';

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

const InterchangeButtons = () => {

    const [inputType, setInputType ] = useState('buttonsetadd')

    const handleInterchange=()=>{
        setInputType('buttonsetcontinue');
        console.log('agregado a la bolsa');
    }
    
    return (
        <div>            
            {
                inputType === 'buttonsetadd' ? 
                    <InputAddtoBag handleInter={handleInterchange} />
                : 
                    <InputContinue />
            }
        </div>
    )
}

export default InterchangeButtons
