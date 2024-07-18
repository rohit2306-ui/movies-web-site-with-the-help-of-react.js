import React from "react";

function Moviecard() {
  return (
    <div className="h-[45vh] w-[25vh] bg-center bg-cover rounded-xl p-3 hover:scale-110 duration-300 hover:cursor-pointer"
      style={{backgroundImage: `url(https://imageio.forbes.com/blogs-images/markhughes/files/2019/04/AVENGERS-ENDGAME-poster-DOLBY-CINEMA.jpg?height=1039&width=711&fit=bounds)` }}
    ></div>
  );
}

export default Moviecard;
