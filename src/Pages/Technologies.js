import React from "react";
import { techStackDetails } from "../Details";
import { BrowserRouter } from 'react-router-dom';
import {
  Tech,
} from '../Components';
function Technologies() {
  return (
    <main className=" mx-auto max-width  flex justify-center items-center bg-tech bg-cover bg-center bg-no-repeat pb-11 ">
        <Tech />  
    </main>
  );
} 

export default Technologies;
