"use client"
import React, { useContext, useState } from 'react'
import Image from 'next/image';
import { NewsContext } from '../../../../context/NewsContext';

import {
      ChakraProvider,
      Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalFooter,
      ModalBody,
      ModalCloseButton,
      Button,
      useDisclosure,
      Progress,
      CircularProgress,
    } from '@chakra-ui/react'


    interface GalleryData {
      id: string;
      data: {
          name: string;
          url: string;
      };
  }

function Gallery() {
      const { isOpen, onOpen, onClose } = useDisclosure()
      
  const {fullGallery} = useContext(NewsContext)
  
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryData | null>(null);
     
  const handlePhotoClick = (photo: GalleryData) => {
      setSelectedPhoto(photo);
      onOpen();
    };
      return (
            <ChakraProvider>
            <div className='bg-transparent w-[95%] lg:w-[80%] mx-auto pt-[120px] py-[40px] min-h-screen overflow-x-hidden text-gray-600'>
                  {/* <Navbar isGray={true} /> */}
                  <div className='w-full rounded-2xl mx-auto flex flex-col space-y-12 py-[40px] bg-white px-4'>
                        {/* heading */}
                        <div className='flex items-center space-x-3'>
                              <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                              <h1 className='text-gray-600 text-3xl font-extrabold'>GALLERY</h1>
                        </div>
                        {/* body */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {fullGallery.map( fg => (
                              <div key={fg.id} onClick={() => handlePhotoClick(fg)}>
                              <Image 
                              className="h-[240px] w-full max-w-full rounded-lg object-cover object-center"
                              src={fg.data.url}
                              alt="gallery-photo"
                              width={300}
                              height={240}
                              />
                              </div>
                        ))}
                        </div>
                  </div>
                  {/* <Footer /> */}
                  {/* modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detail</ModalHeader>
          <ModalCloseButton className='hover:bg-red-400' onClick={onClose} />
          <ModalBody className='flex flex-col items-center justify-center my-[18px] '>
            {selectedPhoto && (
              <>
                <Image
                  className='w-full max-w-full rounded-lg object-cover object-center'
                  src={selectedPhoto.data.url}
                  alt='selected-photo'
                  width={500}
                  height={400}
                />
                <p className="mt-4">{selectedPhoto.data.name}</p>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
            </div>
            </ChakraProvider>
      );
    }
     

export default Gallery