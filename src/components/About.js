import React from "react";
import pdf from "./Negar-WD-Resume-V1.pdf"

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I am Negar
            <br className="hidden lg:inline-block" />
            A passionate creative full stack front-end developer
          </h1>
          <p className="mb-8 leading-relaxed">
            I have decided to follow up my passion and have applied for Hack Your Future web development educational program and joined HYF familly on September 2021.
            Every single moment of this journey was alog leaning new technologies, materials and team work process.
            I beleive that using the benefit of my past experience in project management beside web development knowledge, I can increase the pace of problem solving within web development projects.
            I am driven by finding practical, stable solutions for issues.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact me
            </a>
            <a
              href={pdf}
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./profilePic.png"
          />
        </div>
      </div>
    </section>
  );
};
