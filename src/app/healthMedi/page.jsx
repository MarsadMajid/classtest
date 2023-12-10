import React from 'react'
import ServiceCard from '../(components)/ServiceCard/serviceCard'
import Navbar from "../(components)/Navbar"
export default function HealthMedi() {
  return (
    <div>
      <Navbar/>
        <div className=' py-2 bg-grad  px-4 sm:py-0'>
        <div className='max-w-[1440px] mx-auto'>
          <h4 className=' flex items-center mt-8 justify-center text-4xl font-bold text-blue-600' >Our Professional Doctors</h4>
          <div className='grid grid-cols-1 lg:grid-cols-4  mt-0 space-y-6  py-6 sm:mt-20 max'>
          <p className='hidden'></p>
            {/* <div className=" py-[50px] "> */}
              <ServiceCard bg={'rgb(52, 211, 153)'} txt1={'DR.Ali'} bgColor1={'dark:bg-fuchsia-700'} imgss={"/Medical-chart-for-human-being-heart-on-transparent-PNG.png"} />
              <ServiceCard bg={'rgb(239, 68, 68)'}  txt1={'DR.Aqsa'} imgss={"/Medical-chart-for-human-being-heart-on-transparent-PNG.png"}/>
              <ServiceCard bg={'rgb(123, 63, 152)'} txt1={'Dr.Huzaifa '} imgss={"/Medical-chart-for-human-being-heart-on-transparent-PNG.png"}/>    
              <ServiceCard bg={'rgb(60, 63, 122)'} txt1={'Dr.Hammad'} imgss={"/Medical-chart-for-human-being-heart-on-transparent-PNG.png"}/> 
              {/* </div> */}
          </div>
          </div>
          </div>
    </div>
  )
}
