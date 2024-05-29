"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const firstRef = useRef(null);
  useEffect(() => {
   const el=firstRef.current;
   gsap.fromTo(el,{y:50,opacity:0},{opacity:1,y:0,delay:0.1,scrollTrigger:{
    trigger:el
   }})
  }, [])
  
  return (
    <div className='relative w-full hover:text-[#1a29d0]  text-[#0F101C] hover:transition-colors top-0' ref={firstRef}>
        <img src="https://preview.colorlib.com/theme/archlab/images/team-2.jpg.webp" className='w-full object-top object-cover h-96' />
        <div className='absolute top-72 left-6'>
            <h1 className='font-extrabold text-2xl  '>
ROBERT
 <br />WILLS</h1>

        </div>
        <h1 className='absolute left-6 font-semibold top-[25rem] text-[#AECB9A]'>ARCHITECT</h1>
    </div>
  )
}

export default Team