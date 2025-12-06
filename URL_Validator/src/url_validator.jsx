import react from "react";
import { useState, useEffect } from "react";

function test(url) {
  if (!url) {
    alert("Please enter a URL!");
    return;
  }
  const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
  const isValid = urlRegex.test(url);
  if (isValid) {
    alert("Entered URL is Valid!");
    return;
  } else {
    alert("Entered URL is not Valid");
    return;
  }
}
export default function Validate() {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div>
          <label for="url" className="font-bold">
            Enter URL
          </label>
          <input
            id="url"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="ml-2 border-none outline-none border-2 border-black"
            placeholder="ex: https://abc.com"
          ></input>
          <button
            onClick={()=>test(input)}
            className="
  px-4 py-2 
  bg-blue-600 
  text-white 
  rounded-lg 
  font-medium 
  hover:bg-blue-700 
  active:scale-95 
  transition 
  duration-200
"
          >
            Validate
          </button>
        </div>
      </div>
    </>
  );
}
