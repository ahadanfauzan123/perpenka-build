"use client"
import React, { useContext, useState, useEffect } from 'react'
import { Fragment } from 'react'
import Sidebar from '../../../../components/admin/sidebar'
import Topbar from '../../../../components/admin/topbar'

import {
      ChakraProvider,
      Input,
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
      CircularProgressLabel,
      Textarea
    } from '@chakra-ui/react'
import { NewsContext } from '../../../../context/NewsContext'
import Image from 'next/image'
import { deleteDoc, doc, getDoc, updateDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { redirect, useRouter } from 'next/navigation'
import { auth } from '../../../../firebase'

interface ArticleData {
      id: string;
      data: {
          body: string;
          brief: string;
          category: string;
          bannerImage: string;
          title: string;
          postLength: string;
          postedOn: string;
          author: string;
          urlVideo: string;
      };
  }

function DataBerita() {
      const [user] = useAuthState(auth)
  const router = useRouter()


      if (!user) {
        redirect("/");
      } else {
        console.log(user);
      }


  const {posts} = useContext(NewsContext)
  const [idToDelete, setIdToDelete] = useState<string>("")
  const [idToEdit, setIdToEdit] = useState<string>("")
const [progress, setProgress] = useState<boolean>(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [articleData, setArticleData] = useState<ArticleData | null>(null);
  

  const handleDeleteClick = (id: string) => {
      setIdToDelete(id);
      setIsLoading(true)
    };
const handleDelete = async (id: string) => {
      setProgress(true)
      try {
        await deleteDoc(doc(db, 'articles', id));
        setIsLoading(false)
        setProgress(false)
      } catch (error) {
        console.error('Error deleting document: ', error);
      }
    };


  const handleEditClick = async (id: string) => {
        try {
            setIdToEdit(id);
            onOpen();
            const articleDocRef = doc(db, 'articles', id);
            const articleDocSnap = await getDoc(articleDocRef);
            
            if (articleDocSnap.exists()) {
                setArticleData({
                    id: articleDocSnap.id,
                    data: articleDocSnap.data() as {
                        body: string;
                        brief: string;
                        category: string;
                        bannerImage: string;
                        title: string;
                        postLength: string;
                        postedOn: string;
                        author: string;
                        urlVideo: string;
                    },
                });
            } else {
                console.log('Dokumen tidak ditemukan!');
            }
        } catch (error) {
            console.error("Error getting articles: ", error);
            // Handle error
        }
    };
    const handleEditSubmit = async () => {
      try {
        if (articleData) {
          const articleDocRef = doc(db, 'articles', articleData.id);
          await updateDoc(articleDocRef, {
            body: articleData.data.body,
            brief: articleData.data.brief,
            category: articleData.data.category,
            author: articleData.data.author,
            postLength: articleData.data.postLength,
            title: articleData.data.title,
            urlVideo: articleData.data.urlVideo,
          });
          onClose();
        }
      } catch (error) {
        console.error('Error updating article: ', error);
        // Handle error
      }
    };
    const handleChange = (key: string, value: string) => {
      if (articleData) {
          setArticleData((prevState) => ({
              ...prevState!,
              data: {
                  ...prevState!.data,
                  [key]: value,
              },
          }));
      }
  };


  return (
      <ChakraProvider>
      <div className='w-screen min-h-screen bg-blue-100 flex text-gray-600'>
      {/* sidebar */}
      <Sidebar />
      <div className="w-full xl:w-[80%] min-h-screen ml-auto flex flex-col">
            {/* topbar */}
            <Topbar />
            <div className='w-[90%] mx-auto flex flex-col space-y-5 mt-[90px] py-6 h-screen bg-blue-100'>
                  {/* header */}
                  <div className='flex items-center w-[80%] mx-auto space-x-3'>
                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                              <h1 className='text-gray-600 text-3xl font-extrabold'>kelola berita</h1>
                  </div>
                  {/* body */}
                  <div className='w-full flex flex-col space-y-5 mx-auto'>
                  <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                              <tr>
                              <th scope="col" className="px-6 py-3">
                                    Banner
                              </th>
                              <th scope="col" className="px-6 py-3">
                                    Judul
                              </th>
                              <th scope="col" className="px-6 py-3">
                                    Kategori
                              </th>
                              <th scope="col" className="px-6 py-3">
                                    Token
                              </th>
                              <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                              </th>
                              </tr>
                        </thead>
                        <tbody>
                        {posts.map(post => (
                              <tr key={post.id} className="w-full bg-white border-b hover:bg-gray-50 ">
                                    <td className="w-[0.15] px-6 py-4 flex items-center justify-center">
                                          <Image src={post.data.bannerImage} alt="banner" width={100} height={100} className="w-[50px] h-[50px] rounded-lg" />
                                    </td>
                                    <th scope="row" className="w-[0.25] px-6 py-4 truncate font-medium text-gray-900">
                                          <h1 className="truncate">
                                                {post.data.title}
                                          </h1>
                                    </th>
                                    <td className="w-[0.2] px-6 py-4 truncate">
                                          <h1 className="w-full truncate">
                                                {post.data.category}
                                          </h1>
                                    </td>
                                    <td className="w-[0.2] px-6 py-4 truncate">
                                          <h1 className="w-full truncate">
                                                {post.id}
                                          </h1>
                                    </td>
                                    <td className="w-[0.2] px-6 py-4 text-right flex items-center justify-center space-x-3">
                                          <button onClick={() => handleEditClick(post.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                          <button onClick={() => handleDeleteClick(post.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                                    </td>
                              </tr>
                              ))}
                        </tbody>
                  </table>
                  </div>

                  </div>
            </div>
            
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit..</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* title */}
            {articleData && (
            <form className="w-full">
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">title</h1>
                  <Input value={articleData.data.title} placeholder='title..'
                  onChange={(e) => handleChange('title', e.target.value)}
                   />
            </div>
             {/* brief */}
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">brief</h1>
                  <Input value={articleData?.data.brief} placeholder='brief..' 
                  onChange={(e) => handleChange('brief', e.target.value)}
                  />
            </div>
             {/* category */}
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">category</h1>
                  <Input value={articleData.data.category} placeholder='category..' 
                  onChange={(e) => handleChange('category', e.target.value)}
                  />
            </div>
             {/* author */}
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">author</h1>
                  <Input value={articleData.data.author} placeholder='author..' 
                  onChange={(e) => handleChange('author', e.target.value)}
                  />
            </div>
             {/* body */}
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">body</h1>
                  <Textarea value={articleData.data.body} placeholder='body..' 
                  onChange={(e) => handleChange('body', e.target.value)}
                  />
            </div>
             {/* post Length */}
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">post length</h1>
                  <Input value={articleData.data.postLength} placeholder='post length..' 
                  onChange={(e) => handleChange('postLength', e.target.value)}
                  />
            </div>
             {/* video */}
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">link youtube</h1>
                  <Input value={articleData.data.urlVideo} placeholder='link..' 
                  onChange={(e) => handleChange('urlVideo', e.target.value)}
                  />
            </div>
            </form>
            )}
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleEditSubmit} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* modal */}
        <Modal isOpen={isLoading} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Konfirmasi..</ModalHeader>
            <ModalCloseButton className="hover:bg-red-400" onClick={()=>setIsLoading(false)} />
            <ModalBody className="flex items-center justify-center my-[18px] ">
                  yakin ingin hapus
            </ModalBody>

            <ModalFooter>
                  {progress === true ? (
                        <Button
                        isLoading
                        loadingText='deleting..'
                        colorScheme='red'
                        mr={3}
                        spinnerPlacement='start'
                      >
                        deleted
                      </Button>
                  ) : (
                        <Button className='' colorScheme='red' mr={3} onClick={()=>handleDelete(idToDelete)}>
                              delete
                        </Button>

                  )}
            </ModalFooter>
            </ModalContent>
            </Modal> 
      </div>
      </ChakraProvider>
  )
}

export default DataBerita