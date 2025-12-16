import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
function App(){
  const {theme,setTheme} = useContext(UserContext);
  return(
    <>
     <div className={`w-screen h-screen text-center transition duration-500 flex justify-center items-center ${theme==='light'?'text-black bg-white':'text-white bg-black'}`}>
      <div>
       <div className="text-2xl">
        Hello Humans!
       </div>
       <div><button className="border-2 rounded-xl px-3 py-2 text-white bg-indigo-400 border-indigo-400" onClick={()=>{
        setTheme(theme==='light'?'dark':'light'),
        localStorage.setItem('theme',JSON.stringify(theme==='light'?'dark':'light'));
        }}>Change Theme</button></div>
       </div>
     </div>
    </>
  )
}

export default App;
