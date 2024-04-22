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
    <main className="container mx-auto max-width pt-0 pb-20  flex justify-center items-center ">
     <div className="flex justify-center">
      <div className="tech">
          <Tech />
      </div>
    </div>
     
    </main>
  );
} 

export default Technologies;
