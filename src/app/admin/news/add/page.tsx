"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Navbar from '../../../../../components/navbar'
import { Input, Text } from '@chakra-ui/react'
import { collection,addDoc, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../../../../../firebase';
import Sidebar from '../../../../../components/admin/sidebar';
import Topbar from '../../../../../components/admin/topbar';
import  {getDownloadURL, ref,   uploadBytesResumable, UploadTaskSnapshot} from 'firebase/storage'

import {v4 as uuidv4 } from "uuid"
import { LuUploadCloud } from 'react-icons/lu';


function AddNews() {
      const [title, setTitle] = useState<string>('');
      const [body, setBody] = useState<string>('');
      const [brief, setBrief] = useState<string>('');
      const [image, setImage] = useState<File | null>(null);


      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
            event.preventDefault();
            if (event.target.files && event.target.files[0]){
                  setImage(event.target.files[0]);
            }
            }

      const addPostToFirebase = async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()
                  if(image) {
                        const fileId = uuidv4()
                        const formatFile = image.type.split('/')[1];
                        const storageRef = ref(storage, `articles/${fileId}.${formatFile}`);
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
                                    try {
                                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                                        await addDoc(collection(db, "articles"), {
                                            bannerImage: downloadURL,
                                            body: body,
                                            category: "dfs",
                                            brief: brief,
                                            title: title,
                                            postLength: "5",
                                            author: "perpenka",
                                            postedOn: serverTimestamp()
                                        });
                                        setTitle('');
                                        setBody('');
                                        setBrief('');
                                        setImage(null);
                                        console.log("Document successfully written!");
                                    } catch (error) {
                                          console.error("Error writing document: ", error);
                                      }
                              }
                        )
                  }
      }
  return (
      <div className='w-screen min-h-screen bg-blue-100 flex text-gray-600'>
            {/* sidebar */}
            <Sidebar />
            <div className="w-full xl:w-[80%] min-h-screen ml-auto flex flex-col">
                  {/* topbar */}
                  <Topbar />
                  {/* body */}
            <form onSubmit={addPostToFirebase} className='pt-[120px] min-h-[calc(100vh-90px)] w-[80%] mx-auto '>
            <div className='flex items-center space-x-3'>
                  <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                  <h1 className='text-gray-600 text-3xl font-extrabold'>Add News</h1>
            </div>
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
            <div>
                  <Text mb='8px'>title: {title}</Text>
                  <Input
                  value={title}
                  placeholder='Here is a sample placeholder'
                  className=' w-[300px] h-[60px] rounded-lg bg-white border-0 outline-0 ring-0'
                  size='sm'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                  />
            </div>
            <div>
                  <Text mb='8px'>body: {body}</Text>
                  <Input
                  value={body}
                  placeholder='Here is a sample placeholder'
                  size='sm'
                  className=' w-[300px] h-[60px] rounded-lg bg-white border-0 outline-0 ring-0'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBody(event.target.value)}
                  />
            </div>
            <div>
                  <Text mb='8px'>brief: {brief}</Text>
                  <Input
                  value={brief}
                  placeholder='Here is a sample placeholder'
                  size='sm'
                  className=' w-[300px] h-[60px] rounded-lg bg-white border-0 outline-0 ring-0'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBrief(event.target.value)}
                  />
            </div>
            <button type='submit' className="w-[200px]">submit</button>
            </form>
</div>
</div>
  )
}

export default AddNews