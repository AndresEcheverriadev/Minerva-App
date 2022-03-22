import './Item.css'
import ItemCount from "../ItemCount/ItemCount";



function Item({product}) {
  return (
<>
<div className='ItemContainer'>
  <h6 className='itemTitle'>{product.Name}</h6>
  <div className='itemImgContainer'> <img alt='' src={product.ImageURL} className='itemImage'></img> </div>
  <h6 className='itemPrice'>$ {product.Price}</h6>
  {/* <h6 className='itemPrice'>$ {prod.itemPrice.toLocaleString('es-CL')}</h6> */}
  <ItemCount stock={product.stock} initial={1} />
</div>
</>    
  )
}

export default Item


