"use client"
import Image from 'next/image'
import React from 'react'
import Sidebar from '../../../../components/admin/sidebar'
import Topbar from '../../../../components/admin/topbar'

import { NewsContext } from "../../../../context/NewsContext";
import { useContext } from "react"
import Table from '../../../../components/admin/tableUser'
// import ReactGA from "react-ga4";
import { sendGAEvent } from '@next/third-parties/google'
// import GoogleAnalytics from '../../../../components/admin/GoogleAnalytics'


function AdminDashboard() {
  const {users} = useContext(NewsContext)
  // ReactGA.initialize("G-FQ6V4E5T2S");
  // ReactGA.send({ hitType: "pageview", page: window.location.pathname, });

  // console.log(users)
  return (
    <div className='w-screen min-h-screen bg-purple-200 flex text-gray-600'>
      {/* sidebar */}
      <Sidebar />
      <div className="w-[80%] min-h-screen ml-auto flex flex-col ">
            {/* topbar */}
            <Topbar />
            {/* body */}
            <div className='mt-[90px] min-h-[calc(100vh-90px)] w-full '>
            <div className='bg-theme'>
        <div className='text-color grid grid-cols-4mobile:gid-cols-1 bg-transparent w-full max-w-6xl mx-auto p-5'>
            <div className='col-span-4 p-3 flex flex-col gap-y-8'>
                {/* cards */}
                {/* <AdminCard/> */}
                {/* salary/times & also admin */}
                {/* <div className='flex flex-col space-y-6 laptop:space-y-0 items-center laptop:flex-row justify-between mt-8 space-x-0 laptop:space-x-4'>
                    <Salary/>
                    <AdminUser/>

                </div> */}
                {/* charts */}
                {/* <Chart /> */}
                {/* history table */}
                <Table/>
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