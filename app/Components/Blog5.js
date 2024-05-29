"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { FcComments } from "react-icons/fc";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Blog = () => {
  const blogRef = useRef(null);
  useEffect(() => {
  const el=blogRef.current;
  gsap.fromTo(el,{y:50,opacity:0},{y:0,opacity:1,delay:0.1,scrollTrigger:{
    trigger:el
  }})
  }, [])
  
  return (
    <div className='p-10 flex flex-col space-y-7' ref={blogRef}>
        <div>
            <img src="https://preview.colorlib.com/theme/archlab/images/image_5.jpg.webp" className='w-full h-72 object-cover'/>
        </div>
        <div className='flex items-center gap-3'>
            <Link href="#" className='text-[#C4C4C4] hover:transition-colors hover:text-[#000000] font-normal'>JUNE 01, 2020</Link>
            <Link href="#" className='text-[#C4C4C4] hover:transition-colors hover:text-[#000000] font-normal'>ADMIN</Link>
            <FcComments/>
            <Link href="#" className='text-[#C4C4C4] hover:transition-colors hover:text-[#000000] font-normal'>3</Link>
        </div>
        <div>
            <Link href="#" className='text-black text-2xl font-normal'>Make Peace With Your Broken Pieces</Link>
        </div>
    </div>
  )
}

export default Blog