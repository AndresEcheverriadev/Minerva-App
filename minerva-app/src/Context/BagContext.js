import React from 'react'
import { createContext, useState } from 'react';

export const BagContext = createContext([])

function BagContextProvider({children}) {
    const [bagList, setBagList] = useState([])

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
    
    const deleteItem = () =>{
       bagList.splice(bagList[0],1);
    }



    return (
        <BagContext.Provider value={{bagList,addToBag,deleteItem,clearBag}}>
            { children }
        </BagContext.Provider>
    )
}

export default BagContextProvider
