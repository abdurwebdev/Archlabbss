"use client"
import React from 'react'
import FifthHeader from '../Components/FifthHeader';
import UniqueOne from "../Components/UniqueOne";
import UniqueTwo from '../Components/UniqueTwo';
import UniqueThree from "../Components/UniqueThree";
import UniqueFour from '../Components/UniqueFour';
import UniqueFive from '../Components/UniqueFive';
import Unique6 from '../Components/Unique6';
import Unique7 from '../Components/Unique7';
import Unique8 from '../Components/Unique8';
import Unique9 from '../Components/Unique9';
const page = () => {
  return (
    <>
    <FifthHeader/>
    <div className="flex flex-col gap-2 mt-20 ">
    <h1 className="text-center text-xl font-semibold text-[#96BB7C]">PROJECTS</h1>
    <h1 className="text-center text-3xl md:text-7xl text-[#333333]">Our Unique Latest Projects</h1>
  </div>
  <div className="grid grid-cols-1 h-auto px-3  md:px-0">
    <div className=" h-[1100px] xl:h-[900px] md:h-[700px] ">
      <UniqueOne/>
    </div>
    <div className=" h-[700px] xl:h-[900px] md:h-[700px]">
      <UniqueTwo/>
    </div>
    <div className=" h-[800px] xl:h-[900px] md:h-[700px]">
    <UniqueThree/>
    </div>
    <div className=" h-[800px] xl:h-[900px] md:h-[700px]">
      <UniqueFour/>
    </div>
    <div className=" h-[1100px] xl:h-[1000px] md:h-[700px]">
      <UniqueFive/>
    </div>
    <div className=" h-[1100px] xl:h-[1000px] md:h-[700px]">
      <Unique6/>
    </div>
    <div className=" h-[1100px] xl:h-[1000px] md:h-[700px]">
      <Unique7/>
    </div>
    <div className=" h-[1100px] xl:h-[1000px] md:h-[700px]">
      <Unique8/>
    </div>
    <div className=" h-[1100px] xl:h-[1000px] md:h-[700px] mb-28">
      <Unique9/>
    </div>
  </div>
    </>
  )
}

export default page