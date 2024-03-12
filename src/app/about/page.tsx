"use client"
import React, { useContext, useRef, useState } from 'react';
import logoBaru from "../../../public/img/logoBaru.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import Image from 'next/image';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Logo from "../../../public/img/logo.jpg";
import Dpp from "../../../public/img/pengurus/dppF.jpg";
import Lambang from "../../../public/img/logofix.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
        
import Navbar from '../../../components/navbar'
import Footer from '../../../components/footer';
import { NewsContext } from '../../../context/NewsContext';


SwiperCore.use([Thumbs]);

export default function About() {
    const {strukturImage} = useContext(NewsContext)
    const {dppImage} = useContext(NewsContext)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    const [thumbsSwiperOne, setThumbsSwiperOne] = useState<SwiperCore | null>(null);

      
  return (
      <div className="bg-gray-100 w-screen min-h-screen overflow-x-hidden text-gray-600">
            <Navbar isGray={true} />
            <div className='w-full mx-auto flex flex-col space-y-12 mt-[110px]'>
                <div className='w-[80vw] mx-auto flex flex-col space-y-12'>
                  {/* heading */}
                  <div className='flex items-center space-x-3'>
                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                        <h1 className='text-gray-600 text-3xl font-extrabold'>PROFILE</h1>
                  </div>

                </div>
                  {/* body */}
                  <div className='w-full flex flex-col space-y-10'>

                    <div className=' w-[80vw] mx-auto flex flex-col space-y-12 '>
                        {/* sejarah */}
                        <div className='w-full flex flex-col space-y-3'>
                              <div className='flex items-center space-x-3 bg-gray-200 sm:w-full lg:w-[300px]'>
                                    <div className='w-1 h-[40px] rounded bg-orange-300'></div>
                                    <h1 className='text-gray-600 text-[24px] font-extrabold'>SEJARAH</h1>
                              </div>
                              <div className='w-full'>
                                    <p className='text-justify text-lg font-light'>
                                    PERPENKA merupakan singkatan, dimana pada awalnya adalah singkatan dari Persatuan Pensiunan Karyawan Kereta Api, karena nama organisasi ini tidak sesuai dengan aturan yang ditentukan pemerintah, maka pada tahun 2014 setelah Kongres XI Yogyakarta memilih Ketua Umum Definitif, yaitu Bapak Drs. H. Badar Zaenie, Singkatan PERPENKA diubah menjadi Perkumpulan Pensiunan Karyawan Kereta Api.</p>
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

                    </div>
                    {/* lambang dan logo */}
                    <div className="w-full flex flex-col">
                        {/* arti lambang */}
                        <div className="w-screen min-h-screen bg-gradient-to-tr flex flex-col space-y-6 py-10 from-orange-400 to-orange-500 ">
                            <div className='w-[80%] mx-auto flex items-center justify-between space-y-3'>
                                <Image alt="lambang" src={Lambang} width={250} height={250}  className='w-[240px] h-[240px]' />
                                <div className='flex items-center space-x-3 bg-gray-300 bg-opacity-65 sm:w-full lg:max-w-[300px]'>
                                        <div className='w-1 h-[40px] rounded bg-blue-600'></div>
                                        <h1 className='text-gray-600 text-[24px] font-extrabold'>ARTI LAMBANG</h1>
                                </div>
                            </div>
                            {/* body */}
                            <div className='w-[80%] mx-auto flex flex-col'>
                                {/* up */}
                                <div className='flex items-center justify-center w-full border-b-2 border-gray-600'>
                                    {/* left */}
                                    <div className='px-4 flex flex-[0.5] items-start justify-center border-r-2 py-4 border-gray-600'>
                                        <p className='text-align text-gray-100'>Lingkaran berwarna dasar abu-abu dengan tulisan PERKUMPULAN PENSIUNAN KARYAWAN KERETA API’ yang melingkar, melambangkan sebagai wadah berkumpul anggotanya yang terdiri dari para pensiunan karyawan kereta api yang berkeinginan hidup tenang, seimbang dan dinamis</p>
                                    </div>
                                    {/* right */}
                                    <div className=' px-4 flex flex-[0.5] items-start justify-center border-l-2 py-4 border-gray-600'>
                                        <p className='text-align text-gray-100'>
                                        Lingkaran berwarna dasar hijau dengan tulisan ‘Perpenka’, yang melintang ditengahnya, melambangkan bahwa Perpenka dapat menjadi kebanggaan para anggotanya, yang dapat saling membantu, berkomunikasi dan mampu memberikan suasana  gembira

                                        </p>
                                    </div>
                                </div>
                                {/* down */}
                                <div className='flex items-center justify-center w-full'>
                                    {/* left */}
                                    <div className='px-4 flex flex-[0.5] items-start justify-center border-r-2 py-4 border-gray-600'>
                                        <p className='text-align text-gray-100'>Garis tebal setengah lingkaran berwarna kuning melambangkan bahwa melalui wadah Perpenka, para pensiunan dapat saling memberikan rasa kehangatan dan rasa kebahagiaan
</p>
                                    </div>
                                    {/* right */}
                                    <div className=' px-4 flex flex-[0.5] items-start justify-center border-l-2 py-4 border-gray-600'>
                                        <p className='text-align text-gray-100'>
                                        Rangkaian 7 butir Padi dan 3 buah Kapas dan angka ‘67’ di bagian bawah lingkaran, melambangkan bahwa Perpenka telah berdiri sejak tanggal 7 Maret 1967, yang merupakan cita-cita guna meningkatkan kesejahteraan para pensiunan karyawan kereta api yang berlandaskan Pancasila
</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        {/* arti logo */}
                        <div className='w-full flex flex-col space-y-3 py-8 bg-blue-900'>
                            <div className='w-[80%] mx-auto'>
                                <div className='flex items-center space-x-3 bg-gray-300 bg-opacity-65 sm:w-full lg:max-w-[300px]'>
                                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                                        <h1 className='text-white text-[24px] font-extrabold'>ARTI LOGO</h1>
                                </div>
                            </div>
                              <div className='w-[80%] mx-auto flex flex-col lg:flex-row lg:justify-center space-y-4 items-center'>
                                <div className='flex-[0.5] flex flex-col items-start justify-center'>
                                    <Image alt="logo" width={240} height={240} src={logoBaru} className='w-[240px] h-[240px] object-cover' />
                                </div>
                                <div className='flex-[0.5] flex flex-col space-y-3'>
                                    <div className='w-full text-white'>
                                        <div className='flex items-center space-x-3'>
                                            <div className='w-1 h-[30px] rounded bg-blue-400'></div>
                                            <h1 className='text-white text-xl font-extrabold'>Bulat</h1>
                                        </div>
                                        <p className='ml-3 text-justify text-lg font-light'>
                                            Memberikan kesan yang dinamis, bergerak tidak terputus, Merajut Generasi Insan Kereta Api PERPENKA menjadi rumah para Pensiunan dalam Keluarga Besar Kereta Api <br />
                                        </p>
                                    </div>
                                    <div className='w-full text-white'>
                                        <div className='flex items-center space-x-3'>
                                            <div className='w-1 h-[30px] rounded bg-blue-400'></div>
                                            <h1 className='text-white text-xl font-extrabold'>Biru</h1>
                                        </div>
                                        <p className='ml-3 text-justify text-lg font-light'>
                                            Membawa kesan kreatif, bahagia, kebebasan, dan kepercayaan diri <br />
                                        </p>
                                    </div>
                                    <div className='w-full text-white'>
                                        <div className='flex items-center space-x-3'>
                                            <div className='w-1 h-[30px] rounded bg-blue-400'></div>
                                            <h1 className='text-white text-xl font-extrabold'>Orange</h1>
                                        </div>
                                        <p className='ml-3 text-justify text-lg font-light'>
                                            Memberikan kesan yang dinamis, bergerak Tidak terputus, Merajut Generasi Insan Kereta Api
                                            PERPENKA menjadi rumah para Pensiunan dalam Keluarga Besar Kereta Api <br />
                                        </p>
                                    </div>
                                    <div className='w-full text-white'>
                                        <div className='flex items-center space-x-3'>
                                            <div className='w-1 h-[30px] rounded bg-blue-400'></div>
                                            <h1 className='text-white text-xl font-extrabold'>Gambar Kereta Api Cepat</h1>
                                        </div>
                                        <p className='ml-3 text-justify text-lg font-light'>
                                            PERPENKA berpartisipasi aktif dalam pengembangan perkeretaapian dan berkolaborasi dalam keluarga besar kereta api yang selalu bergerak Dinamis dan Inovatif
                                        </p>
                                    </div>
                                </div>
                              </div>
                        </div>
                    </div>
                        {/* seragam */}
                        {/* struktur */}
                        <div className='min-h-screen w-[80%] mx-auto '>
                              <div className='flex items-center space-x-3 bg-gray-200 sm:w-full lg:w-[180px]'>
                                    <div className='w-1 h-[40px] rounded bg-orange-300'></div>
                                    <h1 className='text-gray-600 text-[24px] font-extrabold'>STRUKTUR</h1>
                              </div>
                              {/* xl */}
                              <div className="card w-full py-5 hidden lg:block ">
                                <Swiper
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        // spaceBetween={2}
                                        slidesPerView={8}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        {dppImage.map(dpp => (
                                            <SwiperSlide key={dpp.id}>
                                                <div className="uppercase rounded-l-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    {dpp.data.name}
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                        {strukturImage.map(si => (
                                            <SwiperSlide key={si.id}>
                                                <div className="uppercase cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    {si.data.name}
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                        {strukturImage.length === 0 && (
                                            <>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Jak
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Bd
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Cn
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Sm
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Pwt
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Yk
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Mn
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Sb
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Jr
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Mdn
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Pd
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Pg
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Tnk
                                                </div>
                                            </SwiperSlide>
                                            
                                            </>
                                        )}
                                        
                                </Swiper>
                                <Swiper
                                    loop={true}
                                    spaceBetween={10}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2 mt-3"
                                >
                                    {dppImage.map(dpp => (
                                        <SwiperSlide key={dpp.id}>
                                        <Image alt="set" width={600} height={500} className='w-full min-h-[500px] max-h-screen rounded-xl' src={dpp.data.url} />
                                        </SwiperSlide>

                                    ))}
                                    {strukturImage.map(si => (
                                        <SwiperSlide key={si.id}>
                                        <Image alt="set" width={600} height={500} className='w-full min-h-[500px] max-h-screen rounded-xl' src={si.data.url} />
                                        </SwiperSlide>

                                    ))}
                                    {strukturImage.length === 0 && (
                                        <>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] lg:h-[630px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] lg:h-[630px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] lg:h-[630px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] lg:h-[630px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] lg:h-[630px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] lg:h-[630px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] lg:h-[630px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        
                                        </>
                                    )}
                                </Swiper>
                                </div>

                                
                              {/* sm */}
                              <div className="card w-full py-5 block lg:hidden ">
                                <Swiper
                                        onSwiper={setThumbsSwiperOne}
                                        loop={true}
                                        // spaceBetween={2}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        {dppImage.map(dpp => (
                                            <SwiperSlide key={dpp.id}>
                                                <div className=" rounded-l-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    {dpp.data.name}
                                                </div>
                                            </SwiperSlide>

                                        ))}
                                        {strukturImage.map(si => (
                                            <SwiperSlide key={si.id}>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    {si.data.name}
                                                </div>
                                            </SwiperSlide>

                                        ))}
                                        {strukturImage.length === 0 && (
                                            <>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD 1 Jak
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD 2 Bd
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Cn
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Sm
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Pwt
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Yk
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Mn
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Sb
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Jr
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Mdn
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Pd
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Pg
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[20vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                    DPD Tnk
                                                </div>
                                            </SwiperSlide>
                                            </>
                                        )}
                                        
                                </Swiper>
                         
                                <Swiper
                                    loop={true}
                                    spaceBetween={10}
                                    // navigation={true}
                                    thumbs={{ swiper: thumbsSwiperOne }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2 mt-3"
                                >
                                    {dppImage.map(dpp => (
                                        <SwiperSlide key={dpp.id}>
                                        <Image alt="set" width={600} height={500} className='w-full min-h-[300px] max-h-screen rounded-xl' src={dpp.data.url} />
                                        </SwiperSlide>

                                    ))}
                                    {strukturImage.map(si => (
                                        <SwiperSlide key={si.id}>
                                        <Image alt="set" width={600} height={500} className='w-full min-h-[300px] max-h-screen rounded-xl' src={si.data.url} />
                                        </SwiperSlide>

                                    ))}
                                    {strukturImage.length === 0 && (
                                        <>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='w-full h-[360px] flex items-center justify-center text-gray-500 bg-gray-300'>
                                                Coming Soon...
                                            </div>
                                        </SwiperSlide>
                                        </>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                        </div>
                  </div>
                  <Footer />
            </div>
  )
}