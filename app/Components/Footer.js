"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { AiFillFacebook, AiFillInstagram, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FcCellPhone, FcDownRight, FcVoicemail } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
    const twitterRef = useRef(null)
    useEffect(() => {
     const el=twitterRef.current;
     gsap.fromTo(el,{y:50,opacity:0},{y:0,opacity:1,scrollTrigger:{
        trigger:el
     }})
    }, [])
    const facebookRef = useRef(null)
    useEffect(() => {
     const el=facebookRef.current;
     gsap.fromTo(el,{y:50,opacity:0},{y:0,opacity:1,delay:0.1,scrollTrigger:{
        trigger:el
     }})
    }, [])
    const instagramRef = useRef(null)
    useEffect(() => {
     const el=instagramRef.current;
     gsap.fromTo(el,{y:50,opacity:0},{y:0,opacity:1,delay:0.3,scrollTrigger:{
        trigger:el
     }})
    }, [])
  return (
    <div className='w-full h-auto bg-[#0F101C]'>
    <div className='grid grid-cols-1 p-10 md:grid md:grid-cols-4 '>
            <div>
                <div className='flex space-y-5 flex-col mt-20 md:mt-9 text-white'>
                <h1 className='text-white text-3xl font-bold'>ArchLab.</h1>
                <p className='text-[#8D8E93] text-normal tracking-wide'>Far far away, behind the word mountains, far from the <br /> countries.</p>
                <div className='flex gap-5'>
                <button className='px-3 py-3 text-xl text-[#8D8E93] rounded-full bg-[#1B1C28]' ref={twitterRef}>
                <AiOutlineTwitter/>
                </button>
                <button className='px-3 py-3 text-xl text-[#8D8E93] rounded-full bg-[#1B1C28]' ref={facebookRef}>
                <AiFillFacebook/>
                </button>
                <button className='px-3 py-3 text-xl text-[#8D8E93] rounded-full bg-[#1B1C28]' ref={instagramRef}>
                <AiFillInstagram/>
                </button>
                
                </div>
               
                </div>
                
            </div>
            <div>
                <div className='flex flex-col space-y-3'>
                       <div className='mb-10 mt-10'>
                        <h1 className='text-xl font-bold text-white'>Community</h1>
                       </div>
                       <div className='flex items-center gap-3'>
                           <FcDownRight/>
                           <Link href="#" className='text-[#8D8E93] font-normal'>Projects</Link>
                       </div>
                       <div className='flex items-center gap-3'>
                           <FcDownRight/>
                           <Link href="#" className='text-[#8D8E93] font-normal'>Team</Link>
                       </div>
                       <div className='flex items-center gap-3'>
                           <FcDownRight/>
                           <Link href="#" className='text-[#8D8E93] font-normal'>Reviews</Link>
                       </div>
                       <div className='flex items-center gap-3'>
                           <FcDownRight/>
                           <Link href="#" className='text-[#8D8E93] font-normal'>FAQs</Link>
                       </div>
                </div>
            </div>

            <div>
                <div className='flex flex-col space-y-3'>
                       <div className='mb-10 mt-10'>
                        <h1 className='text-xl font-bold text-white'>About Us</h1>
                       </div>
                       <div className='flex items-center gap-3'>
                           <FcDownRight/>
                           <Link href="#" className='text-[#8D8E93] font-normal'>Our Story</Link>
                       </div>
                       <div className='flex items-center gap-3'>
                           <FcDownRight/>
                           <Link href="#" className='text-[#8D8E93] font-normal'>Meet the team</Link>
                       </div>
                       <div className='flex items-center gap-3'>
                           <FcDownRight/>
                           <Link href="#" className='text-[#8D8E93] font-normal'>Careers</Link>
                       </div>
                       
                </div>
            </div>

            <div>
                <div className='flex flex-col space-y-3'>
                       <div className='mb-10 mt-10'>
                        <h1 className='text-xl font-bold text-white'>Company</h1>
                       </div>
                       <div className='flex items-center gap-3'>
                           <FcDownRight/>
                           <Link href="#" className='text-[#8D8E93] font-normal'>About Us</Link>
                       </div>
                       <div className='flex items-center gap-3'>
                           <FcDownRight/>
                           <Link href="#" className='text-[#8D8E93] font-normal'>Press</Link>
                       </div>
                       <div className='flex items-center gap-3'>
                           <FcDownRight/>
                           <Link href="#" className='text-[#8D8E93] font-normal'>Contact</Link>
                       </div>
                       <div className='flex items-center gap-3'>
                           <FcDownRight/>
                           <Link href="#" className='text-[#8D8E93] font-normal'>Careers</Link>
                       </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col '>
                <div className='mb-10 mt-10'>
                        <h1 className='text-xl font-bold text-white'>Have a Questions?</h1>
                       </div>
                    <div className='flex flex-col space-y-4'>
                             <div className='flex items-center gap-4'>
                                 <FcMindMap/>
                                 <h1 className='text-[#8D8E93] font-normal'>	203 Fake St. Mountain View, San Francisco, California, USA</h1>
                             </div>
                             <div className='flex items-center gap-4'>
                                  <FcCellPhone/>
                                  <h1 className='text-[#8D8E93] font-normal'>	+2 392 3929 210</h1>
                             </div>
                             <div className='flex items-center gap-4'>
                                  <FcVoicemail/>
                                  <h1 className='text-[#8D8E93] font-normal'>	info@yourdomain.com</h1>
                            </div>
                    </div>
                </div>
            </div>
            
    </div>
    <div className='m-auto mt-10'>
                     <h1 className='text-[#8D8E93] font-normal text-center'>Copyright ©2024 All rights reserved | This template is made with ❤ by Colorlib</h1>
            </div>
    </div>
  )
}

export default Footer