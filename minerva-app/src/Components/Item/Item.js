import './Item.css'
import ItemCount from "../ItemCount/ItemCount";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Item({product}) {
  return (
<div className='ItemContainer'>
  <Link to={`/detalle/${product.Id}`} >
    <h6 className='itemTitle'>{product.Name}</h6>
    <div className='itemImgContainer'> <img alt='' src={product.ImageURL} className='itemImage'></img> </div>
    <h6 className='itemPrice'>$ {product.Price}</h6>
    <Button variant="outline-light" className='btntoDetails' >Detalles</Button>
    {/* <h6 className='itemPrice'>$ {prod.itemPrice.toLocaleString('es-CL')}</h6> */}
  </Link>
  <ItemCount stock={product.stock} initial={1} />
</div> 
  )
}

export default Item


