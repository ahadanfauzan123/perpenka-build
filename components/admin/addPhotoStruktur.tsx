"use client"
import React, {useState, ChangeEvent} from 'react'
import {v4 as uuidv4 } from "uuid"
// import useStorage from "../../hooks/useStorage"

import { LuUploadCloud } from "react-icons/lu";
import { Input, Text } from '@chakra-ui/react';
import { db, storage } from '../../firebase';
import  {getDownloadURL, ref,   uploadBytesResumable, UploadTaskSnapshot} from 'firebase/storage'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
function AddPhotoStruktur() {
      const [value, setValue] = useState<string>('');
      const [image, setImage] = useState<File | null>(null);
      // const {startUpload} = useStorage()
      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(event.target.value);
      if (event.target.files && event.target.files[0]){
            setImage(event.target.files[0]);
      }
      }
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (image)  {
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
                        console.log(`upload is ${progress}% done`)
                        },
                        error => {
                              console.log(error.message)
                        },
                        async () => {
                              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                              // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                              //       console.log(downloadURL)
                              // })
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
      <div className='w-full h-screen flex items-center justify-start flex-col space-y-3 mt-[100px]'>       
                              <div className="flex items-center justify-center w-[60%]">
                              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 bg-white border-4 border-gray-300 border-dashed rounded-lg cursor-pointer">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                          <LuUploadCloud className='text-gray-300 text-7xl' />
                                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="inline" onChange={handleChange} />
                              </label>
                              </div> 
                              {/* heading */}
                              <div className='bg-white w-[60%] h-[100px] rounded-lg px-4 py-1'>
                                    <Text mb='8px' className='text-2xl '>title</Text>
                                    <Input
                                    value={value}
                                    onChange={handleChange}
                                    placeholder='Tambah Judul untuk struktur..'
                                    size='sm'
                                    className='bg-transparent font-semibold placeholder:text-gray-300 h-[50px] w-full ring-0 outline-0 border-0 text-xl'
                                    />
                              </div>
                              {/* button */}
                              <button onClick={() => handleSubmit} className='text-white px-5 py-2 rounded-lg bg-blue-400 border-0 outline-0'>
                                    submit
                              </button>
                        </div>
    
  )
}

export default AddPhotoStruktur