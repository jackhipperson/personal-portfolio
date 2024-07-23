import React from "react";
import { Link } from "react-scroll";

const Hero: React.FC = () => {
  return (
    <div className="bg-slate-800 bg-[linear-gradient(to_bottom,rgba(30,41,59,0.8)40%,rgba(30,41,59,0)),url('./ProjectImages/cubes.png')]">
      <div className="flex text-center min-h-[80vh] items-center justify-center">
        <div>
          <h1 className="text-6xl font-bold tracking-tight text-gray-100">
            Jack Hipperson
          </h1>
          <p className="mt-6 text-2xl leading-8 text-gray-300">
            Automated QA Test Analyst with Web Development experience
          </p>
        </div>
      </div>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
      >
        <div className="flex justify-center text-white animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
