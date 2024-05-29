"use client"
import React from 'react'
import SeventhHeader from '../Components/SeventhHeader'
import { FcAbout, FcAcceptDatabase, FcPhoneAndroid, FcRefresh } from 'react-icons/fc'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const page = () => {
    const notify = ()=> toast.success("Message Successfully Sent!");
  return (
    <>
    <SeventhHeader/>
    <div className='w-[90%] m-auto bg-[#F8F9FA] p-10 xl:w-[60%] h-auto mt-16 mb-24 '>
        <div className='flex flex-col gap-10'>
            <input type="text" placeholder='Your Name' className='rounded-md py-5 px-3 placeholder:[#9EA4A9] border-[#9EA4A9] border-2' />
            <input type="text" placeholder='Your Email' className='rounded-md py-5 px-3 placeholder:[#9EA4A9] border-[#9EA4A9] border-2' />
            <input type="text" placeholder='Subject' className='rounded-md py-5 px-3 placeholder:[#9EA4A9] border-[#9EA4A9] border-2' />
             <textarea  id="" className='h-52 border-[#9EA4A9] border-2' placeholder='Message '></textarea>
             <button onClick={notify} className='px-4 text-white py-7 rounded-md bg-[#96BB7C] w-60'>Send Message</button>
             <ToastContainer/>
        </div>  
    </div>
    <h1 className='text-2xl tracking-wider text-center'>If you got any questions please do not hesitate to send us a message</h1>
    <div className='p-10 items-center w-[60%] m-auto  grid grid-cols-1 xl:grid xl:grid-cols-3  md:grid md:grid-cols-3 gap-11'>
       
         <div className='flex flex-col items-center justify-center'>
         <FcAbout className='text-6xl' />
        <h1 className='text-xl font-bold' >Address:</h1>
        <p className='text-[#6A6A6A] text-center text-xl tracking-wider'>198 West 21th Street, Suite 721 New York NY 10016</p>
         </div>
        <div className='flex flex-col items-center justify-center'>
            <FcAcceptDatabase className='text-6xl'/>
            <h1 className='text-xl font-bold'>Phone:</h1>
            <p className='text-[#6A6A6A] text-center text-xl tracking-wider'>+ 1235 2355 98</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <FcPhoneAndroid className='text-6xl'/>
            <h1 className='text-xl font-bold'>Email:</h1>
            <p className='text-[#6A6A6A] text-center text-xl tracking-wider'>info@yoursite.com</p>
        </div>
    </div>
    <div className='p-10 m-auto flex items-center justify-center xl:w-[60%] w-[90%] h-[60vh] mb-32 mt-32 bg-[#F8F9FA]'>
        <div className='flex flex-col items-center justify-center gap-8'>
            <FcRefresh className='text-6xl'/>
            <h1 className='text-2xl font-bold'>Oops! Something went wrong.</h1>
            <p className='text-center'>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
        </div>
    </div>
    </>
  )
}

export default page