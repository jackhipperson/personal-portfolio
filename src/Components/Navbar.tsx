import React from "react";
import NavItem from "../Util/NavItem";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 bg-slate-600 border-b-2 border-black z-10 align-middle opacity-90">
      <div className="max-w-6xl m-auto flex py-4 px-6 text-white">
        <div className="font-bold text-xl p-1">Jack Hipperson</div>
        <div className="flex ml-auto text-right">
          <NavItem name="About" />
          <NavItem name="Skills" />
          <NavItem name="Projects" />
          <NavItem name="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
