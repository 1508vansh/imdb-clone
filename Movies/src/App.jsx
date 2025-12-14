import React from "react";
import { useState, useEffect } from "react";
import Movie from "./MovieCard";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4ZTIwOTNkMzk2Y2M5MGE1MDhiYjc5MDRiN2YwYSIsIm5iZiI6MTc2NTcxNjA4MS41NTEsInN1YiI6IjY5M2ViMDcxMzhiNDgxYzlmNjgzZTk4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F6w62zfF7QBntxnzp9_sjR2ZrZrmTAoghwXl1rNe7JQ";
export default function () {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [data,setData] = useState([]);

  console.log("data",data);

  function format(){
     const arr = input.split(" ");
     const joined = arr.join("+");
     return joined;
  }
  useEffect(() => {
    async function getData() {
      try{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${format()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if(!response) throw new Error("Didn't get any response!");
      console.log("Response is :",response);
      const res = await response.json();
      console.log("Res is :",res);
      setData(res.results);
    }catch(err){
        console.log("Error Occured!",err);
    }
    }
    getData();
  }, [count]);
  return (
    <>
      <div className="h-screen w-screen overflow-scroll flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center overflow-scroll object-fill">
          <label for="movie" className="font-bold">
            Enter Movie Name
          </label>
          <input
            id="movie"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="ml-2 border-none outline-none border-2 border-black"
            placeholder="ex: Titanic"
          ></input>
          <button
            onClick={() => setCount((prev) => prev + 1)}
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
            Search Movie
          </button>
          <Movie SAMPLE_MOVIES={data}/>
        </div>
      </div>
    </>
  );
}
