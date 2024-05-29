"use client"
import Link from 'next/link'
import React from 'react'
import { FcDownRight} from 'react-icons/fc'
import { AiFillHome } from "react-icons/ai";

const SecHeader = () => {
  return (
    <div className='relative'>
        <div>
            <img className='h-[650px] object-cover' src="https://preview.colorlib.com/theme/archlab/images/bg_2.jpg.webp" alt="" />
            <div className='flex flex-col absolute top-[500px] md:top-[450px] xl:top-[450px] p-10 left-0 '>
                <div className='flex items-center gap-2 '>
                <Link href="/" className='text-[#2a2a2a] hover:transition-colors hover:text-[#96BB7C]'>HOME</Link>
                <AiFillHome/>
                <h1 className='text-[#2a2a2a]'>ABOUT US</h1>
                <FcDownRight/>
                </div>
                <div>
                    <h1 className='xl:text-7xl text-5xl font-normal text-black'>About Us</h1>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SecHeader