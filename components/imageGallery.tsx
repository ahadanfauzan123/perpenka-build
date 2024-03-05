"use client"
import React, { useState } from 'react'
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
import Gallery1 from '../public/img/banner6.jpg'
SwiperCore.use([Thumbs]);
function ImageGallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
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
                                    <SwiperSlide>
                                          <div className='w-full h-full bg-red-400 rounded-xl'>
                                                <Image alt="set" width={600} height={450} className='w-full h-full rounded-xl' src={Gallery1} />
                                          </div>
                                    
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className='w-full h-full bg-blue-400 rounded-xl'>
                                                </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className='w-full h-full bg-blue-400 rounded-xl'>
                                                </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className='w-full h-full bg-blue-400 rounded-xl'>
                                                </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <div className='w-full h-full bg-blue-400 rounded-xl'>
                                                </div>
                                    </SwiperSlide>
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
                                        <SwiperSlide>
                                            <div className=" cursor-pointer rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[12vw] h-[56px] shadow-sm shadow-gray-400 flex items-center justify-center">
                                                <Image alt="set" width={600} height={500} className='w-full h-full rounded-lg object-cover' src={Gallery1} />
                                    
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[12vw] h-[56px] shadow-sm shadow-gray-400 flex items-center justify-center">
                                                <Image alt="set" width={600} height={500} className='w-full h-full rounded-lg object-cover' src={Logo} />
                                    
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[12vw] h-[56px] shadow-sm shadow-gray-400 flex items-center justify-center">
                                                <Image alt="set" width={600} height={500} className='w-full h-full rounded-lg object-cover' src={Logo} />
                                    
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[12vw] h-[56px] shadow-sm shadow-gray-400 flex items-center justify-center">
                                                <Image alt="set" width={600} height={500} className='w-full h-full rounded-lg object-cover' src={Logo} />
                                    
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[12vw] h-[56px] shadow-sm shadow-gray-400 flex items-center justify-center">
                                                <Image alt="set" width={600} height={500} className='w-full h-full rounded-lg object-cover' src={Logo} />
                                    
                                            </div>
                                        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ImageGallery