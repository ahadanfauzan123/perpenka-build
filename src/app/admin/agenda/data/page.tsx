"use client"
import React, { useContext, useState, useEffect } from 'react'
import { Fragment } from 'react'
import Sidebar from '../../../../../components/admin/sidebar'
import Topbar from '../../../../../components/admin/topbar'

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
import { NewsContext } from '../../../../../context/NewsContext'
import Image from 'next/image'
import { deleteDoc, doc, getDoc, updateDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { redirect, useRouter } from 'next/navigation'
import { auth } from '../../../../../firebase'

interface ArticleData {
      id: string;
      data: {
          DueDate: Timestamp;
          description: string;
          name: string;
          startDate: Timestamp;
      };
  }

function DataAgenda() {

  const {agendas} = useContext(NewsContext)
  const [idToDelete, setIdToDelete] = useState<string>("")
  const [idToEdit, setIdToEdit] = useState<string>("")
  const [progress, setProgress] = useState<boolean>(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [agendaData, setAgendaData] = useState<ArticleData | null>(null);
  

  const handleDeleteClick = (id: string) => {
      setIdToDelete(id);
      setIsLoading(true)
    };
  const handleDelete = async (id: string) => {
      setProgress(true)
      try {
        await deleteDoc(doc(db, 'agenda', id));
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
            const agendaDocRef = doc(db, 'agenda', id);
            const agendaDocSnap = await getDoc(agendaDocRef);
            
            if (agendaDocSnap.exists()) {
                setAgendaData({
                    id: agendaDocSnap.id,
                    data: agendaDocSnap.data() as {
                        DueDate: Timestamp;
                        description: string;
                        name: string;
                        startDate: Timestamp;
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
        if (agendaData) {
          const agendaDocRef = doc(db, 'agenda', agendaData.id);
          await updateDoc(agendaDocRef, {
            DueDate: agendaData.data.DueDate,
            description: agendaData.data.description,
            name: agendaData.data.name,
            startDate: agendaData.data.startDate,
          });
          onClose();
        }
      } catch (error) {
        console.error('Error updating article: ', error);
        // Handle error
      }
    };
    const handleChange = (key: string, value: string | Timestamp) => {
      if (agendaData) {
          setAgendaData((prevState) => ({
              ...prevState!,
              data: {
                  ...prevState!.data,
                  [key]: typeof value === 'string' ? value : value,
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
                              <h1 className='text-gray-600 text-3xl font-extrabold'>Kelola Agenda</h1>
                  </div>
                  {/* body */}
                  <div className='w-full flex flex-col space-y-5 mx-auto'>
                  <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                              <tr>
                              <th scope="col" className="px-6 py-3">
                                    Start
                              </th>
                              <th scope="col" className="px-6 py-3">
                                    End
                              </th>
                              <th scope="col" className="px-6 py-3">
                                    Agenda
                              </th>
                              <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                              </th>
                              </tr>
                        </thead>
                        <tbody>
                        {agendas.map(agenda => (
                              <tr key={agenda.id} className="w-full bg-white border-b hover:bg-gray-50 ">
                                    <td className="w-[0.15] px-6 py-4 flex items-center justify-center">
                                    <h1 className="truncate">
                                                {agenda.data.startDate}
                                          </h1>
                                    </td>
                                    <th scope="row" className="w-[0.25] px-6 py-4 truncate font-medium text-gray-900">
                                          <h1 className="truncate">
                                                {agenda.data.DueDate}
                                          </h1>
                                    </th>
                                    <td className="w-[0.2] px-6 py-4 truncate">
                                          <h1 className="w-full truncate">
                                                {agenda.data.name}
                                          </h1>
                                    </td>
                                    <td className="w-[0.2] px-6 py-4 text-right flex items-center justify-center space-x-3">
                                          <button onClick={() => handleEditClick(agenda.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                          <button onClick={() => handleDeleteClick(agenda.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
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
            {agendaData && (
            <form className="w-full">
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">Judul</h1>
                  <Input value={agendaData.data.name} placeholder='Judul..'
                  onChange={(e) => handleChange('name', e.target.value)}
                   />
            </div>
             {/* brief */}
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">Deskripsi</h1>
                  <Input value={agendaData?.data.description} placeholder='deskripsi..' 
                  onChange={(e) => handleChange('description', e.target.value)}
                  />
            </div>
             {/* category */}
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">Tanggal Mulai</h1>
                  <Input type='datetime-local' value={new Date(agendaData.data.startDate.seconds * 1000).toISOString().substr(0, 16)}
                  placeholder='category..' 
                  onChange={(e) => handleChange('startDate', Timestamp.fromDate(new Date(e.target.value)))}
                  />
            </div>
             {/* author */}
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">Tanggal Selesai</h1>
                  <Input type='datetime-local' value={new Date(agendaData.data.DueDate.seconds * 1000).toISOString().substr(0, 16)}
                  placeholder='author..' 
                  onChange={(e) => handleChange('DueDate', Timestamp.fromDate(new Date(e.target.value)))}
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

export default DataAgenda