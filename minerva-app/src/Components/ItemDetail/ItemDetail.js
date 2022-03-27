import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({product}) {
  return (
<>
  <div className='itemDetailContainer'>
    <h6 className='itemDetailCategory'>{product.categoria}</h6>
    <div className='itemDetailImgContainer'> <img alt='' src={product.ImageURL} className='itemImage'></img> </div>
  </div>
  <div className='itemDetailContainer2'>
    <h6 className='itemDetailTitle'>{product.Name}</h6>
    <h6 className='itemDetailPrice'>$ {product.Price}</h6>
    <h6 className='itemDetailDescription'>{product.Description}</h6>
  </div>
  <div className='itemDetailContainer3'>
    <div className='itemCounterDetail'>
      <h6 className='itemDetailStock'>Disponible: {product.stock}</h6>
      <ItemCount stock={product.stock} initial={1} />
    </div>
    <div className='itemDetailRecomendation'>
      <h6 className='itemDetailTextRecomendation'>También podría gustarte</h6>
      <img src='\Assets\ImgsProductos0.png'></img>
    </div>
  </div>
</>    
  )
}

export default ItemDetail


