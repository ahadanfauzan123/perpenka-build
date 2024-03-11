"use client"
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebase';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import GetVideo from '../../../../components/play';
import Image from 'next/image';
import Banner from "../../../../public/img/banner3.jpg"
import Profile from "../../../../public/img/logofix.png"

interface ArticleData {
    id: string;
    data: {
        body: string;
        brief: string;
        category: string;
        bannerImage: string;
        title: string;
        postedOn: string;
        author: string;
        urlVideo: string;
    };
}

function Read({ params }: { params: { newsId: string } }) {
    const [tanggal, setTanggal] = useState<string>("")
    const [articleData, setArticleData] = useState<ArticleData | null>(null);

    useEffect(() => {
        const getFullGallery = async (newsId: string) => {
            try {
                const articleDocRef = doc(db, 'articles', newsId);
                const articleDocSnap = await getDoc(articleDocRef);
                
                if (articleDocSnap.exists()) {
                    setArticleData({
                        id: articleDocSnap.id,
                        data: articleDocSnap.data() as {
                            body: string;
                            brief: string;
                            category: string;
                            bannerImage: string;
                            title: string;
                            postedOn: string;
                            author: string;
                            urlVideo: string;
                        },
                    });
                    const getDate = articleDocSnap.data();
                    setTanggal(getDate.postedOn.toDate().toLocaleString("id-ID"));
                } else {
                    console.log('Dokumen tidak ditemukan!');
                }
            } catch (error) {
                console.error("Error getting articles: ", error);
                // Handle error
            }
        };

        getFullGallery(params.newsId);
    }, [params.newsId]);

    return (
      <div className="bg-gray-200 w-screen min-h-screen overflow-x-hidden text-gray-600">
      <Navbar isGray={true} />
      {articleData && (
      <div key={articleData.id} className=' min-h-screen w-full mx-auto flex flex-col items-center'>
        <div className="bg-gray-400 w-screen h-[450px]">
            <Image alt="banner" src={articleData.data.bannerImage} width={400} height={400} className="w-full h-full object-cover" />
        </div>
        {/* title */}
        <div className='w-full py-4 bg-white'>
        <div className='flex flex-col space-y-2 w-[80vw] mx-auto'>
            {/* date */}
            <h3 className='text-sm font-light text-gray-500'>{tanggal}</h3>
            {/* title */}
            <h1 className='text-2xl font-semibold text-gray-500'>{articleData.data.title}</h1>
            {/* author */}
            <div className='flex items-center justify-start space-x-2'>
                  <Image alt="profile" width={24} height={24} src={Profile} className="w-[36px] h-[36px]" />
                  <span className='text-gray-500 font-medium text-sm'>{articleData.data.author}</span>

            </div>

        </div>
        </div>
        <div className="py-12 w-full min-h-screen flex flex-col space-y-6 items-center justify-start">
            <div className='w-[80%] mx-auto mt-[24px]'>
                  <p className="text-lg text-justify">
                  {articleData.data.body.split('<br />').map((paragraph, index) => (

                        <p key={index}>{paragraph}<br /></p>
                        
                        ))}
                  </p>
            </div>
            {articleData.data.urlVideo && (
             <GetVideo url={articleData.data.urlVideo} />
            )}
        </div>
      </div>
      )}

<Footer />  
</div>
    );
}

export default Read;
