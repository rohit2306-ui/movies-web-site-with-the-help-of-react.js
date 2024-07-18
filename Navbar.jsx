import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import Serch from "./Serch";


function Navbar() {
  return (
    <div className="flex border space-x-8 items-center">
      <img className="w-[50px] rounded-6.2xl" src={logo} alt="" />
      <Link className="text-blue-500 text-2  text-2xl" to="">
        Movies
      </Link>
      <Link className="text-blue-500 text-2xl" to="/watchlist">
        watchlist
      </Link>
      <a className="px-100 font-extrabold text-3xl">
        <h1>RST Cinema</h1>
      </a>
      <Link to='./serch' className="text-xl text-dark bg-red-200 px-10 rounded-xl">Serch</Link>
      
      
    </div>
  );
}

export default Navbar;
