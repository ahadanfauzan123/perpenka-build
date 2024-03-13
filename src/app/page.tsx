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
import Banner2 from "../../public/img/fixbanner1.jpg"
import Banner3 from "../../public/img/banner6.jpg"
import Logo from "../../public/img/logoBaru.jpg"
import svg1 from "../../public/img/component/1.png"
import svg2 from "../../public/img/component/2.png"

import { NewsContext } from "../../context/NewsContext";
import { useContext } from "react";
import GetVideo from "../../components/play";
import ImageGallery from "../../components/imageGallery";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {

  const {dashboardPost} = useContext(NewsContext);
  const {bannerDashboard} = useContext(NewsContext);
  const {singleDataListAnggota} = useContext(NewsContext);

  const exampleVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const control = useAnimation()
const [ref, inView] = useInView()
  const [value, onChange] = useState<Value>(new Date());
  const { scrollYProgress } = useScroll();
  const {futureAgendas} = useContext(NewsContext)
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
          {bannerDashboard.map(bd => (
          <SwiperSlide key={bd.id}>
            <div className="w-full h-full relative">
              <Image width={500} height={500} id="bannerImage" src={bd.data.url} alt="banner"  className="absolute top-0 left-0 z-40 w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          ))}
        
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
            <p className=" text-gray-50">Wadah untuk berhimpun bagi para pensiunan karyawan yang pernah bekerja  di Perusahaan Kereta Api, yang didasari sebagai bagian keluarga besar Kereta Api</p>
            <div className="flex flex-col space-y-4">
              <div className="w-full h-1 rounded bg-gray-50 opacity-75"></div>
              <div className="flex items-center space-x-8">
              {singleDataListAnggota.map(sd => (
                <div key={sd.id} className="flex flex-col items-center justify-between h-[86px]">
                  <h1 className="text-3xl font-extrabold text-gray-50"><AnimatedCounter from={0} to={sd.data.jumlahAnggota} /></h1>
                  <p className=" text-xs lg:text-[14px] font-light h-[30px] text-center text-gray-50">Anggota<br /><span className="text-xs">per {sd.data.postedOn}</span></p>
                </div>
              ))}
                <div className="flex flex-col items-center justify-between h-[86px] space-y-2">
                  <h1 className="text-3xl font-extrabold text-gray-50"><AnimatedCounter from={0} to={20} /><span>+</span></h1>
                  <p className=" text-xs lg:text-[14px] font-light h-[30px] text-gray-50">Acara Tahunan</p>
                </div>
                <div className="flex flex-col items-center justify-between h-[86px] space-y-2">
                  <h1 className="text-3xl font-extrabold text-gray-50"><AnimatedCounter from={0} to={14} /><span></span></h1>
                  <p className=" text-xs lg:text-[14px] font-light h-[30px] text-gray-50">Pusat & Daerah</p>
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
      <div className="w-full flex flex-col space-y-8">
        {/* kegiatan pertama */}
        <div className="relative w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[65vh]">
          <Image alt="svg" src={svg1} width={100} height={100} className="absolute left-[50px] top-[40%]" />
          <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={titleVariant1}
          className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">Menguatkan Hak Anggota</motion.h1>
          <motion.h3 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={titleVariant2}
          className="flex-[0.4] z-20 text-justify text-lg">
            Memastikan dan Memperjuangkan semua hak-hak Pensiunan Karyawan PT Kereta Api secara normatif sudah dipenuhi.</motion.h3>

        </div>
        {/* kegiatan kedua */}
        <div className="w-screen bg-[#ff7f00]">
        <div className="relative flex flex-col lg:flex-row space-y-8 items-end lg:items-center justify-between lg:justify-between w-[80%] mx-auto left-0 p-6 h-[55vh]">
        <Image alt="svg" src={svg2} width={100} height={100} className="absolute right-[50px] top-[40%]" />
          
        <motion.h3 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={titleVariant2}
          className="flex-[0.4] z-20 text-justify text-lg text-white">
            Meningkatkan kesejasteraan spriritual dan material anggota perkumpulan melalui pembinaan bidang kerohanian dan meningkatkan dana perkumpulan dari berbagai sumber perdanaan.
            </motion.h3>
          <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={titleVariant1}
          className="text-5xl z-20 flex-[0.2] text-end lg:flex-[0.35] font-bold text-gray-200 leading-[50px]">Membangun Kehidupan Sejahtera</motion.h1>
          

        </div>
        </div>
        {/* kegiatan ketiga */}
        <div className="relative w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center  lg:justify-between h-[65vh]">
        <Image alt="svg" src={svg1} width={100} height={100} className="absolute left-[50px] top-[40%]" />
          <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={titleVariant1}
          className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">Digitalisasi PERPENKA</motion.h1>
          <motion.h3 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={titleVariant2}
          className="flex-[0.4] z-20 text-justify text-lg">
            Mengusahakan semua Pensiunan Karyawan Kereta Api bergabung menjadi anggota PERPENKA dengan melakukan sosialisasi organisasi PERPENKA dan mempermudah proses pendaftaran melalui teknologi digital.  </motion.h3>

        </div>
      </div>
      
      {/* section 3 */}
      <div className="w-[80vw] mx-auto min-h-screen lg:h-screen flex flex-col space-y-4 items-center mt-10">
        <h1 className="text-4xl font-extrabold text-gray-600">LATEST NEWS</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 space-y-5 lg:space-y-0 lg:space-x-5 w-full h-[80%]">
          {dashboardPost.map(post => (
          <Card key={post.id} redirect={post.id} gambar={post.data.bannerImage} post={post.data.brief} judul={post.data.title} />
          ))}
        </div>
      </div>
      {/* section 5 */}
      <div className="relative w-full bg-[1c2d8c] bg-gradient-to-tr from-[#ff7f00] to-[#e9841e] py-10 my-10">
        {/* svg 1 */}        
        <svg className="z-10 absolute right-5 top-7" width="67" height="77" viewBox="0 0 67 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M73.4999 6.53002C71.8799 6.53002 70.5599 5.21003 70.5599 3.59003C70.5599 1.97003 71.8799 0.650024 73.4999 0.650024C75.1199 0.650024 76.4399 1.97003 76.4399 3.59003C76.4399 5.22003 75.1199 6.53002 73.4999 6.53002ZM76.4399 21.18C76.4399 19.56 75.1199 18.24 73.4999 18.24C71.8799 18.24 70.5599 19.56 70.5599 21.18C70.5599 22.8 71.8799 24.12 73.4999 24.12C75.1199 24.12 76.4399 22.81 76.4399 21.18ZM76.4399 38.77C76.4399 37.15 75.1199 35.83 73.4999 35.83C71.8799 35.83 70.5599 37.15 70.5599 38.77C70.5599 40.39 71.8799 41.71 73.4999 41.71C75.1199 41.72 76.4399 40.4 76.4399 38.77ZM76.4399 56.37C76.4399 54.75 75.1199 53.43 73.4999 53.43C71.8799 53.43 70.5599 54.75 70.5599 56.37C70.5599 57.99 71.8799 59.31 73.4999 59.31C75.1199 59.31 76.4399 57.99 76.4399 56.37ZM76.4399 73.96C76.4399 72.34 75.1199 71.02 73.4999 71.02C71.8799 71.02 70.5599 72.34 70.5599 73.96C70.5599 75.58 71.8799 76.9 73.4999 76.9C75.1199 76.9 76.4399 75.58 76.4399 73.96ZM58.8499 3.59003C58.8499 1.97003 57.5299 0.650024 55.9099 0.650024C54.2899 0.650024 52.9699 1.97003 52.9699 3.59003C52.9699 5.21003 54.2899 6.53002 55.9099 6.53002C57.5299 6.53002 58.8499 5.22003 58.8499 3.59003ZM58.8499 21.18C58.8499 19.56 57.5299 18.24 55.9099 18.24C54.2899 18.24 52.9699 19.56 52.9699 21.18C52.9699 22.8 54.2899 24.12 55.9099 24.12C57.5299 24.12 58.8499 22.81 58.8499 21.18ZM58.8499 38.77C58.8499 37.15 57.5299 35.83 55.9099 35.83C54.2899 35.83 52.9699 37.15 52.9699 38.77C52.9699 40.39 54.2899 41.71 55.9099 41.71C57.5299 41.72 58.8499 40.4 58.8499 38.77ZM58.8499 56.37C58.8499 54.75 57.5299 53.43 55.9099 53.43C54.2899 53.43 52.9699 54.75 52.9699 56.37C52.9699 57.99 54.2899 59.31 55.9099 59.31C57.5299 59.31 58.8499 57.99 58.8499 56.37ZM58.8499 73.96C58.8499 72.34 57.5299 71.02 55.9099 71.02C54.2899 71.02 52.9699 72.34 52.9699 73.96C52.9699 75.58 54.2899 76.9 55.9099 76.9C57.5299 76.9 58.8499 75.58 58.8499 73.96ZM41.2499 3.59003C41.2499 1.97003 39.9299 0.650024 38.3099 0.650024C36.6899 0.650024 35.3699 1.97003 35.3699 3.59003C35.3699 5.21003 36.6899 6.53002 38.3099 6.53002C39.9399 6.53002 41.2499 5.22003 41.2499 3.59003ZM41.2499 21.18C41.2499 19.56 39.9299 18.24 38.3099 18.24C36.6899 18.24 35.3699 19.56 35.3699 21.18C35.3699 22.8 36.6899 24.12 38.3099 24.12C39.9399 24.12 41.2499 22.81 41.2499 21.18ZM41.2499 38.77C41.2499 37.15 39.9299 35.83 38.3099 35.83C36.6899 35.83 35.3699 37.15 35.3699 38.77C35.3699 40.39 36.6899 41.71 38.3099 41.71C39.9399 41.72 41.2499 40.4 41.2499 38.77ZM41.2499 56.37C41.2499 54.75 39.9299 53.43 38.3099 53.43C36.6899 53.43 35.3699 54.75 35.3699 56.37C35.3699 57.99 36.6899 59.31 38.3099 59.31C39.9399 59.31 41.2499 57.99 41.2499 56.37ZM41.2499 73.96C41.2499 72.34 39.9299 71.02 38.3099 71.02C36.6899 71.02 35.3699 72.34 35.3699 73.96C35.3699 75.58 36.6899 76.9 38.3099 76.9C39.9399 76.9 41.2499 75.58 41.2499 73.96ZM23.6599 3.59003C23.6599 1.97003 22.3399 0.650024 20.7199 0.650024C19.0999 0.650024 17.78 1.97003 17.78 3.59003C17.78 5.21003 19.0999 6.53002 20.7199 6.53002C22.3499 6.53002 23.6599 5.22003 23.6599 3.59003ZM23.6599 21.18C23.6599 19.56 22.3399 18.24 20.7199 18.24C19.0999 18.24 17.78 19.56 17.78 21.18C17.78 22.8 19.0999 24.12 20.7199 24.12C22.3499 24.12 23.6599 22.81 23.6599 21.18ZM23.6599 38.77C23.6599 37.15 22.3399 35.83 20.7199 35.83C19.0999 35.83 17.78 37.15 17.78 38.77C17.78 40.39 19.0999 41.71 20.7199 41.71C22.3499 41.72 23.6599 40.4 23.6599 38.77ZM23.6599 56.37C23.6599 54.75 22.3399 53.43 20.7199 53.43C19.0999 53.43 17.78 54.75 17.78 56.37C17.78 57.99 19.0999 59.31 20.7199 59.31C22.3499 59.31 23.6599 57.99 23.6599 56.37ZM23.6599 73.96C23.6599 72.34 22.3399 71.02 20.7199 71.02C19.0999 71.02 17.78 72.34 17.78 73.96C17.78 75.58 19.0999 76.9 20.7199 76.9C22.3499 76.9 23.6599 75.58 23.6599 73.96ZM6.06995 3.59003C6.06995 1.97003 4.74994 0.650024 3.12994 0.650024C1.50994 0.650024 0.189941 1.97003 0.189941 3.59003C0.189941 5.21003 1.50994 6.53002 3.12994 6.53002C4.74994 6.53002 6.06995 5.22003 6.06995 3.59003ZM6.06995 21.18C6.06995 19.56 4.74994 18.24 3.12994 18.24C1.50994 18.24 0.189941 19.56 0.189941 21.18C0.189941 22.8 1.50994 24.12 3.12994 24.12C4.74994 24.12 6.06995 22.81 6.06995 21.18ZM6.06995 38.77C6.06995 37.15 4.74994 35.83 3.12994 35.83C1.50994 35.83 0.189941 37.15 0.189941 38.77C0.189941 40.39 1.50994 41.71 3.12994 41.71C4.74994 41.71 6.06995 40.4 6.06995 38.77ZM6.06995 56.37C6.06995 54.75 4.74994 53.43 3.12994 53.43C1.50994 53.43 0.189941 54.75 0.189941 56.37C0.189941 57.99 1.50994 59.31 3.12994 59.31C4.74994 59.31 6.06995 57.99 6.06995 56.37ZM6.06995 73.96C6.06995 72.34 4.74994 71.02 3.12994 71.02C1.50994 71.02 0.189941 72.34 0.189941 73.96C0.189941 75.58 1.50994 76.9 3.12994 76.9C4.74994 76.9 6.06995 75.58 6.06995 73.96Z" fill="#244579"/>
        </svg>
        {/* svg 2 */}
        
<svg className="z-10 absolute bottom-6 right-[55px] scale-150" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.17017 23.17L22.7302 6.60999C19.7902 8.28999 17.0601 10.3 14.5901 12.58L12.1402 15.03C9.86017 17.5 7.85017 20.23 6.17017 23.17Z" fill="#FA1809"/>
<path d="M1.22998 36.33L35.89 1.66998C34.93 1.85998 33.99 2.08998 33.05 2.33998L1.89996 33.49C1.64996 34.43 1.41998 35.37 1.22998 36.33Z" fill="#FA1809"/>
<path d="M0.350098 45.14C0.350098 45.23 0.350098 45.33 0.350098 45.42L44.9801 0.799988C44.8901 0.799988 44.7901 0.799988 44.7001 0.799988C44.0501 0.799988 43.4101 0.819988 42.7801 0.839988L0.400085 43.22C0.370085 43.86 0.350098 44.5 0.350098 45.14Z" fill="#FA1809"/>
<path d="M1.04001 52.96L52.51 1.48998C51.89 1.37998 51.26 1.27998 50.64 1.19998L0.75 51.09C0.83 51.71 0.930009 52.34 1.04001 52.96Z" fill="#FA1809"/>
<path d="M2.72018 59.49L59.0402 3.16999C58.5002 2.97999 57.9502 2.80999 57.4002 2.64999L2.2002 57.85C2.3702 58.4 2.54018 58.95 2.72018 59.49Z" fill="#FA1809"/>
<path d="M5.16998 65.26L64.82 5.60999C64.34 5.36999 63.85 5.12999 63.36 4.89999L4.45996 63.8C4.68996 64.29 4.91998 64.78 5.16998 65.26Z" fill="#FA1809"/>
<path d="M8.25012 70.4L69.9601 8.68998C69.5301 8.38998 69.1001 8.09998 68.6601 7.81998L7.38013 69.1C7.66013 69.54 7.95012 69.97 8.25012 70.4Z" fill="#FA1809"/>
<path d="M11.8901 74.98L74.5301 12.34C74.1501 12 73.7701 11.66 73.3801 11.33L10.8801 73.83C11.2101 74.21 11.5501 74.6 11.8901 74.98Z" fill="#FA1809"/>
<path d="M16.0801 79.01L78.5702 16.52C78.2402 16.13 77.9002 15.74 77.5602 15.36L14.9202 78C15.3002 78.34 15.6801 78.68 16.0801 79.01Z" fill="#FA1809"/>
<path d="M20.8 82.5L82.06 21.24C81.78 20.8 81.49 20.37 81.19 19.94L19.5 81.64C19.93 81.93 20.36 82.22 20.8 82.5Z" fill="#FA1809"/>
<path d="M26.1101 85.41L84.9601 26.56C84.7301 26.07 84.5001 25.58 84.2501 25.1L24.6401 84.71C25.1301 84.95 25.6201 85.18 26.1101 85.41Z" fill="#FA1809"/>
<path d="M32.0802 87.66L87.2202 32.52C87.0602 31.97 86.8802 31.42 86.7002 30.88L30.4402 87.14C30.9802 87.33 31.5302 87.5 32.0802 87.66Z" fill="#FA1809"/>
<path d="M38.86 89.1L88.66 39.3C88.58 38.67 88.48 38.04 88.37 37.42L36.98 88.81C37.6 88.92 38.23 89.02 38.86 89.1Z" fill="#FA1809"/>
<path d="M44.7 89.49C45.39 89.49 46.07 89.47 46.74 89.44L88.99 47.19C89.02 46.51 89.04 45.83 89.04 45.15C89.04 45.09 89.04 45.04 89.04 44.98L44.53 89.49C44.58 89.48 44.64 89.49 44.7 89.49Z" fill="#FA1809"/>
<path d="M56.5002 87.89L87.4502 56.94C87.7102 56 87.9402 55.05 88.1402 54.09L53.6501 88.58C54.6101 88.38 55.5602 88.15 56.5002 87.89Z" fill="#FA1809"/>
<path d="M83.0602 67.38L66.9302 83.51C73.6102 79.63 79.1802 74.06 83.0602 67.38Z" fill="#FA1809"/>
</svg>


        <div className=" w-[80vw] mx-auto flex flex-col space-y-10 items-center">
          <h1 className="text-4xl font-extrabold text-gray-50">AGENDA</h1>
          <div className="flex z-20 flex-col space-y-4 lg:flex-row items-center lg:items-start justify-center space-x-8 w-full ">
          <Calendar className={` flex-[0.4] text-gray-500 h-[400px] rounded-lg shadow-lg `} onChange={onChange} value={value} />
          <div className="flex-1 lg:flex-[0.55] flex flex-col space-y-8">
            {futureAgendas.map(futureAgenda => (
              <div key={futureAgenda.id} className="sm:w-full lg:min-w-[400px] flex flex-col space-y-1 bg-white px-3 py-2 rounded-lg">
                <div className="flex space-x-2 items-center">
                  <div className="bg-blue-400 h-[35px] w-1 rounded "></div>
                  <h1 className="text-xl font-semibold text-gray-500">{futureAgenda.data.startDate} - {futureAgenda.data.DueDate}</h1>
                </div>
                <p className="text-gray-500 ml-3 text-lg">{futureAgenda.data.name}</p>
              </div>
            ))}
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
      <div className="w-screen mt-0 lg:mt-[80px] bg-[#ff7f00] flex flex-col items-center space-x-6 space-y-9 py-6 justify-center">
          <h1 className="text-3xl font-semibold text-gray-100">Profile PERPENKA</h1>
        <GetVideo url="https://youtu.be/73s0X8uiwbk" />
            <a href="/about" className="text-white bg-[#1c2d8c] px-8 py-3 rounded-3xl"> learn more</a>
      
      </div>
      {/*  */}
      {/* contact */}
      <WhatsApp />
      {/* footer */}
      <Footer />
    </motion.div>
  );
}