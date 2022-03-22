import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";



function ItemDetail({product}) {
  

  return (
<>
<div className='ItemContainer'>
  <h6 className='itemCategory'>{product.Category}</h6>
  <div className='itemImgContainer'> <img alt='' src={product.ImageURL} className='itemImage'></img> </div>
  <div className='ItemDetailContainer'>
    <h6 className='itemTitle'>{product.Name}</h6>
    <h6 className='itemPrice'>$ {product.Price}</h6>
    <h6 className='itemStock'>Disponible: {product.stock}</h6>
    <h6 className='itemDescription'>{product.Description}</h6>
  </div>
  {/* <h6 className='itemPrice'>$ {producto.Price.toLocaleString('es-CL')}</h6> */}
  <ItemCount stock={product.stock} initial={1} />
</div>
</>    
  )
}

export default ItemDetail


