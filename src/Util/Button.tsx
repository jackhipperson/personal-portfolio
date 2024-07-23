import React from "react";

interface buttonProps {
  children: string;
  pLink: string;
}

const Button: React.FC<buttonProps> = ({ children, pLink}) => {
  return (
    <a href={pLink} target="_blank" rel="noreferrer">
      <div className=" bg-slate-800 shadow-gray-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500 active:translate-y-0 transition-all rounded-xl shadow-sm p-2 mx-2">
        <p className="text-white text-xl">{children}</p>
      </div>
    </a>
  );
};

export default Button;
