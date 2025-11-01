import React, { createContext, useState } from 'react'
import { food_items } from '../food';
export const dataContext = createContext();


const UserContext = ({ children }) => {

    // ================ usesate ====== 
    const [cate, setCate] = useState(food_items);

    const [input, setInput] = useState("");
    let data = {
        input,
        setInput,
        cate, 
        setCate
    }

    return (
        <div>
            <dataContext.Provider value={data}>

                {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext