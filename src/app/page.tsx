"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Card from "../../components/dashboardCard";
import Navbar from "../../components/navbar";

import { Swiper, SwiperSlide } from 'swiper/react';
import Calendar from 'react-calendar';

import { motion, useAnimation, Variants, useScroll } from "framer-motion"// React
import { inView } from "framer-motion"
import { useInView } from "react-intersection-observer";

// swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
//react calendar
import 'react-calendar/dist/Calendar.css';

import FeaturedImageGallery from "../../components/featuredImageGallery";
import Footer from "../../components/footer";
import AnimatedCounter from  "../../components/counter";
import WhatsApp from "../../components/whatsapp";
import Banner1 from "../../public/img/banner1.png"
import Banner2 from "../../public/img/banner5.jpg"
import Banner3 from "../../public/img/banner6.jpg"
import Logo from "../../public/img/logoBaru.jpg"

import { NewsContext } from "../../context/NewsContext";
import { useContext } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import GetVideo from "../../components/play";
import ImageGallery from "../../components/imageGallery";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {

  const {dashboardPost} = useContext(NewsContext);

  const exampleVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const control = useAnimation()
const [ref, inView] = useInView()
  const [value, onChange] = useState<Value>(new Date());
  const { scrollYProgress } = useScroll();
  const cardVariants: Variants = {
    offscreen: {
      x: -80
    },
    onscreen: {
      x: 0,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  const titleVariant1: Variants = {
    offscreen: {
      x: -80,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  const titleVariant2: Variants = {
    offscreen: {
      x: 80,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  return (
    <motion.div 
    
    className="bg-gray-100 w-screen min-h-screen overflow-x-hidden">
      {/* navbar */}
      <Navbar isGray={true} />
      {/* heading */}
      <div className="bg-gray-200 z-20 w-full h-screen relative m-0 p-0 overflow-x-hidden">
      <Swiper 
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="w-full h-full relative">
            <Image id="bannerImage" src={Banner1} alt="banner 1"  className="absolute top-0 left-0 z-40 w-full h-full object-cover" />
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full h-full relative">
            <Image id="bannerImage" src={Logo} alt="banner 1"  className="absolute top-0 left-0 z-40 w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full h-full relative">
            <Image id="bannerImage" src={Banner3} alt="banner 1"  className="absolute top-0 left-0 z-40 w-full h-full object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      {/* section 2  bg-[#ff7f00]*/}
      <div className="w-full flex py-[60px] flex-col bg-[#1c2d8c] ">
        <div className=" w-[80vw] mx-auto min-h-[80vh] lg:h-[80vh] flex flex-col space-y-8 lg:space-y-0 lg:flex-row items-center justify-between">
          <motion.div 
          // animate={{ x: 100 }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className="flex-[0.50] flex flex-col space-y-3">
            <h1 className="text-6xl font-bold text-gray-50 ">Tentang <span className="text-[#ff7f00]">PERPENKA</span></h1>
            <p className=" text-gray-50">Wadah untuk berhimpun bagi para pensiunan karyawan yang didasari sebagai bagian keluarga besar Kereta Api.</p>
            <div className="flex flex-col space-y-4">
              <div className="w-full h-1 rounded bg-gray-50 opacity-75"></div>
              <div className="flex items-center space-x-8">
                <div className="flex flex-col items-start justify-between h-[86px]">
                  <h1 className="text-3xl font-extrabold text-gray-50"><AnimatedCounter from={0} to={6781} /><span>+</span></h1>
                  <p className=" text-xs lg:text-[14px] font-light h-[30px] text-gray-50">anggota<br />31 des 2023</p>
                </div>
                <div className="flex flex-col items-start justify-between h-[86px] space-y-2">
                  <h1 className="text-3xl font-extrabold text-gray-50"><AnimatedCounter from={0} to={20} /><span>+</span></h1>
                  <p className=" text-xs lg:text-[14px] font-light h-[30px] text-gray-50">acara tahunan</p>
                </div>
                <div className="flex flex-col items-start justify-between h-[86px] space-y-2">
                  <h1 className="text-3xl font-extrabold text-gray-50"><AnimatedCounter from={0} to={14} /><span></span></h1>
                  <p className=" text-xs lg:text-[14px] font-light h-[30px] text-gray-50">daerah&pusat</p>
                </div>
              </div>

            </div>
          </motion.div>
          <div className="bg-gray-400 rounded-xl w-[240px] h-[240px]">
            <Image alt="logo" src={Logo} width={240} height={240} className="object-cover w-full h-full rounded-xl" />
          </div>
        </div>
      </div>
      {/* section */}
      <div className="w-[80vw] mx-auto flex flex-col space-y-8">
        {/* kegiatan pertama */}
        <div className="flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between w-full h-[65vh]">
          <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={titleVariant1}
          className="text-5xl flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">Menguatkan Hak Anggota</motion.h1>
          <motion.h3 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={titleVariant2}
          className="flex-[0.4] text-justify">
            Memastikan dan Memperjuangkan semua hak-hak Pensiunan Karyawan PT Kereta Api secara normatif sudah dipenuhi.</motion.h3>

        </div>
        {/* kegiatan kedua */}
        <div className="flex flex-col lg:flex-row space-y-8 items-end lg:items-center justify-between  lg:justify-between w-full p-4 bg-gray-300 h-[55vh]">
        <motion.h3 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={titleVariant1}
          className="flex-[0.4] text-justify">
            Meningkatkan kesejasteraan spriritual dan material anggota perkumpulan melalui pembinaan bidang kerohanian dan meningkatkan dana perkumpulan dari berbagai sumber perdanaan.
            </motion.h3>
          <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={titleVariant2}
          className="text-5xl flex-[0.2] text-end lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">Membangun Kehidupan Sejahtera</motion.h1>
          

        </div>
        {/* kegiatan ketiga */}
        <div className="flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center  lg:justify-between w-full h-[65vh]">
          <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={titleVariant1}
          className="text-5xl flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">Digitalisasi PERPENKA</motion.h1>
          <motion.h3 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={titleVariant2}
          className="flex-[0.4] text-justify">
            Mengusahakan semua Pensiunan Karyawan Kereta Api bergabung menjadi anggota PERPENKA dengan melakukan sosialisasi organisasi PERPENKA dan mempermudah proses pendaftaran melalui teknologi digital.  </motion.h3>

        </div>
      </div>
      
      {/* section 3 */}
      <div className="w-[80vw] mx-auto min-h-screen lg:h-screen flex flex-col space-y-4 items-center mt-10">
        <h1 className="text-4xl font-extrabold text-gray-600">LATEST NEWS</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 space-y-5 lg:space-y-0 lg:space-x-5 w-full h-[80%]">
          <Card post="Acara Hut PERPENKA ke-57" judul="HUT PERPENKA 2024" thumbs="hut" />
          <Card post="Halal Bihalal PERPENKA 2024" judul="Halal Bihalal PERPENKA 2024" thumbs="halalbihalal" />
          <Card post="Detail Kemeja PERPENKA" judul="Kemeja Baru PERPENKA" thumbs="kemeja" />
          {/* {dashboardPost.map(post => (
          <Card key={post.id} post={post.data.body} judul={post.data.title} thumbs="logo"  />
          ))} */}
        </div>
      </div>
      {/* section 5 */}
      <div className="w-full bg-[1c2d8c] bg-gradient-to-tr from-[#ff7f00] to-[#e9841e] py-10 my-10">
        <div className=" w-[80vw] mx-auto flex flex-col space-y-10 items-center">
          <h1 className="text-4xl font-extrabold text-gray-50">AGENDA</h1>
          <div className="flex items-start justify-center space-x-8 w-full ">
          <Calendar className={`flex-[0.4] text-gray-50 h-[400px] rounded-lg shadow-lg `} onChange={onChange} value={value} />
          <div className="flex-[0.55] flex flex-col space-y-8">
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-2 items-center">
                <div className="bg-blue-400 h-[35px] w-1 rounded "></div>
                <h1 className="text-2xl font-semibold text-gray-50">Maret</h1>
              </div>
              <p className="text-gray-50 ml-3 text-sm">HUT PERPENKA ke-57</p>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-2 items-center">
                <div className="bg-blue-400 h-[35px] w-1 rounded "></div>
                <h1 className="text-2xl font-semibold text-gray-50">Tanggal</h1>
              </div>
              <p className="text-gray-50 ml-3 text-sm">7 Maret 2024</p>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-2 items-center">
                <div className="bg-blue-400 h-[35px] w-1 rounded "></div>
                <h1 className="text-2xl font-semibold text-gray-50">Waktu</h1>
              </div>
              <p className="text-gray-50 ml-3 text-sm">00:00 AM</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="w-full flex flex-col items-center space-y-8 py-10">
        <h1 className="text-4xl font-extrabold text-gray-600">GALERI</h1>
        <ImageGallery />
      </div>
      
      {/* section 6 */}
      <div className="w-screen lg:w-[80vw] mx-auto mt-0 lg:mt-[80px] h-[90vh] lg:h-[42vh] bg-[#1c2d8c] flex flex-col lg:flex-row items-center space-x-6 space-y-9 justify-center">
        <GetVideo />
        <div className="flex flex-col space-y-3">
            <h1 className="text-2xl font-semibold text-gray-100">Profile PERPENKA</h1>
            <a href="/about" className="text-white bg-transparent border-2 border-gray-100 flex justify-center px-5 py-3 rounded-md"> learn more</a>
        </div>
      </div>
      {/*  */}
      {/* contact */}
      <WhatsApp />
      {/* footer */}
      <Footer />
    </motion.div>
  );
}