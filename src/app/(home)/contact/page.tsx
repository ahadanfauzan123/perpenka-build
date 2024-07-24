"use client"
import React, {useState, ChangeEvent} from 'react'

function Contact() {
      const [value, setValue] = useState<string>('');

      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(event.target.value);
  };
  return (
      <div className="bg-transparent w-[95%] lg:w-[80%] mx-auto pt-[120px] py-[40px] min-h-screen overflow-x-hidden text-gray-600">
            {/* <Navbar isGray={true} /> */}
            <div className='w-full px-4 py-[40px] bg-white rounded-2xl mx-auto flex flex-col space-y-12 h-screen'>
                  {/* heading */}
                  <div className='flex items-center space-x-3'>
                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                        <h1 className='text-gray-600 text-3xl font-extrabold'>CONTACT</h1>
                  </div>
                  <div className='w-full flex-[0.2] bg-gray-200 flex items-center justify-center'>
                        <a href="https://forms.gle/5mg5h1UgGSP9xzgw5" className='cursor-pointer bg-gradient-to-tr from-blue-500 to-purple-700 hover:ring-2 hover:ring-gray-200 w-full h-full font-light text-2xl flex items-center justify-center text-white'>Daftar Sekarang</a>
                  </div>
            </div>
            {/* <Footer /> */}
      </div>
  )
}

export default Contact