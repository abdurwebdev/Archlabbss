"use client"
import React, { useEffect, useRef } from 'react'
import { FcBusiness} from "react-icons/fc";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Service = () => {
    const firstRef = useRef(null)
    useEffect(() => {
     const el=firstRef.current;
     gsap.fromTo(el,{y:50,opacity:0},{y:0,opacity:1,delay:0.1,scrollTrigger:{
        trigger:el,
     }})
    }, [])
    
  return (
    <div className='p-16 m-auto'>
        <div className='flex flex-col items-center justify-center gap-3' ref={firstRef}>
                 <FcBusiness className='text-8xl text-[#96BB7C]'/>
                 <h1 className='text-2xl font-medium'>Decoration</h1>
                 <p className='text-[#898484] tracking-wider text-center'>A small river named Duden flows by their place and supplies it <br /> with the necessary regelialia.</p>
        </div>
    </div>
  )
}

export default Service