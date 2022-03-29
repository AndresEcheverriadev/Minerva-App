import './Item.css'
import ItemCount from "../ItemCount/ItemCount";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Item({product}) {
  return (
<div className='ItemContainer'>
    <h6 className='itemTitle'>{product.Name}</h6>
    <div className='itemImgContainer'><img alt='' src={product.ImageURL} className='itemImage'></img> </div>
    <h6 className='itemPrice'>$ {product.Price}</h6>
    <Link to={`/detalle/${product.Id}`} className='linkContainer' >
      <Button variant="outline-light" className='btntoDetails' >Detalles</Button>
    </Link>
  <ItemCount stock={product.stock} initial={1} />
</div> 
  )
}

export default Item


