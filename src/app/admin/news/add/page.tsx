"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Navbar from '../../../../../components/navbar'
import { Input, Text } from '@chakra-ui/react'
import { collection,addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../../../firebase';
import Sidebar from '../../../../../components/admin/sidebar';
import Topbar from '../../../../../components/admin/topbar';



function AddNews() {
      const [title, setTitle] = useState<string>('');
      const [body, setBody] = useState<string>('');
      const [brief, setBrief] = useState<string>('');

      const addPostToFirebase = async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            try {
            await addDoc(collection(db, "articles"), {
                  bannerImage: "dfnaodfa",
                  body: body,
                  category: "dfs",
                  brief: brief,
                  title: title,
                  postLength: "5",
                  author: "ahadan@gmail.com",
                  postedOn:serverTimestamp()
      
            })
            setTitle('');
      setBody('');
      setBrief('');
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
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
            <div className='pt-[120px] min-h-[calc(100vh-90px)] w-[80%] mx-auto '>
            <div className='flex items-center space-x-3'>
                  <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                  <h1 className='text-gray-600 text-3xl font-extrabold'>Add News</h1>
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
            <button type='submit' className="w-[200px]" onClick={addPostToFirebase}>submit</button>
      </div>
</div>
</div>
  )
}

export default AddNews