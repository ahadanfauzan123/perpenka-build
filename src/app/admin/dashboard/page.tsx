"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import Sidebar from '../../../../components/admin/sidebar'
import Topbar from '../../../../components/admin/topbar'

import { NewsContext } from "../../../../context/NewsContext";
import { useContext } from "react"
import Table from '../../../../components/admin/tableUser'
// import ReactGA from "react-ga4";
import { sendGAEvent } from '@next/third-parties/google'
import { useAuthState } from 'react-firebase-hooks/auth'
import { redirect, useRouter } from 'next/navigation'
import { auth } from '../../../../firebase'
import { FiUsers } from "react-icons/fi";
import { MdOutlineEventNote,MdOutlinePlace } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link'
// import GoogleAnalytics from '../../../../components/admin/GoogleAnalytics'


function AdminDashboard() {
  const {singleDataListAnggota} = useContext(NewsContext)
  
  
  
  // ReactGA.initialize("G-FQ6V4E5T2S");
  // ReactGA.send({ hitType: "pageview", page: window.location.pathname, });

  // console.log(users)
  return (
    <div className='w-screen min-h-screen bg-blue-200 flex text-gray-600'>
      {/* sidebar */}
      <Sidebar />
      <div className="w-[80%] min-h-screen ml-auto flex flex-col ">
            {/* topbar */}
            <Topbar />
            {/* body */}
            <div className='mt-[120px] min-h-[calc(100vh-90px)] w-full '>
            <div className='flex items-center space-x-3 m-6'>
                      <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                      <h1 className='text-gray-600 text-3xl font-extrabold'>Dashboard</h1>
                  </div>
            <div className='bg-theme'>
        <div className='text-color grid grid-cols-4mobile:gid-cols-1 bg-transparent w-full max-w-6xl mx-auto p-5'>
            <div className='col-span-4 p-3 flex flex-col gap-y-8'>
                {/* cards */}
                <div className="m-6">
    <div className="flex flex-wrap -mx-6">
        <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                    <FiUsers className="text-3xl text-gray-100" />
                </div>
                {singleDataListAnggota.map(sd => (
                  <div key={sd.id} className="mx-5">
                      <h4 className="text-2xl font-semibold text-gray-700">{sd.data.jumlahAnggota}</h4>
                      <div className="text-gray-500">Anggota</div>
                  </div>

                ))}
            </div>
        </div>

        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
                <MdOutlineEventNote className="text-3xl text-gray-100" />
                </div>

                <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">20</h4>
                    <div className="text-gray-500">Acara/Tahun</div>
                </div>
            </div>
        </div>

        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
                <MdOutlinePlace className="text-3xl text-gray-100" />
                </div>

                <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">14</h4>
                    <div className="text-gray-500">Pusat & Cabang</div>
                </div>
            </div>
        </div>
    </div>
</div>
                <div className=' w-full flex flex-col space-y-6'>
                  <div className='flex items-center space-x-3'>
                      <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                      <h1 className='text-gray-600 text-3xl font-extrabold'>ShortCut</h1>
                  </div>
                  {/* body */}
                  <div className="flex-1 flex items-start justify-between w-[80%] mx-auto">
                    {/* left */}
                    <div className="flex-[0.48] w-[48%] h-screen flex flex-col space-y-3">
                      <Link href={"/admin/dashboard"} className="hover:bg-gray-100 bg-white rounded-lg px-4 py-2 w-full flex items-center">
                        <div className="flex-1 flex flex-col space-y-2">
                          <h1>DashBoard</h1>
                          <pre>/admin/dashboard/</pre>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end">
                        <FaArrowRight className="text-lg text-gray-500" />
                        </div>
                      </Link>
                      <Link href={"/admin/users"} className="hover:bg-gray-100 bg-white rounded-lg px-4 py-2 w-full flex items-center">
                        <div className="flex-1 flex flex-col space-y-2">
                          <h1>Data Anggota</h1>
                          <pre>/admin/users/</pre>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end">
                        <FaArrowRight className="text-lg text-gray-500" />
                        </div>
                      </Link>
                      <Link href={"/admin/news"} className="hover:bg-gray-100 bg-white rounded-lg px-4 py-2 w-full flex items-center">
                        <div className="flex-1 flex flex-col space-y-2">
                          <h1>Data Berita</h1>
                          <pre>/admin/news/</pre>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end">
                        <FaArrowRight className="text-lg text-gray-500" />
                        </div>
                      </Link>
                      <Link href={"/admin/agenda/data"} className="hover:bg-gray-100 bg-white rounded-lg px-4 py-2 w-full flex items-center">
                        <div className="flex-1 flex flex-col space-y-2">
                          <h1>Data Agenda</h1>
                          <pre>/admin/agenda/data</pre>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end">
                        <FaArrowRight className="text-lg text-gray-500" />
                        </div>
                      </Link>
                    </div>
                    {/* right */}
                    <div className="flex-[0.48] w-[48%] h-screen flex flex-col space-y-3">
                      <Link href={"/admin/galeri"} className="hover:bg-gray-100 bg-white rounded-lg px-4 py-2 w-full flex items-center">
                        <div className="flex-1 flex flex-col space-y-2">
                          <h1>Data Galeri</h1>
                          <pre>/admin/galeri/</pre>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end">
                        <FaArrowRight className="text-lg text-gray-500" />
                        </div>
                      </Link>
                      <Link href={"/admin/news/add"} className="hover:bg-gray-100 bg-white rounded-lg px-4 py-2 w-full flex items-center">
                        <div className="flex-1 flex flex-col space-y-2">
                          <h1>Tambah Berita</h1>
                          <pre>/admin/news/add</pre>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end">
                        <FaArrowRight className="text-lg text-gray-500" />
                        </div>
                      </Link>
                      <Link href={"/admin/agenda"} className="hover:bg-gray-100 bg-white rounded-lg px-4 py-2 w-full flex items-center">
                        <div className="flex-1 flex flex-col space-y-2">
                          <h1>Tambah Agenda</h1>
                          <pre>/admin/fetchAgendas/</pre>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end">
                        <FaArrowRight className="text-lg text-gray-500" />
                        </div>
                      </Link>
                      <Link href={"/admin/galeri/addphoto"} className="hover:bg-gray-100 bg-white rounded-lg px-4 py-2 w-full flex items-center">
                        <div className="flex-1 flex flex-col space-y-2">
                          <h1>Tambah Foto</h1>
                          <pre>/admin/galeri/addphoto</pre>
                        </div>
                        <div className=" w-[20%] flex items-center justify-end">
                        <FaArrowRight className="text-lg text-gray-500" />
                        </div>
                      </Link>
                    </div>

                  </div>
                </div>
                {/* <GoogleAnalytics /> */}
                {/* product list limit + button */}
            </div>
            <div>
                {/* notification */}
            </div>
        </div>
    </div>
            </div>
      </div>
    </div>
  )
}

export default AdminDashboard