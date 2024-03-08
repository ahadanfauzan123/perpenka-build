"use client"
import React, { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import Logo from '../public/img/logofix.png'
import Gallery1 from '../public/img/gallery/gal2.jpg'
import Gallery2 from '../public/img/gallery/gal6.jpg'
import Gallery3 from '../public/img/gallery/gal3.jpg'
import Gallery4 from '../public/img/gallery/gal4.jpg'
import Gallery5 from '../public/img/gallery/gal7.jpg'
import { NewsContext } from '../context/NewsContext';
SwiperCore.use([Thumbs]);
function ImageGallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    const {galleryDashboard} = useContext(NewsContext)
  return (
    <div className=' w-[80vw] mx-auto flex flex-col space-y-4'>
      <Swiper
                                    // style={{
                                    // '--swiper-navigation-color': '#fff',
                                    // '--swiper-pagination-color': '#fff',
                                    // }}
                                    loop={true}
                                    spaceBetween={10}
                                    // navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2 mt-3"
                                >
            
            {galleryDashboard.map(gd => (
                <SwiperSlide key={gd.id}>
                    <div className='w-full h-[340px] lg:h-[550px] bg-gray-400 rounded-xl'>
                        <Image alt="set" width={600} height={450} className='object-cover w-full h-full rounded-xl' src={gd.data.url} />
                    </div>
                </SwiperSlide>

            ))}
      </Swiper>
      <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={3}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
      >
        {galleryDashboard.map(gd => (
            <SwiperSlide key={gd.id}>
                 <div className=" cursor-pointer rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[12vw] h-[56px] shadow-sm shadow-gray-400 flex items-center justify-center">
                    <Image alt="set" width={600} height={500} className='w-full h-full rounded-lg object-cover' src={gd.data.url} />       
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageGallery