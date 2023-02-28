import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-800 text-white flex justify-around items-center py-7">
      <a className="btn btn-ghost normal-case text-3xl flex justify-between">T-Shirt Mania</a>
      <div className="flex gap-5 underline items-center">
        <Link to="/">Home</Link>
        <Link to="/tshirts">T-Shirts</Link>
        <Link to="/About">About us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
