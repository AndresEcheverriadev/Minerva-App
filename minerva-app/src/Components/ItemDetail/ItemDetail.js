import ItemCountDetail from "../ItemCountDetail/ItemCountDetail";
import './ItemDetail.css'

function ItemDetail({product}) {

  return (
<>
  <div className='itemDetailContainer'>
    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left arrowImgContainer" viewBox="0 0 16 16">
        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
        </svg>
    </div>
    <div className='itemDetailImgContainer'> <img alt='' src={product.ImageURL} className='itemImage'></img> </div>
    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right arrowImgContainer" viewBox="0 0 16 16">
        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
        </svg>
    </div>
  </div>
  <div className='itemDetailContainer2'>
    <div>
      <h6 className='itemDetailCategory'>{product.SubCategory}</h6>
      <h6 className='itemDetailTitle'>{product.Name}</h6>
      <h6 className='itemDetailPrice'>$ {product.Price}</h6>
      <h6 className='itemDetailDescription'>{product.Description}</h6>
    </div>
    <div className='itemCounterDetail'>
      <h6 className='itemDetailStock'>Disponible: {product.Stock}</h6>
      <ItemCountDetail stock={product.Stock} initial={1} product={product}  />
    </div>
  </div>
  <div className='itemDetailContainer3'>
    <div className='itemDetailRecomendation'>
      <h6 className='itemDetailTextRecomendation'>También podría gustarte</h6>
      <img src='\Assets\ImgsProductos0.png'></img>
    </div>
  </div>
</>    
  )
}

export default ItemDetail


