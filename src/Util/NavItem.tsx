import React from "react";
import { Link } from "react-scroll";

interface navItemProps {
  name: string;
}

const NavItem: React.FC<navItemProps> = ({ name }) => {
  return (
    <div className="hover:bg-slate-500 rounded-md p-1 cursor-pointer">
      <Link
        activeClass="active"
        to={name.toLowerCase()}
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
      >
        <p className="px-4">{name}</p>
      </Link>
    </div>
  );
};

export default NavItem;
