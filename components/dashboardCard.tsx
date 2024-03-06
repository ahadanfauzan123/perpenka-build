import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image';
import Thumbs1 from "../public/img/banner3.jpg"
import Thumbs2 from "../public/img/news/kemejaBanner.jpg"
import Thumbs3 from "../public/img/news/halalbihalal.jpg"
import Link from 'next/link';

type CounterProps = {
  judul: string;
  post: string;
  thumbs: string;
};
function Card({judul, post, thumbs}: CounterProps) {
  return (
    <motion.div
    whileHover={{ scale: 1.02 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}
    className='bg-white rounded-2xl shadow-lg shadow-gray-300 text-gray-600 w-[85%] lg:w-[30%] h-[500px] flex flex-col space-y-3'>
      <div className='bg-gray-400 rounded-t-2xl w-full h-[60%]'>
        {thumbs == "hut" ? (
          <Image alt="hut" src={Thumbs1} width={200} height={200} className='w-full h-full rounded-t-xl object-cover' />
          ): (<></>)}
        {thumbs == "kemeja" ?(
            <Image alt="hut" src={Thumbs2} width={200} height={200} className='w-full h-full rounded-t-xl object-cover' />
        ) : (<></>) }
        {thumbs == "halalbihalal" ?(
            <Image alt="hut" src={Thumbs3} width={200} height={200} className='w-full h-full rounded-t-xl object-cover' />
        ) : (<></>) }
      </div>
      <div className='flex flex-col space-y-3 w-full px-5'>
      <h1 className='font-semibold text-xl'>{judul}</h1>
      <p className='flex-1 text-gray-600 text-sm'>{post}</p>
      <a href={`/news/${thumbs}`} className='bg-blue-400 text-white px-5 py-2 w-[120px] font-bold rounded-lg'>
        read more
      </a>
      </div>
    </motion.div>
  )
}

export default Card