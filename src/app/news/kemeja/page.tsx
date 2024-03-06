"use client"
import React from 'react'
import Navbar from '../../../../components/navbar'
import Footer from '../../../../components/footer'
import Image from 'next/image'
import Banner from "../../../../public/img/news/kemejaBanner.jpg"
import Foto from "../../../../public/img/news/kemejaBody.jpg"
import Profile from "../../../../public/img/logofix.png"

function DesainKemeja() {
  return (
      <div className="bg-gray-200 w-screen min-h-screen overflow-x-hidden text-gray-600">
            <Navbar isGray={true} />
            <div className=' min-h-screen w-full mx-auto flex flex-col items-center'>
              <div className="bg-gray-400 w-screen h-[450px]">
                  <Image alt="banner" src={Banner} width={400} height={400} className="w-full h-full object-cover" />
              </div>
              {/* title */}
              <div className='w-full h-[150px] py-2 bg-white'>
              <div className='flex flex-col space-y-2 w-[80vw] mx-auto'>
                  {/* date */}
                  <h3 className='text-sm font-light text-gray-500'>7 Maret 2024</h3>
                  {/* title */}
                  <h1 className='text-2xl font-semibold text-gray-500'>PERPENKA Memperkenalkan Seragam Baru Mulai 7 Maret 2024</h1>
                  {/* author */}
                  <div className='flex items-center justify-start space-x-2'>
                        <Image alt="profile" width={24} height={24} src={Profile} className="w-[36px] h-[36px]" />
                        <span className='text-gray-500 font-medium text-sm'>PERPENKA</span>

                  </div>

              </div>
              </div>
              <div className="py-12 w-full min-h-[calc(100vh+120px)] flex flex-col space-y-6 items-center justify-start">
              <div className='w-[80%] mx-auto mt-[24px]'>
                        <p className='text-lg text-justify'>
                        PERPENKA Memperkenalkan Seragam Baru Mulai 7 Maret 2024: Identitas Pengurus untuk Kelancaran Koordinasi dengan PT KAI dan Instansi Terkait
<br />
<br />
Dalam rapat evaluasi kinerja DPP (Dewan Pimpinan Pusat) dan DPD (Dewan Pimpinan Daerah) PERPENKA pada tahun 2024, telah diambil keputusan yang signifikan terkait dengan peningkatan identitas dan koordinasi. Keputusan tersebut mengenai penggunaan seragam atau pakaian harian oleh pengurus PERPENKA, seperti yang tergambar dalam desain yang telah disepakati.
<br />
<br />
Seragam Baru: Identitas Pengurus PERPENKA
Mulai tanggal 7 Maret 2024, para pengurus PERPENKA akan mengenakan seragam atau pakaian harian sebagai bagian dari langkah strategis untuk memperkuat identitas perkumpulan. Desain seragam tersebut dipilih dengan teliti dan mencerminkan kesan profesionalisme serta semangat kesatuan di antara pengurus.
<br />
<br />
Tujuan Penggunaan Pakaian Harian
Penggunaan pakaian harian ini bukan hanya sekadar perubahan penampilan, melainkan sebuah langkah strategis untuk meningkatkan koordinasi dengan Dinas PT KAI dan instansi terkait. Berikut adalah beberapa tujuan utama dari kebijakan ini:
<br />
<br />
Identitas yang Kuat: Pakaian harian yang seragam akan membantu menciptakan identitas yang kuat bagi para pengurus PERPENKA. Hal ini akan mempermudah pengenalan mereka di berbagai kesempatan, termasuk saat berkoordinasi dengan Dinas PT KAI.
<br />
<br />
Koordinasi yang Efektif: Dalam menjalankan tugas dan tanggung jawabnya, para pengurus PERPENKA seringkali perlu berkoordinasi dengan Dinas PT KAI dan instansi terkait. Penggunaan seragam ini diharapkan dapat membuka pintu komunikasi yang lebih efektif dan memudahkan proses kerjasama.
<br />
<br />
Penegasan Profesionalisme: Penampilan yang seragam juga mencerminkan profesionalisme para pengurus PERPENKA. Ini adalah aspek penting dalam membangun kepercayaan dan hubungan yang baik dengan pihak-pihak terkait.
<br />
<br />
Langkah Positif untuk Kelancaran Pelaksanaan Tugas
Keputusan ini bukan hanya sekadar perubahan tampilan fisik, tetapi juga merupakan langkah positif untuk menjaga kelancaran pelaksanaan tugas. Dengan identitas yang jelas dan koordinasi yang efektif, diharapkan PERPENKA dapat lebih efisien dalam menjalankan fungsi dan tanggung jawabnya.
<br />
<br />
Partisipasi dan Dukungan Anggota PERPENKA
Sebagai anggota PERPENKA, partisipasi dan dukungan dalam implementasi kebijakan ini sangat diharapkan. Mengenakan seragam dengan bangga adalah bentuk kontribusi positif dalam memperkuat citra dan pengaruh perkumpulan ini dalam dunia perkeretaapian.
<br />
<br />
Penutup: Identitas Baru, Semangat Baru untuk PERPENKA
Seiring dengan peluncuran seragam baru ini, mari bersama-sama menghadapi masa depan dengan semangat baru. Identitas yang kuat dan koordinasi yang efektif akan membawa PERPENKA menuju tingkat keberhasilan yang lebih tinggi. Selamat mengenakan seragam baru, PERPENKA! 
  <br />    
  <br />    
                    </p>
  
              </div>
              </div>
            </div>
      
            <Footer />  
    </div>
  )
}

export default DesainKemeja