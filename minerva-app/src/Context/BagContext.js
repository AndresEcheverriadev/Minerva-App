import React from 'react'
import { createContext, useState } from 'react';

export const BagContext = createContext([])

function BagContextProvider({children}) {
    const [bagList, setBagList] = useState([])

    const addToBag=(item)=>{

        const findDuplicates = bagList.find(
            (found) => found.Id === item.Id
          );

        if (findDuplicates) {
            findDuplicates.cantidad += 1; 
            setBagList( [ ...bagList]);
            console.log('duplicado')
        } else {
            setBagList( [ ...bagList, item ] )
            console.log('no duplicado')
        }       
    }
    
    const deleteFromBag= () =>{
        setBagList([])
    }

    return (
        <BagContext.Provider value={{bagList,addToBag,deleteFromBag}}>
            { children }
        </BagContext.Provider>
    )
}

export default BagContextProvider
