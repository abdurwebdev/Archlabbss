"use client"
import React from 'react'
import ThirsHeader from '../Components/ThirsHeader'
import Team from '../Components/Team';
import Team2 from '../Components/Team2';
import Team3 from '../Components/Team3';
import Team4 from '../Components/Team4';
import Team5 from '../Components/Team5';
import Team6 from '../Components/Team6';
import Team7 from '../Components/Team7';
import Team8 from '../Components/Team8';
const page = () => {
  return (
    <>
    <ThirsHeader/>
    <div className='w-full h-auto p-20 m-auto mb-20'>
      <div className='grid grid-cols-1 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 xl:grid xl:grid-cols-4  gap-y-32 gap-x-10'>
      <div className='sm:flex'>
                <Team/>
      </div>
      <div className='sm:flex'>
                <Team2/>
      </div>

      <div>
                <Team3/>
      </div>
      <div>
              <Team4/>  
      </div>
      <div>
              <Team5/>  
      </div>
      <div>
              <Team6/>  
      </div>
      <div>
              <Team7/>  
      </div>
      <div>
              <Team8/>  
      </div>
      </div>        
    </div>
    </>
  )
}

export default page