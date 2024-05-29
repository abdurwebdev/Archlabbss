"use client"
import React, { useEffect, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Carosel = () => {
    const slideRef = useRef(null);
    useEffect(() => {
        const el=slideRef.current;
        gsap.fromTo(el,{y:100},{y:0,scrollTrigger:
            {
                trigger:el
            }
        })

    }, [])
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='overflow-hidden w-96 m-auto  xl:block' ref={slideRef}>
        <div>
            <Slider {...settings} >
            {data.map((d,index)=>(
                <div key={index} className='bg-white p-5'>
                    <div className='text-[#96BB7C] text-5xl'>
                    {d.quote}
                    </div>
                <div>
                    <p className='text-[#6A6A6A] tracking-wider'>{d.para}</p>
                     <div className='flex items-center gap-4 justify-start'>
                        <div className='mt-5'>
                            <img src={d.img} className='w-20 h-20 rounded-full' />
                        </div>
                        <div>
                            <h1 className='text-[#323232] text-2xl'>{d.pone}</h1>
                            <h1 className='text-[#6A6A6A]'>{d.ptwo}</h1>
                        </div>
                     </div>
                </div>
                </div>
            ))}
            </Slider>
        </div>
    </div>
    
  )
}
const data=[
    {
        quote:`"`,
        para:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.`,
        img:`https://preview.colorlib.com/theme/archlab/images/person_1.jpg.webp`,
        pone:`Roger Scott`,
        ptwo:`Marketing Manager`
    },
    {
        quote:`"`,
        para:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.`,
        img:`https://preview.colorlib.com/theme/archlab/images/person_1.jpg.webp`,
        pone:`Roger Scott`,
        ptwo:`Marketing Manager`
    },
    {
        quote:`"`,
        para:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.`,
        img:`https://preview.colorlib.com/theme/archlab/images/person_1.jpg.webp`,
        pone:`Roger Scott`,
        ptwo:`Marketing Manager`
    },
    {
        quote:`"`,
        para:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.`,
        img:`https://preview.colorlib.com/theme/archlab/images/person_1.jpg.webp`,
        pone:`Roger Scott`,
        ptwo:`Marketing Manager`
    },
    {
        quote:`"`,
        para:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.`,
        img:`https://preview.colorlib.com/theme/archlab/images/person_1.jpg.webp`,
        pone:`Roger Scott`,
        ptwo:`Marketing Manager`
    },
    {
        quote:`"`,
        para:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.`,
        img:`https://preview.colorlib.com/theme/archlab/images/person_1.jpg.webp`,
        pone:`Roger Scott`,
        ptwo:`Marketing Manager`
    },
    {
        quote:`"`,
        para:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.`,
        img:`https://preview.colorlib.com/theme/archlab/images/person_1.jpg.webp`,
        pone:`Roger Scott`,
        ptwo:`Marketing Manager`
    },
    {
        quote:`"`,
        para:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.`,
        img:`https://preview.colorlib.com/theme/archlab/images/person_1.jpg.webp`,
        pone:`Roger Scott`,
        ptwo:`Marketing Manager`
    },
    {
        quote:`"`,
        para:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.`,
        img:`https://preview.colorlib.com/theme/archlab/images/person_1.jpg.webp`,
        pone:`Roger Scott`,
        ptwo:`Marketing Manager`
    },
    {
        quote:`"`,
        para:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.`,
        img:`https://preview.colorlib.com/theme/archlab/images/person_1.jpg.webp`,
        pone:`Roger Scott`,
        ptwo:`Marketing Manager`
    },
    {
        quote:`"`,
        para:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.`,
        img:`https://preview.colorlib.com/theme/archlab/images/person_1.jpg.webp`,
        pone:`Roger Scott`,
        ptwo:`Marketing Manager`
    },
    {
        quote:`"`,
        para:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.`,
        img:`https://preview.colorlib.com/theme/archlab/images/person_1.jpg.webp`,
        pone:`Roger Scott`,
        ptwo:`Marketing Manager`
    }
]
export default Carosel