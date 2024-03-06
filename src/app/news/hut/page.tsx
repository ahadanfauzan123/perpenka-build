"use client"
import React from 'react'
import Navbar from '../../../../components/navbar'
import Footer from '../../../../components/footer'
import Image from 'next/image'
import Banner from "../../../../public/img/banner3.jpg"
import Profile from "../../../../public/img/logofix.png"
import GetVideo from "../../../../components/play"

function Hut() {
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
                  <h1 className='text-2xl font-semibold text-gray-500'>Perayaan Hut ke-57 Perkumpulan Pensiunan Kereta Api Indonesia (PERPENKA)</h1>
                  {/* author */}
                  <div className='flex items-center justify-start space-x-2'>
                        <Image alt="profile" width={24} height={24} src={Profile} className="w-[36px] h-[36px]" />
                        <span className='text-gray-500 font-medium text-sm'>PERPENKA</span>

                  </div>

              </div>
              </div>
              <div className="py-12 w-full min-h-screen flex flex-col space-y-6 items-center justify-start">
                  <div className='w-[80%] mx-auto mt-[24px]'>
                        <p className='text-lg text-justify'>
                        Perayaan Hut ke-57 Perkumpulan Pensiunan Kereta Api Indonesia (PERPENKA): Jejak Legenda Perjalanan Rel Ganda <br />
                        <br />
Pada tahun ini, Perkumpulan Pensiunan Kereta Api Indonesia (PERPENKA) merayakan ulang tahun ke-57 sebagai tonggak sejarah dalam perjalanan panjangnya. Sejak didirikan pada tahun 1967, PERPENKA telah menjadi wadah bagi para pensiunan kereta api Indonesia untuk menjalin hubungan, berbagi pengalaman, dan terus berkontribusi pada perkembangan sektor perkeretaapian.&nbsp;

Sejarah Awal Berdirinya PERPENKA
PERPENKA berdiri di awal tahun 1967 sebagai respon terhadap kebutuhan para pensiunan kereta api untuk tetap terhubung dan saling mendukung. Sejak saat itu, perkumpulan ini telah tumbuh menjadi komunitas yang kuat dan berpengaruh, menggambarkan semangat kebersamaan dan dedikasi terhadap perkeretaapian Indonesia.
<br />
<br />
Kontribusi PERPENKA dalam Pengembangan Perkeretaapian
Selama lebih dari lima dekade, PERPENKA tidak hanya menjadi tempat berkumpul para pensiunan, tetapi juga telah aktif berkontribusi pada pengembangan sektor perkeretaapian. Melalui berbagai kegiatan, seminar, dan proyek sosial, perkumpulan ini terus berusaha untuk meningkatkan pemahaman dan pengetahuan anggotanya tentang perkembangan terkini dalam industri kereta api.
<br />
<br />
Peran PERPENKA dalam Mempertahankan Warisan Budaya Kereta Api
Sebagai kelompok yang terdiri dari individu yang pernah berkiprah dalam dunia kereta api, PERPENKA juga turut serta dalam melestarikan warisan budaya perkeretaapian. Dengan mengumpulkan cerita dan kenangan, perkumpulan ini berperan penting dalam menjaga sejarah dan mengenang prestasi kereta api Indonesia.
<br />
<br />
Perayaan Hut ke-57: Momentum Refleksi dan Inspirasi
Perayaan Hut ke-57 PERPENKA bukan hanya sekadar perayaan, tetapi juga merupakan momentum untuk merayakan pencapaian, merenungkan perjalanan panjang, dan menginspirasi generasi penerus. Acara perayaan melibatkan berbagai kegiatan, mulai dari pameran foto hingga diskusi panel dengan tokoh-tokoh perkeretaapian terkemuka.
<br />
<br />
Visi Masa Depan PERPENKA: Terus Berkarya, Terus Berbagi
Dengan mengusung semangat &quot;Terus Berkarya, Terus Berbagi, &quot; PERPENKA menatap masa depan dengan optimisme. Keberlanjutan perkumpulan ini diharapkan dapat memberikan kontribusi yang lebih besar dalam mendukung pertumbuhan dan modernisasi sektor perkeretaapian Indonesia.
<br />
<br />
Pesan Masyarakat untuk PERPENKA
Sebagai masyarakat yang turut merasakan dampak positif dari perkeretaapian, kita dapat memberikan apresiasi dan dukungan kepada PERPENKA. Mendorong partisipasi lebih aktif dari masyarakat, baik yang masih aktif maupun yang sudah pensiun, dapat menjadi langkah penting dalam memastikan PERPENKA terus menjadi kekuatan positif dalam pengembangan perkeretaapian.
<br />
<br />
Penutup: MERDEKA! PERPENKA Melangkah Bersama Penuh Semangat
Sebagai perayaan Hut ke-57 PERPENKA, kita dapat bersama-sama merayakan keberhasilan perkumpulan ini dan menggali inspirasi dari perjalanan panjangnya. Dengan semangat MERDEKA, mari kita dukung dan apresiasi upaya PERPENKA dalam menjaga dan memajukan perkeretaapian Indonesia untuk generasi-generasi yang akan datang. Selamat ulang tahun, PERPENKA!<br />                  </p>

                  </div>
                  <GetVideo />
              </div>
            </div>
      
      <Footer />  
    </div>
  )
}

export default Hut