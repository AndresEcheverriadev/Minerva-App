import Item from '../Item/Item'

function ItemList({products}) {
  return (
    <>
      {products.map((product) => <Item key={product.Id} product={product}/>)}
    </>
  )}


export default ItemList