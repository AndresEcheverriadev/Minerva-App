import React from 'react'
import { createContext, useState } from 'react';

export const BagContext = createContext([])

function BagContextProvider({children}) {
    const [bagList, setBagList] = useState([])
    const [NotItems, SetNoItems] = useState()

    const addToBag=(item,count)=>{

        const findDuplicates = bagList.find(
            (found) => found.Id === item.Id
          );

        if (findDuplicates) {
            findDuplicates.cantidad += count; 
            setBagList( [ ...bagList]);
            console.log('duplicado')
        } else {
            setBagList( [ ...bagList, item ] )
            console.log('no duplicado')
        }       
    }
    
    const clearBag = () =>{
        setBagList([])
    }
    
    const deleteItem = (Id) =>{
        // const indenterItem = bagList.filter(thisItem => thisItem.Id !== Id);
        const indenterItem = bagList.filter(thisItem => thisItem.Id !== '1');
        setBagList(indenterItem);
    }

    const itemsFinder = () => {
       
        if (bagList.length === 0) {
            SetNoItems(true);
            console.log('no hay items');
        }
        else {
            SetNoItems(false);
            console.log('hay items');
        } 
    }

    return (
        <BagContext.Provider value={{bagList,addToBag,deleteItem,clearBag,itemsFinder}}>
            { children }
        </BagContext.Provider>
    )
}

export default BagContextProvider
