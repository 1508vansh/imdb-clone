import { createContext, useState } from "react";

const UserContext = createContext(null);

export default function UserProvider({children}){
    const [theme,setTheme] = useState((JSON.parse(localStorage.getItem('theme'))) || 'light');
    return(
        <UserContext.Provider value={{theme,setTheme}}>
           {children}
        </UserContext.Provider>
    )
}
export {UserContext};