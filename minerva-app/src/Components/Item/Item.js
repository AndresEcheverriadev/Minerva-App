import './Item.css'
import ItemCount from "../ItemCount/ItemCount";



function Item({prod}) {
  return (
<>
<div className='ItemContainer'>
  <h6 className='itemTitle'>{prod.itemName}</h6>
  <div className='itemImgContainer'> <img alt='' src={prod.itemImageURL} className='itemImage'></img> </div>
  <h6 className='itemPrice'>$ {prod.itemPrice.toLocaleString('es-CL')}</h6>
  <ItemCount stock={11} initial={1} />
</div>
</>    
  )
}

export default Item


