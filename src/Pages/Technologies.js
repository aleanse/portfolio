import React from "react";
import { techStackDetails } from "../Details";
import { BrowserRouter } from 'react-router-dom';
import {
  Tech,
} from '../Components';
function Technologies() {
  return (
    <main className=" mx-auto min-h-[100vh]   flex justify-center items-center bg-tech bg-cover bg-center bg-no-repeat pb-12 ">
        <Tech />  
    </main>
  );
} 

export default Technologies;
