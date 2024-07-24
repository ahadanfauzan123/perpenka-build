"use client"
import React, { useContext } from 'react'
import NewsCard from '../../../../components/newsCard'
import { NewsContext } from '../../../../context/NewsContext'

function GetNews() {
      const {posts} = useContext(NewsContext)
      
return (
      <div className="bg-transparent w-[95%] lg:w-[80%] mx-auto min-h-screen overflow-x-hidden text-gray-600">
            {/* <Navbar isGray={true} /> */}
            <div className='w-full py-[40px] px-4 bg-white rounded-2xl mx-auto flex flex-col space-y-12 mt-[110px]'>
                  {/* heading */}
                  <div className='flex items-center space-x-3'>
                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                        <h1 className='text-gray-600 text-3xl font-extrabold'>NEWS</h1>
                  </div>
                  {/* body */}
                  <div className='w-full flex flex-col space-y-3 lg:space-y-2'>
                        {posts.map(post => (
                              <NewsCard key={post.id} gambar={post.data.bannerImage} slug={post.id} tanggal={post.data.postedOn} post={post.data.brief} judul={post.data.title} />  
                        ))}
                  </div>
            </div>
            {/* <Footer  /> */}
      </div>
  )
}

export default GetNews