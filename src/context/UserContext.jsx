import React, { createContext, useState } from 'react'
export const  dataContext = createContext();

const UserContext = ({children}) => {

    // ================ usesate ====== 
const [input ,setInput] = useState("")
    let data = {
input ,
setInput
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