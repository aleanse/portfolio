import React from "react";
import { techStackDetails } from "../Details";
import { BrowserRouter } from 'react-router-dom';
import {
  Tech,
} from '../Components';

function Technologies() {
  // const {
  //   vscode,
  //   git,
  //   github,
  //   figma,
  // } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-0 pb-20 ">
       <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <Tech />
        </div>
      
     
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          ferramentas
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        {/* <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" /> */}
      </section>
    </main>
  );
} 

export default Technologies;
