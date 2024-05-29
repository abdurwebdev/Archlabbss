"use client"
import Image from "next/image";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
import Counter from "./Components/Counter";
import UniqueOne from "./Components/UniqueOne";
import UniqueTwo from './Components/UniqueTwo';
import UniqueThree from "./Components/UniqueThree";
import UniqueFour from './Components/UniqueFour';
import UniqueFive from './Components/UniqueFive';
import Carosel from './Components/Carosel'
import Pricing from "./Components/Pricing";
import Pricing2 from './Components/Pricing2';
import Pricing3 from './Components/Pricing3';
import Blog from "./Components/Blog";
import Blog2 from './Components/Blog2';
import Blog3 from './Components/Blog3'
import Blog4 from './Components/Blog4'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const notify = () => toast.success("Your Message Has Been Sent!");
  const arcRef = useRef(null);
  const inputRef=useRef(null);
  const testRef=useRef(null);
  const priceRef = useRef(null);
  const blogRef = useRef(null);
  useEffect(() => {
    const gl=priceRef.current;
    gsap.fromTo(gl,{y:100},{y:0,scrollTrigger:{
      trigger:gl
    }})
  }, [])
  useEffect(() => {
    const ui=blogRef.current;
    gsap.fromTo(ui,{y:100},{y:0,scrollTrigger:{
      trigger:ui
    }})
  }, [])
  
  useEffect(() => {
      const bl=testRef.current;
      gsap.fromTo(bl,{y:50},{y:0,scrollTrigger:{
        trigger:bl
      }})
  }, [])
  
  useEffect(() => {
    const el=arcRef.current;
    gsap.fromTo(el,{y:100},{y:0,duration:1,scrollTrigger:{
      trigger:el
    }})
  }, [])
  useEffect(() => {
  const dl=inputRef.current;
  gsap.fromTo(dl,{y:100},{y:0,duration:1,scrollTrigger:
    {
      trigger:dl
    }
  })
  }, [])

  
  
  return (
   <>
  <Hero/>
  <Cards/>
  <div className="grid  px-10 md:px-16 grid-cols-1 md:mt-10  md:grid xl:grid xl:grid-cols-3 md:grid-cols-2  gap-9">
    <div>
      <img className="xl:h-[700px] md:h-[700px]" src="https://preview.colorlib.com/theme/archlab/images/about.jpg.webp" alt="" />
    </div>
    <div className="relative">
      <img className="h-[600px] md:h-[700px]" src="https://preview.colorlib.com/theme/archlab/images/about-2.jpg.webp" alt="" />
           <div className="absolute w-full xl:gap-6 p-10 gap-3 flex flex-col bg-[#96BB7C] h-[600px] md:h-[700px] xl:h-[700px] top-0 left-0 opacity-60 " ref={inputRef}>
                           <h1 className="text-xl text-white">BE PART OF OUR BUSINESS</h1>
                           <h1 className="font-bold text-4xl text-white">Request A Quote</h1>
                           <input type="text" className="bg-transparent  border-t-0  border-b-2 px-3 py-3 text-white border-l-0 border-r-0 placeholder-white focus:outline-none" placeholder="First Name " />
                           <input type="text" className="bg-transparent  border-t-0  border-b-2 px-3 py-3 text-white border-l-0 border-r-0 placeholder-white focus:outline-none" placeholder="Last Name " />
                           <input type="text" className="bg-transparent  border-t-0  border-b-2 px-3 py-3 text-white border-l-0 border-r-0 placeholder-white focus:outline-none" placeholder="Renovation " />
                           <input type="text" className="bg-transparent  border-t-0  border-b-2 px-3 py-3 text-white border-l-0 border-r-0 placeholder-white focus:outline-none" placeholder="Phone " />
                           <input type="text" className="bg-transparent  border-t-0  border-b-2 px-3 py-3 text-white border-l-0 border-r-0 placeholder-white focus:outline-none" placeholder="Message " />
                           <button onClick={notify} className="w-full  bg-[#ffffff]  text-black py-3 ">Request A Quote</button>
                           <ToastContainer/>
           </div>
    </div>
    <div ref={arcRef} className="md:order-first md:col-span-full xl:col-span-1">
      <h1 className="text-[#333333] xl:text-7xl font-mono xl:mt-0 xl:mb-10 text-5xl mb-6">ArchLab</h1>
      <p className="text-[#3635359a] text-lg tracking-wide">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br /> <br /> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
    </div>
  </div>
  <Counter/>
  <div className="flex flex-col gap-2 ">
    <h1 className="text-center text-xl font-semibold text-[#96BB7C]">PROJECTS</h1>
    <h1 className="text-center text-3xl md:text-7xl text-[#333333]">Our Unique Latest Projects</h1>
  </div>
  <div className="grid grid-cols-1 h-auto px-3  md:px-0">
    <div className=" h-[700px] xl:h-[900px] sm:h-[800px] md:h-[700px] ">
      <UniqueOne/>
    </div>
    <div className=" h-[700px] xl:h-[900px] md:h-[700px] sm:h-[800px]">
      <UniqueTwo/>
    </div>
    <div className=" h-[800px] xl:h-[900px] md:h-[700px] sm:h-[800px]">
    <UniqueThree/>
    </div>
    <div className=" h-[800px] xl:h-[900px] md:h-[700px] sm:h-[1000px]">
      <UniqueFour/>
    </div>
    <div className=" h-[900px] xl:h-[1000px] md:h-[700px] sm:h-[1200px] ">
      <UniqueFive/>
    </div>
  </div>
  <div className="bg-[#F8F9FA] w-full h-[700px] flex flex-col items-center justify-center">
    <div className="mt-20" ref={testRef}>
    <h1 className="font-bold text-5xl text-center text-[#96BB7C]">Testimonials</h1>
    <h1 className="font-bold text-5xl text-center">Happy Clients</h1>
    </div>
  
    <Carosel/>
    
  
    </div>

  <div className="flex flex-col m-auto" ref={priceRef}>
         <h1 className="text-[#BCD4AC] text-2xl text-center mt-36">PRICING</h1>
         <h1 className="text-[#171717] text-3xl text-center">Price & Plans</h1>
  </div>
  <div className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 grid grid-cols-1">
    <div>
      <Pricing/>
    </div>
    <div>
      <Pricing2/>
    </div>
    <div>
      <Pricing3/>
    </div>
  </div>
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
  </div>
   </>
  );
}
