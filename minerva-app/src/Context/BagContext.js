import {createContext,useState} from 'react';

export const BagContext = createContext([])

function BagContextProvider({children}) {
    const [bagList, setBagList] = useState([])
    const [NotItems, SetNoItems] = useState()

    const addToBag=(item,count)=>{

        const findDuplicates = bagList.find(
            (found) => found.id === item.id
          );

        if (findDuplicates) {
            findDuplicates.cantidad += count; 
            setBagList( [ ...bagList]);
        } else {
            setBagList( [ ...bagList, item ] )
        }  
    }
    
    const clearBag = () =>{
        setBagList([])
    }
    
    const itemsFinder = () => {
       
        if (bagList.length === 0) {
            SetNoItems(true);
        }
        else {
            SetNoItems(false);
        } 
    }

    const deleteItem = (id) =>{
        const indenterItem = bagList.filter((thisItem) => thisItem.id !== id);
        setBagList(indenterItem);
    }

    const calcTotalItems = bagList.reduce((acc,product) =>{
        return  acc + (product.cantidad * product.Price);
    },0);

    
    const calcSumTotalItems = bagList.reduce((acc,product) => {
        return acc + (product.cantidad);
    },0);


    return (
        <BagContext.Provider value={{bagList,deleteItem,addToBag,clearBag,itemsFinder,NotItems,calcTotalItems,calcSumTotalItems}}>
            { children }
        </BagContext.Provider>
    )
}

export default BagContextProvider
