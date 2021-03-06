import ItemCount from "../ItemCount/ItemCount";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './Item.css'

function Item({product}) {

  const localeProductPrice = (product.Price).toLocaleString();

  return (
<div className='ItemContainer'>
    <h6 className='itemTitle'>{product.Name}</h6>
    <div className='itemImgContainer'><img alt='' src={product.ImageURL} className='itemImage'></img> </div>
    <h6 className='itemPrice'>$ {localeProductPrice}</h6>
    <Link to={`/detalle/${product.id}`} className='linkContainer' >
      <Button variant="outline-light" className='btntoDetails' >Detalles</Button>
    </Link>
  <ItemCount stock={product.Stock} initial={1} product={product} />
</div> 
  )
}

export default Item


