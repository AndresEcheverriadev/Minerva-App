import React from 'react'
import { createContext, useContext, useState } from 'react';

const BagContext = createContext([])

export const useBagContext = () => useContext(BagContext)

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
