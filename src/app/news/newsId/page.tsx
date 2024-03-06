"use client"
import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../../../../context/NewsContext'
import {useRouter} from "next/navigation"
import {collection, getDocs, setDoc ,doc, limit, orderBy,query, where} from 'firebase/firestore'
import {db} from '../../../../firebase'
import Navbar from '../../../../components/navbar'
import Footer from '../../../../components/footer'
function Read({params}: {params: {newsId: string}}) {
  // const {posts} = useContext(NewsContext)
  // const [post, setPost] = useState([])
  // const router = useRouter();
  // useEffect(() => {
  //   if (posts.length === 0) {
  //     return
  //   }
  //   console.log(router.query.slug)
  //   posts.find(post => post.id === router.query.slug)
  // }, [posts, router.query.slug])
  const [data, setData] = useState<string>("")
  useEffect(() => {
    const getFullGallery = async () => {
      const articlesCollection = collection(db, 'articles');
      const latestSnapshot = await query(articlesCollection,
            where('id', '==' , `${params.newsId}`),
            orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(latestSnapshot);
    }
    getFullGallery
  }, [params.newsId]);
  return (
    <div className="bg-gray-100 w-screen min-h-screen overflow-x-hidden text-gray-600">
            <Navbar isGray={true} />
            <div className=' h-screen w-[80%] mx-auto flex flex-col items-center space-y-3'>
              <div className="bg-gray-400 w-screen h-[450px]">

              </div>
              <div className="mt-4">
                <h1>Read {params.newsId} !</h1>
              </div>
            </div>
      
      <Footer />  
    </div>
  )
}

export default Read