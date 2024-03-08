"use client"
import React, { useContext } from 'react'
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Image from 'next/image';
import { NewsContext } from '../../../context/NewsContext';

function Gallery() {
  const {fullGallery} = useContext(NewsContext)
     
      return (
            <div className='bg-gray-100 w-screen min-h-screen overflow-x-hidden text-gray-600'>
                  <Navbar isGray={true} />
                  <div className='w-[80vw] mx-auto flex flex-col space-y-12 mt-[110px]'>
                        {/* heading */}
                        <div className='flex items-center space-x-3'>
                              <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                              <h1 className='text-gray-600 text-3xl font-extrabold'>GALLERY</h1>
                        </div>
                        {/* body */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {fullGallery.map( fg => (
                              <div key={fg.id}>
                              <Image 
                              className="h-[240px] w-full max-w-full rounded-lg object-cover object-center"
                              src={fg.data.url}
                              alt="gallery-photo"
                              width={300}
                              height={240}
                              />
                              </div>
                        ))}
                        </div>
                  </div>
                  <Footer />
            </div>
      );
    }
     

export default Gallery