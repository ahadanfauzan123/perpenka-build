"use client"
import React, { useRef, useState } from 'react';
import logoBaru from "../../../public/img/logoBaru.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Logo from "../../../public/img/logo.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
        
import Navbar from '../../../components/navbar'
import Footer from '../../../components/footer';


export default function About() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbsSwiperOne, setThumbsSwiperOne] = useState(null);

      
  return (
      <div className="bg-gray-100 w-screen min-h-screen overflow-x-hidden text-gray-600">
            <Navbar isGray={true} />
            <div className='w-[80vw] mx-auto flex flex-col space-y-12 mt-[110px]'>
                  {/* heading */}
                  <div className='flex items-center space-x-3'>
                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                        <h1 className='text-gray-600 text-3xl font-extrabold'>PROFILE</h1>
                  </div>
                  {/* body */}
                  <div className='w-full flex flex-col space-y-8'>
                        {/* sejarah */}
                        <div className='w-full flex flex-col space-y-3'>
                              <div className='flex items-center space-x-3 bg-gray-200 sm:w-full lg:w-[300px]'>
                                    <div className='w-1 h-[40px] rounded bg-orange-300'></div>
                                    <h1 className='text-gray-600 text-[24px] font-extrabold'>SEJARAH</h1>
                              </div>
                              <div className='w-full'>
                                    <p className='text-justify text-lg font-light'>
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsa atque distinctio rem illo, et aspernatur repellat eum itaque vero voluptatibus, quia voluptas eveniet ut inventore doloribus molestias nostrum deserunt ipsam laborum! Repellendus!
                                    </p>
                              </div>
                        </div>
                        {/* visi */}
                        <div className='w-full flex flex-col space-y-3'>
                              <div className='flex items-center space-x-3 bg-gray-200 sm:w-full lg:w-[300px]'>
                                    <div className='w-1 h-[40px] rounded bg-orange-300'></div>
                                    <h1 className='text-gray-600 text-[24px] font-extrabold'>VISI</h1>
                              </div>
                              <div className='w-full'>
                                    <p className='text-justify text-lg font-light'>
                                        <span className='font-semibold'>
                                            PERPENKA RUMAH KITA BERSAMA.&nbsp; 
                                        </span>
                                        Wadah untuk berhimpun bagi para pensiunan karyawan yang pernah bekerja di Perusahaan Kereta Api, yang didasari sebagai bagian keluarga besar Kereta Api  
                                        </p>
                              </div>
                        </div>
                        {/* misi */}
                        <div className='w-full flex flex-col space-y-3'>
                              <div className='flex items-center space-x-3 bg-gray-200 sm:w-full lg:w-[300px]'>
                                    <div className='w-1 h-[40px] rounded bg-orange-300'></div>
                                    <h1 className='text-gray-600 text-[24px] font-extrabold'>MISI</h1>
                              </div>
                              <div className='w-full'>
                                    <p className='text-justify text-lg font-light'>
                                    <span className='font-semibold'>
                                            MERAJUT GENERASI INSAN KERETA API.&nbsp;
                                        </span>
                                        Ungkapan tentang harapan dapat terus menjalin hubungan silaturahmi antara Senior dengan Juniornya sesama insan kereta api dalam berbagai hal, tak terbatas dalam hubungan sosial termasuk diantaranya berbagi pengetahuan - pengalaman sesuai dengan kompetensi yang  dimiliki PERPENKA
                        </p>
                              </div>
                        </div>
                        {/* misi */}
                        <div className='w-full flex flex-col space-y-3'>
                              <div className='flex items-center space-x-3 bg-gray-200 sm:w-full lg:max-w-[300px]'>
                                    <div className='w-1 h-[40px] rounded bg-orange-300'></div>
                                    <h1 className='text-gray-600 text-[24px] font-extrabold'>ARTI LAMBANG</h1>
                              </div>
                              <div className='w-full flex flex-col space-y-4 items-center'>
                                <div className='w-[200px] h-[200px] bg-gray-200'>
                                    <Image alt="logo" src={logoBaru} className='w-full h-full object-cover' />
                                </div>
                                <div className='w-full'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='w-1 h-[30px] rounded bg-blue-400'></div>
                                        <h1 className='text-gray-600 text-xl font-extrabold'>Bulat</h1>
                                    </div>
                                    <p className='ml-3 text-justify text-lg font-light'>
                                        Memberikan kesan yang dinamis, bergerak <br />
                                        Tidak terputus, Merajut Generasi Insan Kereta Api <br />
                                        PERPENKA menjadi rumah para Pensiunan dalam Keluarga Besar Kereta Api <br />
                                    </p>
                                </div>
                                <div className='w-full'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='w-1 h-[30px] rounded bg-blue-400'></div>
                                        <h1 className='text-gray-600 text-xl font-extrabold'>Biru</h1>
                                    </div>
                                    <p className='ml-3 text-justify text-lg font-light'>
                                        Membawa kesan kreatif, bahagia, kebebasan, dan kepercayaan diri <br />
                                    </p>
                                </div>
                                <div className='w-full'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='w-1 h-[30px] rounded bg-blue-400'></div>
                                        <h1 className='text-gray-600 text-xl font-extrabold'>Orange</h1>
                                    </div>
                                    <p className='ml-3 text-justify text-lg font-light'>
                                        Memberikan kesan yang dinamis, bergerak <br />
                                        Tidak terputus, Merajut Generasi Insan Kereta Api <br />
                                        PERPENKA menjadi rumah para Pensiunan dalam Keluarga Besar Kereta Api <br />
                                    </p>
                                </div>
                                <div className='w-full'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='w-1 h-[30px] rounded bg-blue-400'></div>
                                        <h1 className='text-gray-600 text-xl font-extrabold'>Gambar Kereta Api Cepat</h1>
                                    </div>
                                    <p className='ml-3 text-justify text-lg font-light'>
                                        PERPENKA berpartisipasi aktif dalam pengembangan perkeretaapian dan berkolaborasi dalam keluarga besar kereta api yang selalu bergerak Dinamis dan Inovatif
                                    </p>
                                </div>
                              </div>
                        </div>
                        {/* struktur */}
                        <div className='min-h-screen w-full '>
                              <div className='flex items-center space-x-3 bg-gray-200 sm:w-full lg:w-[180px]'>
                                    <div className='w-1 h-[40px] rounded bg-orange-300'></div>
                                    <h1 className='text-gray-600 text-[24px] font-extrabold'>STRUKTUR</h1>
                              </div>
                              {/* xl */}
                              <div className="card w-full py-5 hidden lg:block ">
                                <Swiper
                                        // onSwiper={setThumbsSwiper}
                                        loop={true}
                                        // spaceBetween={2}
                                        slidesPerView={8}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className=" rounded-l-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 1
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 2
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 3
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 4
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 5
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 6
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 7
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 8
                                            </div>
                                        </SwiperSlide>
                                        
                                </Swiper>
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
                                    <Image alt="set" width={600} height={500} className='w-full h-[400px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[400px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[400px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[400px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[400px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[400px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[400px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[400px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                </Swiper>
                                </div>
                              {/* sm */}
                              <div className="card w-full py-5 block lg:hidden ">
                                <Swiper
                                        onSwiper={() => setThumbsSwiperOne}
                                        loop={true}
                                        // spaceBetween={2}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className=" rounded-l-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 1
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 2
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 3
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 4
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 5
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 6
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 7
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 8
                                            </div>
                                        </SwiperSlide>
                                        
                                </Swiper>
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
                                    <Image alt="set" width={600} height={500} className='w-full h-[500px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[500px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[500px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[500px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[500px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[500px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[500px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Image alt="set" width={600} height={500} className='w-full h-[500px] max-h-screen rounded-xl' src={Logo} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        </div>
                  </div>
                  <Footer />
            </div>
  )
}