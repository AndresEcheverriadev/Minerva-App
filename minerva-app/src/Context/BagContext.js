import React from 'react'
import { createContext, useState } from 'react';

export const BagContext = createContext([])

function BagContextProvider({children}) {
    const [bagList, setBagList] = useState([])

    const addToBag=(item)=>{
        setBagList( [ ...bagList, item ] )
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
