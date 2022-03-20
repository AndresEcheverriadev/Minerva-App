import ItemDetail from '../ItemDetail/ItemDetail'

function ItemList({ prods }) {
  return (
    <>
    { 
    prods.map((prod) => <ItemDetail key={prod.id} prod={prod} /> )
    }
    </>
    
  ) }


export default ItemList