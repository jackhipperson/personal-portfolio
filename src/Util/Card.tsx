import React from "react";
import Button from "./Button";

interface cardProps {
  pName: string;
  pDesc: string;
  pLiveLink: string;
  pGitLink: string;
  pImgLink: string;
  pStack: string[];
}

const Card: React.FC<cardProps> = ({
  pName,
  pDesc,
  pLiveLink,
  pGitLink,
  pImgLink,
  pStack,
}) => {
  return (
    <div key={pName} className="max-w-s lg:max-w-6xl lg:flex m-auto mb-8">
      <a href={pLiveLink} target="_blank" rel="noreferrer">
        <div
          className="min-h-72 lg:w-60 hover:scale-125 flex-none bg-cover rounded-t-xl lg:rounded-r-none border-r border-b border-l border-gray-400 border-t lg:rounded-l-xl text-center overflow-hidden"
          style={{ backgroundImage: `url(${pImgLink})` }}
          title={pName}
        ></div>
      </a>
      <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b-xl lg:rounded-b-none lg:rounded-r-xl p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-2xl mb-2">{pName}</div>
          <div className="flex flex-row justify-center my-4 flex-wrap">
            {pStack &&
              pStack.map((icon) => {
                return (
                  <img src={`/images/${icon}-icon.svg`} alt={icon} key={icon} />
                );
              })}
          </div>
          <p className="text-gray-700 text-base">{pDesc}</p>
        </div>
        <div className="flex items-center w-full justify-center">
          <Button pLink={pLiveLink}>Live Demo</Button>
          <Button pLink={pGitLink}>GitHub Code</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
