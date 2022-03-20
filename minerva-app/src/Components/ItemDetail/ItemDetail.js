import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";



function ItemDetail({producto}) {
  

  return (
<>
<div className='ItemContainer'>
  <h6 className='itemCategory'>{producto.Category}</h6>
  <div className='itemImgContainer'> <img alt='' src={producto.ImageURL} className='itemImage'></img> </div>
  <div className='ItemDetailContainer'>
    <h6 className='itemTitle'>{producto.Name}</h6>
    <h6 className='itemPrice'>$ {producto.Price}</h6>
    <h6 className='itemStock'>Disponible: {producto.stock}</h6>
    <h6 className='itemDescription'>{producto.Description}</h6>
  </div>
  {/* <h6 className='itemPrice'>$ {producto.Price.toLocaleString('es-CL')}</h6> */}
  <ItemCount stock={11} initial={1} />
</div>
</>    
  )
}

export default ItemDetail


