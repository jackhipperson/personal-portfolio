import widdle from "../ProjectImages/widdle.png";
import calculator from "../ProjectImages/calculator.png";
import investment from "../ProjectImages/investment.png";
import filmApp from "../ProjectImages/filmApp.png"
import portfolio from "../ProjectImages/portfolio.png"
import Card from "../Util/Card";
import SectionHeader from "../Util/SectionHeader";
import { Element } from "react-scroll";
import React from "react";

const Projects: React.FC = () => {
  return (
    <>
      <Element name="projects" className="element" />
      <div className="mx-auto min-h-[80vh] py-20 px-6 text-slate-800 bg-slate-200 text-center">
        <SectionHeader white="False">Projects</SectionHeader>

        <Card
          pName="Wordle Clone"
          pStack={["react", "redux", "tailwind", "vite"]}
          pDesc="I created a Wordle clone to work on my React and CSS skills. I wanted the game to look exactly like the popular Wordle game, but be an infinite version rather than one word per day."
          pImgLink={widdle}
          pLiveLink="https://jackhipperson.github.io/widdle/"
          pGitLink="https://github.com/jackhipperson/widdle"
        />
        <Card
          pName="Film App"
          pStack={[
            "react",
            "react-router",
            "typescript",
            "vercel",
            "tailwind",
            "jest",
            "playwright",
          ]}
          pDesc="This is a web application that allows users to search for movies, save their favourites, and manage a watch list. The application is built using React with TypeScript, utilising TheMovieDB API features. It includes unit testing with Jest and end-to-end testing with Playwright. It is deployed on Vercel. CSS styling is TailwindCSS and icons are HeroIcons."
          pImgLink={filmApp}
          pLiveLink="https://film-app-roan.vercel.app/"
          pGitLink="https://github.com/jackhipperson/film-app"
        />
                <Card
          pName="Personal Portfolio (This Webpage!)"
          pStack={[
            "react",
            "typescript",
            "tailwind",
          ]}
          pDesc="Created a Single Page React App using typescript as a landing page for my portfolio. The website uses Tailwind CSS for styling."
          pImgLink={portfolio}
          pLiveLink="#"
          pGitLink="https://github.com/jackhipperson/personal-portfolio"
        />
        <Card
          pName="React Calculator"
          pStack={["react", "css"]}
          pDesc="This React Calculator is a straightforward web-based calculator application developed using React JS and CSS Modules. This project was for me to gain experience with React and to enhance CSS skills."
          pImgLink={calculator}
          pLiveLink="https://jackhipperson.github.io/Calculator/"
          pGitLink="https://github.com/jackhipperson/Calculator"
        />
        <Card
          pName="Investment Calculator"
          pStack={["react", "tailwind", "vite", "cypress"]}
          pDesc="I created an Investment Calculator to work on my React, CSS and Javascript skills. I added Cypress and added automated test scripts to this project in order to check the structure, styling and calculation logic, which is re-run upon change."
          pImgLink={investment}
          pLiveLink="https://jackhipperson.github.io/investment-calc-with-cypress/"
          pGitLink="https://github.com/jackhipperson/investment-calc-with-cypress"
        />
      </div>
    </>
  );
};

export default Projects;
