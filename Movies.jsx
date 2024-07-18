import React, { useState } from "react";
import Moviecard from "./Moviecard";
import { useEffect } from "react";
import axios from 'axios'


function Movies() {
return (
    <div className="text-center p-3 ">
      <h1 className="text-2xl">Trending Movies</h1>
      <div className="flex flex-row flex-around p-5 space-x-7">
        
        <Moviecard/>
        <Moviecard />
        <Moviecard />
      </div>
    </div>
  );
}

export default Movies;
