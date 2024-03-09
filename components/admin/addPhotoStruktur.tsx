"use client"
import React, {useState, ChangeEvent, DragEvent, useRef} from 'react'
import {v4 as uuidv4 } from "uuid"

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
      CircularProgressLabel
    } from '@chakra-ui/react'
import Image from 'next/image';
import { LuUploadCloud } from "react-icons/lu";
import { FiCheck } from "react-icons/fi";
import { Input, Text } from '@chakra-ui/react';
import { db, storage } from '../../firebase';
import  {getDownloadURL, ref,   uploadBytesResumable, UploadTaskSnapshot} from 'firebase/storage'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
function AddPhotoStruktur() {
      const [value, setValue] = useState<string>('');
      const [image, setImage] = useState<File | null>(null);
      const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [isLoading, setIsLoading] = useState<boolean>(false)
      const [progressValue, setProgressValue] = useState<number>(0)

      const inputRef = useRef<HTMLInputElement>(null);
      // const {startUpload} = useStorage()
      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      // setValue(event.target.value);
      if (event.target.files && event.target.files[0]){
            setImage(event.target.files[0]);
            previewImage(event.target.files[0]);
      }
      }
      const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
            event.preventDefault();
      };
      const handleDrop = (event: DragEvent<HTMLDivElement>) => {
            event.preventDefault();
            const file = event.dataTransfer.files?.[0];
            if (file && inputRef.current !== null) {
                  inputRef.current.files = event.dataTransfer.files;
                  setImage(file)
                previewImage(file);
            }
      };
      
      const previewImage = (file: File) => {
            const reader = new FileReader();
            reader.onload = () => {
                  setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        };

      const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            if (image)  {
                  setIsLoading(true)
                  // startUpload(file)
                  const fileId = uuidv4()
                  const formatFile = image.type.split('/')[1];
                  const storageRef = ref(storage, `structures/${fileId}.${formatFile}`);
                  const uploadTask = uploadBytesResumable(storageRef, image);
                  uploadTask.on(
                        "state_changed",
                        (snapshot:UploadTaskSnapshot) => {
                        const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setProgressValue(progress)
                        console.log(`upload is ${progress}% done`)
                        },
                        error => {
                              console.log(error.message)
                        },
                        async () => {
                              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                              await addDoc(collection(db, "images"), {
                                    name: value,
                                    url: downloadURL,
                                    role: "struktur",
                                    createdAt: serverTimestamp()
                              })
                        }
                  )
            }
      }
  return (
      <ChakraProvider>
      <div className='w-full min-h-screen flex items-center justify-start flex-col space-y-3 my-[100px]'>       
                              <div
                              onDragOver={handleDragOver}
                              onDrop={handleDrop}
                              className="flex items-center justify-center w-[60%]">
                              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full min-h-[280px] bg-white border-4 border-gray-300 border-dashed rounded-lg cursor-pointer">
                                    <div
                                    className="flex flex-col items-center justify-center w-full h-full">
                                          {selectedImage ? (
                                          <Image src={selectedImage.toString()} alt="preview" width={200} height={200} className="w-full h-full object-cover rounded-lg" />
                                          ):(
                                          <>
                                          <LuUploadCloud className='text-gray-300 text-7xl' />
                                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                          </>
                                          )}
                                    </div>
                              </label>
                              <input ref={inputRef} id="dropzone-file" type="file" className="hidden" onChange={handleChange} />
                              </div> 
                              {/* heading */}
                              <div className='bg-white w-[60%] h-[100px] rounded-lg px-4 py-1'>
                                    <Text mb='8px' className='text-2xl '>title</Text>
                                    <input
                                    type="text"
                                    value={value}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
                                    placeholder='Tambah Judul untuk struktur..'
                                    className='bg-transparent font-semibold placeholder:text-gray-300 h-[50px] w-full ring-0 outline-0 border-0 text-xl'
                                    />
                              </div>
                              {/* button */}
                              <Button onClick={handleSubmit} className='text-white px-5 py-2 rounded-lg bg-blue-400 border-0 outline-0'>
                                    submit
                              </Button>

                              {/* modal */}
                              <Modal isOpen={isLoading} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent>
                              <ModalHeader>File is under way..</ModalHeader>
                              {/* <ModalCloseButton /> */}
                              <ModalBody className="flex items-center justify-center my-[18px]">
                              <CircularProgress className='flex items-center justify-center' size="80px" value={progressValue} color='green.400' thickness='9px'>
                                    <CircularProgressLabel className="mx-auto flex items-center justify-center">
                                          <FiCheck className={`text-3xl ${progressValue < 100 ? "text-gray-300" : "text-green-400"}`} />
                                    </CircularProgressLabel>
                              </CircularProgress>
                              </ModalBody>

                              <ModalFooter>
                                    {progressValue < 100 ? (
                                          <Button
                                          isLoading
                                          loadingText='loading..'
                                          colorScheme='green'
                                          mr={3}
                                          spinnerPlacement='start'
                                    >
                                          Submit
                                    </Button>
                                    ) : (
                                          <Button className='' colorScheme='green' mr={3} onClick={()=>setIsLoading(false)}>
                                                Done
                                          </Button>

                                    )}
                              </ModalFooter>
                              </ModalContent>
                              </Modal> 
                        </div>
      </ChakraProvider>
                                          
  )
}

export default AddPhotoStruktur