import { Element } from "react-scroll";
import SectionHeader from "../Util/SectionHeader";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <Element name="about" className="element" />
      <div className="min-h-[80vh] flex py-20 px-6 text-slate-800 bg-slate-200 items-center text-center">
        <div className="max-w-6xl m-auto">
          <SectionHeader white="false">About Me</SectionHeader>
          <p className="my-6">
            As a seasoned Test Analyst, I bring a wealth of experience in
            ensuring software quality through rigorous testing practices.
          </p>
          <p className="my-6 font-bold">Here’s what defines my approach:</p>

          <ul className="flex flex-col items-center">
            <li className="p-3 my-3 rounded-md bg-slate-300 shadow-md max-w-3xl shadow-grey-500 hover:shadow-gray-500 hover:shadow-lg hover:-translate-y-2 transition-all">
              <p>
                <strong>Bug Hunting:</strong> Testing is not only about creating
                comprehensive test plans, executing test cases, and conducting
                strategic regression testing. My keen eye for detail helps
                uncover critical defects early in the development lifecycle. I
                actively participate in requirements gathering and business
                analysis to ensure a deep understanding of project needs and
                objectives. This involvement allows me to align testing
                strategies with business goals and contribute to creating more
                effective and user-centric applications.
              </p>
            </li>
            <li className="p-3 my-3 rounded-md bg-slate-300 shadow-md max-w-3xl shadow-grey-500 hover:shadow-gray-500 hover:shadow-lg hover:-translate-y-2 transition-all">
              <p>
                <strong>QA Expertise:</strong> I continuously try to find ways
                of improving testing processes to enhance efficiency and
                effectiveness. I adopt new testing methodologies, automate
                repetitive tasks, integrate testing early in the development
                cycle, and use metrics to monitor and improve test coverage and
                quality.
              </p>
            </li>
            <li className="p-3 my-3 rounded-md bg-slate-300 shadow-md max-w-3xl shadow-grey-500 hover:shadow-gray-500 hover:shadow-lg hover:-translate-y-2 transition-all">
              <p>
                <strong>Automation Savvy:</strong> Proficient in frameworks such
                as Jest, Cypress and Playwright, I’ve automated repetitive
                tasks, significantly improving efficiency and test coverage.
              </p>
            </li>
            <li className="p-3 my-3 rounded-md bg-slate-300 shadow-md max-w-3xl shadow-grey-500 hover:shadow-gray-500 hover:shadow-lg hover:-translate-y-2 transition-all">
              <p>
                <strong>React Enthusiast:</strong> My passion extends to web and
                app development. I've created many apps and websites as personal
                projects using React, React Native, NextJs, Python and C++. And
                using tools such as Jest, Cypress and Playwright, I have created
                automated test plans that comprehensively test these projects.
              </p>
            </li>
            <li className="p-3 my-3 rounded-md bg-slate-300 shadow-md max-w-3xl shadow-grey-500 hover:shadow-gray-500 hover:shadow-lg hover:-translate-y-2 transition-all">
              <p>
                <strong>Continuous Learning:</strong> I like learning new things
                that interest me. I use my free time to expand my experience.
                Learning is my driving force.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
