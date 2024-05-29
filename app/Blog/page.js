"use client"
import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
import SixthHeader from '../Components/SixthHeader';
import Blog from "../Components/Blog";
import Blog2 from '../Components/Blog2';
import Blog3 from '../Components/Blog3';
import Blog4 from '../Components/Blog4';
import Blog5 from '../Components/Blog5';
import Blog6 from '../Components/Blog6';
import Blog7 from '../Components/Blog7';
import Blog8 from '../Components/Blog8';
gsap.registerPlugin(ScrollTrigger);
const page = () => {
    const blogRef = useRef(null);
    useEffect(() => {
        const ui=blogRef.current;
        gsap.fromTo(ui,{y:100},{y:0,scrollTrigger:{
          trigger:ui
        }})
      }, [])
    return (
    <>
    <SixthHeader/>
    <div className="flex flex-col m-auto" ref={blogRef}>
         <h1 className="text-[#BCD4AC] text-2xl text-center mt-36">BLOG</h1>
         <h1 className="text-[#171717] text-3xl text-center">Recent Blog</h1>
  </div>
  <div className="grid md:grid md:grid-cols-2 mb-20 xl:grid xl:grid-cols-4 grid-cols-1">
     <div>
     <Blog/>
     </div>
     <div>
      <Blog2/>
     </div>
     <div>
      <Blog3/>
     </div>
     <div>
      <Blog4/>
     </div>
     <div>
      <Blog5/>
     </div>
     <div>
      <Blog6/>
     </div>
     <div>
      <Blog7/>
     </div>
     <div>
      <Blog8/>
     </div>
  </div>
    </>
  )
}

export default page