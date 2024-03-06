"use client"
import React from 'react'
import Navbar from '../../../../components/navbar'
import Footer from '../../../../components/footer'
import Image from 'next/image'
import Banner from "../../../../public/img/banner3.jpg"
import Profile from "../../../../public/img/logofix.png"
import GetVideo from "../../../../components/play"

function Hut() {
  return (
      <div className="bg-gray-200 w-screen min-h-screen overflow-x-hidden text-gray-600">
            <Navbar isGray={true} />
            <div className=' min-h-screen w-full mx-auto flex flex-col items-center space-y-3'>
              <div className="bg-gray-400 w-screen h-[450px]">
                  <Image alt="banner" src={Banner} width={400} height={400} className="w-full h-full object-cover" />
              </div>
              {/* title */}
              <div className='w-full h-[150px] py-2 bg-white'>
              <div className='flex flex-col space-y-2 w-[80vw] mx-auto'>
                  {/* date */}
                  <h3 className='text-sm font-light text-gray-500'>7 Maret 2024</h3>
                  {/* title */}
                  <h1 className='text-2xl font-semibold text-gray-500'>HUT PERPENKA 2024</h1>
                  {/* author */}
                  <div className='flex items-center justify-start space-x-2'>
                        <Image alt="profile" width={24} height={24} src={Profile} className="w-[36px] h-[36px]" />
                        <span className='text-gray-500 font-medium text-sm'>PERPENKA</span>

                  </div>

              </div>
              </div>
              <div className="py-12 w-full h-screen flex items-start justify-center">
                  <GetVideo />
              </div>
            </div>
      
      <Footer />  
    </div>
  )
}

export default Hut