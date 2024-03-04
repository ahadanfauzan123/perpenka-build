"use client"
import React, {useState, ChangeEvent} from 'react'
import Navbar from '../../../components/navbar'
import Footer from '../../../components/footer';

function Contact() {
      const [value, setValue] = useState<string>('');

      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(event.target.value);
  };
  return (
      <div className="bg-gray-100 w-screen min-h-screen overflow-x-hidden text-gray-600">
            <Navbar isGray={true} />
            <div className='w-[80vw] mx-auto flex flex-col space-y-12 mt-[110px] h-screen'>
                  {/* heading */}
                  <div className='flex items-center space-x-3'>
                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                        <h1 className='text-gray-600 text-3xl font-extrabold'>CONTACT</h1>
                  </div>
                  <div className='w-full flex-[0.2] bg-gray-200 flex items-center justify-center'>
                        <a href="https://forms.gle/5mg5h1UgGSP9xzgw5" className='cursor-pointer bg-gradient-to-tr from-blue-500 to-purple-600 hover:ring-2 hover:ring-gray-200 w-full h-full font-medium text-2xl flex items-center justify-center text-white'>Daftar Sekarang</a>
                  </div>
            </div>
            <Footer />
      </div>
  )
}

export default Contact