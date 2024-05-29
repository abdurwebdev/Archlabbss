"use client"
import React from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
import FourthHeader from '../Components/FourtHeader';
import Service from '../Components/Service';
import Service2 from '../Components/Service2';
import Service3 from '../Components/Service3';
import Service4 from '../Components/Service4';
import Service5 from '../Components/Service5';
import Service6 from '../Components/Service6';
import Service7 from '../Components/Service7';
import Service8 from '../Components/Service8';
import Pricing from "../Components/Pricing";
import Pricing2 from '../Components/Pricing2';
import Pricing3 from '../Components/Pricing3';
gsap.registerPlugin(ScrollTrigger);
const page = () => {
    const priceRef = useRef(null);
    useEffect(() => {
        const gl=priceRef.current;
        gsap.fromTo(gl,{y:100},{y:0,scrollTrigger:{
          trigger:gl
        }})
      }, [])
  return (
    <>
    <FourthHeader/>
    <div className='grid grid-cols-1 mt-20  h-auto md:grid md:grid-cols-2 xl:grid xl:grid-cols-4'>
        <div>
            <Service/>
        </div>
        <div>
            <Service2/>
        </div>
        <div>
            <Service3/>
        </div>
        <div>
            <Service4/>
        </div>
        <div>
            <Service5/>
        </div>
        <div>
            <Service6/>
        </div>
        <div>
            <Service7/>
        </div>
        <div>
            <Service8/>
        </div>
    </div>
    <div className="flex flex-col m-auto " ref={priceRef}>
         <h1 className="text-[#BCD4AC] text-2xl text-center mt-36">PRICING</h1>
         <h1 className="text-[#171717] text-3xl text-center">Price & Plans</h1>
  </div>
  <div className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 grid grid-cols-1  mb-32">
    <div>
      <Pricing/>
    </div>
    <div>
      <Pricing2/>
    </div>
    <div>
      <Pricing3/>
    </div>
  </div>
    </>
  )
}

export default page