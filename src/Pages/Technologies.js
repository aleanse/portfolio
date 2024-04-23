import React from "react";
import { techStackDetails } from "../Details";
import { BrowserRouter } from 'react-router-dom';
import {
  Tech,
} from '../Components';
function Technologies() {
  return (
    <main className=" mx-auto pt-4  max-width  flex justify-center items-center bg-tech bg-cover bg-center bg-no-repeat pb-10 ">
        <Tech />  
    </main>
  );
} 

export default Technologies;
