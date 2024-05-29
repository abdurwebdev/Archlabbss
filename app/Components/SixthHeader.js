"use client"
import Link from 'next/link'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FcAbout, FcAddRow, FcAlphabeticalSortingAz } from 'react-icons/fc'

const ThirsHeader = () => {
  return (
    <div className='relative '>
        <img className='w-full h-[600px] object-cover' src="https://preview.colorlib.com/theme/archlab/images/bg_2.jpg.webp" alt="" />
       <div className='w-96 h-60  absolute top-96 p-10 '>
        <div className='flex items-center gap-3'>
        <Link href="/About" className='text-[#2a2a2a] text-xl  hover:transition-colors hover:text-[#96BB7C]'>HOME</Link>
        <AiFillHome/>
        <h1 className='text-xl text-[#2a2a2a] '>BLOGS</h1>
        <FcAlphabeticalSortingAz/>
        </div>
        <h1 className='text-7xl text-black '>Blogs</h1>
      
       
       </div>
       
    </div>
  )
}

export default ThirsHeader