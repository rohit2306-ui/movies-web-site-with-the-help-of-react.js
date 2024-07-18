import React from "react";
import Moviecard from "./Moviecard";
import Movies2 from "./Movies2";

function Serch() {
  return (
    <>
      <div className="p-4 bg-slate-300 brightness-100">
        <input
          className="px-4 h-10 w-60 rounded-l-lg ... ring-2 ring-blue-500/50 text-xl pointer-events-auto ease-in-out"
          type="text"
          placeholder="Serch here"
        />
        <button
          onChange={{}}
          className="... ring-2 ring-blue-500/50 px-4 rounded-r-lg text-xl h-10 px-5  pointer-events-auto ease-in-out"
        >
          serch
        </button>
      </div>
      <div className="flex">
        <div className="h-7 w-1/2 bg-gray-900 rounded-r-lg">
          <h1 className="text-white h-full w-1/2">
            =========================================================
          </h1>
        </div>
       
        
      </div>
      <div className="p-5">
        <Moviecard />
      </div>
    </>
  );
}

export default Serch;
