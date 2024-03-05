import React from 'react'
import Image from 'next/image';
import Logo from "../public/img/logo.jpg";
import Link from 'next/link';
import { useRouter } from 'next/navigation';



type CounterProps = {
      judul: string;
      post: string;
      slug: string;
      tanggal: string;
    };

function NewsCard({judul, post, slug, tanggal}: CounterProps) {
  return (
      
      <div className="relative flex flex-col lg:flex-row bg-clip-border rounded-xl bg-white text-gray-600 shadow-md w-full max-w-[100%]">
            <div
            className="relative w-full lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-t-xl lg:rounded-t-none lg:rounded-r-none bg-clip-border rounded-xl shrink-0">
                  <Image
                        src={Logo}
                        alt="card-image" className="object-cover w-full h-full" />
                  </div>
                   <div className="p-6">
                  <h6
                        className="block mb-4 font-sans text-md antialiased font-semibold leading-relaxed tracking-normal text-gray-600 uppercase">
                        {/* {new Date(tanggal).toLocaleString('en-US',
                        {
                              date: "string",
                              month: "short",
                        }
                        )} */}
                  </h6>
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {judul}
                  </h4>
                  <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        {post}
                  </p>
                  <Link href={`/news/${slug}`}>

                  <div className="inline-block"><button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button">
                        Read More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        stroke-width="2" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg></button></div>
                  </Link>
                  </div>
            </div> 
  )
}

export default NewsCard