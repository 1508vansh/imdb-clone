import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("Tasks")) || []
  );
  function save() {
    let arr = localStorage.getItem("Tasks");
    arr = arr ? JSON.parse(arr) : [];
    arr.push({ id: arr.length + 1, completed: false, text });
    localStorage.setItem("Tasks", JSON.stringify(arr));
    setData([...arr]);
  }
  function setCompleted(targetId) {
    const updatedArray = data.map((item) =>
      item.id === targetId ? { id:item.id,completed:true,text:item.text } : item
    );
    setData(updatedArray);
    localStorage.setItem("Tasks", JSON.stringify(updatedArray));
  }
  function deleteTask(taskId){
      const newArr = data.filter((item)=>{
          return item.id != taskId;
      });
      localStorage.setItem("Tasks",JSON.stringify(newArr));
      setData([...newArr]);
  }
  return (
    <>
      <div className="h-screen w-screen">
        <div className="w-full justify-center flex flex-col items-center gap-5">
        <div className="w-80 p-5 border-2 border-black rounded-xl text-center">
          <p>Filter Tasks</p>
          <div className="w-full gap-2 flex justify-center items-center">
              <div><button 
              onClick={()=>{
                 setData(
                   JSON.parse(localStorage.getItem("Tasks"))
                 );
              }
              } className="border-2 bg-red-500 rounded-sm px-3 py-2 font-semibold">All</button></div>
              <div><button
              onClick={()=>{
                setData([...JSON.parse(localStorage.getItem("Tasks"))?.filter(((obj)=>{
                      return !obj?.completed;
                   }))])
              }}
              className="border-2 bg-red-500 rounded-sm px-3 py-2 font-semibold">Pending</button></div>
              <div><button
               onClick={()=>{
                setData([...JSON.parse(localStorage.getItem("Tasks"))?.filter(((obj)=>{
                      return obj?.completed;
                   }))])
              }}
              className="border-2 bg-red-500 rounded-sm px-3 py-2 font-semibold">Completed</button></div>
          </div>
        </div>
        <div className="w-80 p-5 border-2 border-black rounded-xl flex justify-center items-center">
          <div>
            <p className="m-5">Write Your Task -</p>
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
              Save Task
            </button>
          </div>
        </div>
        <div className="w-[60%] p-5 border-2 border-black rounded-xl flex justify-center items-center flex-wrap gap-5">
          {data?.map((obj,idx) => {
            return (
              <>
                <div
                  key={obj.id}
                  className="max-w-xs rounded-2xl shadow-lg p-4 bg-white text-gray-900 hover:scale-105 transform transition-transform duration-300"
                >
                  <div className="relative rounded-xl overflow-hidden bg-gray-100">
                    <span className="text-2xl">Task:{idx + 1}</span>
                    <p className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      {obj.text}
                    </p>
                    <button onClick={()=>deleteTask(obj.id)} className="px-3 py-1 m-2 bg-red-600 text-white rounded-sm border-none outline-none">
                      Delete Task
                    </button>
                    <span>{obj.completed ? "✅" : "🟥"}</span>
                    <button
                      className={`px-3 py-1 m-2 bg-green-600 text-white rounded-sm border-none outline-none`}
                      onClick={() => setCompleted(obj.id)}
                      disabled={obj.completed}
                    >
                      {obj?.completed?'':'Mark As Complete'}
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
