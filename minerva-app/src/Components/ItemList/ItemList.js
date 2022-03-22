import Item from '../Item/Item'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemList({products}) {
  return (
    <>
      {products.map((product) => <Item key={product.Id} product={product}/>)}
    </>
  )}


export default ItemList