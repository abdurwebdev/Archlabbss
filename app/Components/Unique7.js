"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const UniqueOne = () => {
    const firstRef=useRef(null);
    useEffect(() => {
    const el=firstRef.current;
    gsap.fromTo(el,{y:100},{y:0,scrollTrigger:{
        trigger:el
    }})
    }, [])
  return (
    <div className='flex flex-col  p-8 gap-5 md:p-28 md:flex xl:p-44 md:flex-row md:gap-10 xl:gap-28  '>
        <div>
        <div>
              <img className='md:h-[600px] xl:w-[1000px] md:w-[1300px] object-cover xl:h-[800px]' src="https://preview.colorlib.com/theme/archlab/images/work-7.jpg.webp" alt="" />
        </div>
        </div>
        <div className='md:py-28 xl:py-28' ref={firstRef}>
         
        <div className='md:flex md:flex-col md:gap-0 '>
        <div>
            <h1 className='text-[#272626] font-medium  text-xl'>BUILDING 12/07/2020</h1>
        </div>
        <div>
            <h1 className='text-[#272626] font-medium py-5 text-5xl md:text-6xl'>Cultural Complex Centre</h1>
        </div>
        <div>
            <p className='text-[#777777] tracking-wider py-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        </div>
        <div>
            <Link href="#" className='py-10 text-[#9BBE83] tracking-wider font-medium'>VIEW PORTFOLIO</Link>
        </div>
        </div>
        </div>
    </div>
  )
}

export default UniqueOne