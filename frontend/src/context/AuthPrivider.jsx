import React, { createContext, useContext, useState } from 'react'
import cookies from 'js-cookie'

export const authContext= createContext()

export const AuthPrivider = ({children}) => {
    const initialState= cookies.get('jwt') || localStorage.getItem('user')
const [authUser, setAuthUser] = useState(initialState? (initialState):undefined);

  return (
    <authContext.Provider value={{authUser,setAuthUser}}>
      {children}
    </authContext.Provider>
  )
}


export const contextApi=()=>{
 return useContext(authContext);
}

