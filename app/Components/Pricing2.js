"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { FcApproval } from "react-icons/fc";
gsap.registerPlugin(ScrollTrigger);
const Pricing = () => {
    const priceRef = useRef(null)
    useEffect(() => {
     const el=priceRef.current;
     gsap.fromTo(el,{y:50,opacity:0},{y:0,opacity:1,delay:0.1,scrollTrigger:{
        trigger:el
     }})
    }, [])
  return (
    <div className='flex space-y-5 flex-col m-auto p-10' ref={priceRef}>
        <div>
            <img className='h-72 object-cover w-full' src="https://preview.colorlib.com/theme/archlab/images/work-2.jpg.webp"/>
        </div>
        <div className='flex flex-col space-y-5'>
            <div className='flex items-center gap-2'>
                 <FcApproval/>
                 <h1 className='text-xl text-[#232323]'>Planning Solution</h1>
            </div>
            <div className='flex items-center gap-2'>
                 <FcApproval/>
                 <h1 className='text-xl text-[#232323]'>10 Construction Drawings</h1>
            </div>
            <div className='flex items-center gap-2'>
                 <FcApproval/>
                 <h1 className='text-xl text-[#232323]'>Selection Materials</h1>
            </div>
            <div className='flex items-center gap-2'>
                 <FcApproval/>
                 <h1 className='text-xl text-[#232323]'>Unlimited Revision</h1>
            </div>
        </div>
        <div>
            <h1 className='text-3xl font-bold'><sup>$</sup>88 <sub>/mos</sub></h1>
        </div>
        <div>
            <button className='w-full py-5 rounded-md text-white font-medium text-xl bg-[#96BB7C]'>GET STARTED</button>
        </div>
    </div>
  )
}

export default Pricing