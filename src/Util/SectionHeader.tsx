import React from "react";

interface sectionHeaderProps {
  children: string;
  white: string;
}

const SectionHeader: React.FC<sectionHeaderProps> = ({ children, white }) => {
  const classString = `text-5xl font-light inline-block hover:scale-125 hover:underline hover:underline-offset-8 transition-all duration-500 uppercase mb-8 ${
    white === "true" && "text-white"
  }`;

  return <h2 className={classString}>{children}</h2>;
};

export default SectionHeader;
