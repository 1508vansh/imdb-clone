import React from "react";
import { useState, useEffect } from "react";
import Movie from "./MovieCard";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4ZTIwOTNkMzk2Y2M5MGE1MDhiYjc5MDRiN2YwYSIsIm5iZiI6MTc2NTcxNjA4MS41NTEsInN1YiI6IjY5M2ViMDcxMzhiNDgxYzlmNjgzZTk4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F6w62zfF7QBntxnzp9_sjR2ZrZrmTAoghwXl1rNe7JQ";
export default function () {
  const [input, setInput] = useState("");
  const [data,setData] = useState([]);

  console.log("data",data);

  function format(){
     const arr = input.split(" ");
     const joined = arr.join("+");
     return joined;
  }

  async function getData(){
      if(!input) return;
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
  useEffect(() => {
    if(!input) return;
    const timer = setTimeout(()=>{
       getData();
    },1000);
    return ()=> clearInterval(timer);
  }, [input]);
  return (
    <>
      <div className="h-screen w-screen">
        <div className="w-full">
          <div className="flex justify-center items-center">
          <label htmlFor="movie" className="font-bold">
            Search Movie
          </label>
          <input
            id="movie"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="ml-2 border-none outline-none border-2 border-black w-80 px-8 py-2 rounded-2xl"
            placeholder="ex: Titanic"
          ></input>
          </div>
          <div className="w-full">
          <Movie SAMPLE_MOVIES={data}/>
          </div>
        </div>
      </div>
    </>
  );
}
