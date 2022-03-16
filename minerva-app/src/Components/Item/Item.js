import './Item.css'

function Item({prod}) {
  return (
<>
<div className='ItemContainer'>
  <h6 className='itemTitle'key={prod.id}>{prod.itemName}</h6>
  <div className='itemImgContainer'> <img alt='' src={prod.itemImageURL} className='itemImage'></img> </div>
  <h6 className='itemPrice'>{prod.itemPrice}</h6> 
</div>
</>    
  )
}

export default Item



{/* <ItemCount initial={1} stock={11}  /> */}

