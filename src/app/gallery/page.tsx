"use client"
import React, { useContext } from 'react'
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Image from 'next/image';
import Gal1 from "../../../public/img/gallery/gal1.jpg";
import Gal2 from "../../../public/img/gallery/gal2.jpg";
import Gal3 from "../../../public/img/gallery/gal3.jpg";
import Gal4 from "../../../public/img/gallery/gal4.jpg";
import Gal5 from "../../../public/img/gallery/gal5.jpg";
import Gal6 from "../../../public/img/gallery/gal6.jpg";
import Gal7 from "../../../public/img/gallery/gal7.jpg";
import Gal8 from "../../../public/img/gallery/gal8.jpg";
import Gal9 from "../../../public/img/gallery/gal9.jpg";
import Gal10 from "../../../public/img/gallery/gal10.jpg";
import Gal11 from "../../../public/img/gallery/gal11.jpg";
import { NewsContext } from '../../../context/NewsContext';

function Gallery() {
  const {fullGallery} = useContext(NewsContext)
      const data = [
        {
          imageLink:
            Gal1   
        },
        {
          imageLink:
            Gal2   
        },
        {
          imageLink:
            Gal3   
        },
        {
          imageLink:
            Gal4   
        },
        {
          imageLink:
            Gal5   
        },
        {
          imageLink:
            Gal6   
        },
        {
          imageLink:
            Gal7   
        },
        {
          imageLink:
            Gal8   
        },
        {
          imageLink:
            Gal9   
        },
        {
          imageLink:
            Gal10   
        },
        {
          imageLink:
            Gal11   
        },
        
      ];
     
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
                        {/* {fullGallery.map( fg => (
                              <div key={fg.id}>
                              <Image 
                              className="h-[240px] w-full max-w-full rounded-lg object-cover object-center"
                              src={fg.data.url}
                              alt="gallery-photo"
                              />
                              </div>
                        ))} */}
                        {data.map(({ imageLink }, index) => (
                              <div key={index}>
                              <Image 
                              className="h-[240px] w-full max-w-full rounded-lg object-cover object-center"
                              src={imageLink}
                              alt="gallery-photo"
                              width={200}
                              height={500}
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