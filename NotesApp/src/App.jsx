import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState(JSON.parse(localStorage.getItem("Notes")) || []);
  function save() {
    let arr = localStorage.getItem("Notes");
    arr = arr ? JSON.parse(arr) : [];
    arr.push(text);
    localStorage.setItem("Notes", JSON.stringify(arr));
    setData([...arr]);
  }

  return (
    <>
      <div className="h-screen w-screen">
        <div className="w-80 p-5 border-2 border-black rounded-xl flex justify-center items-center">
          <div>
            <p className="m-5">Write Your Note -</p>
            <input
              type="text"
              className="outline-none border-2 border-black rounded-xl p-5"
              onChange={(e) => setText(e.target.value)}
              placeholder="Write your Notes Here"
              height={100}
              width={100}
            ></input>
            <br />
            <button
              className="p-5 m-5 bg-indigo-400 text-white rounded-sm border-none outline-none"
              onClick={save}
            >
              Save Note
            </button>
          </div>
        </div>
        <div className="w-[60%] p-5 border-2 border-black rounded-xl flex justify-center items-center flex-wrap gap-5">
          {data?.map((obj, idx) => {
            return (
              <>
                <div key={idx} className="max-w-xs rounded-2xl shadow-lg p-4 bg-white text-gray-900 hover:scale-105 transform transition-transform duration-300">
                  <div className="relative rounded-xl overflow-hidden bg-gray-100">
                      <span className="text-2xl">Note:{idx+1}</span>
                      <p
                        className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                      >
                        {obj}
                      </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
