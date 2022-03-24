import ItemDetail from '../ItemDetail/ItemDetail'

function ItemListDetail({products}) {
  return (
    <>
      {products.map((product) => <ItemDetail key={product.Id} product={product}/>)}
    </>
  )}


export default ItemListDetail
