"use client"
import Image from 'next/image'
import React, { FormEvent, useEffect, useState } from 'react'
import Sidebar from '../../../../components/admin/sidebar'
import Topbar from '../../../../components/admin/topbar'

import { NewsContext } from "../../../../context/NewsContext";
import { useContext } from "react"
import Table from '../../../../components/admin/tableUser'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../../../firebase'
import { redirect, useRouter } from 'next/navigation'
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
import { Timestamp, addDoc, collection, serverTimestamp } from 'firebase/firestore'


function DataUser() {
  const {dataListAnggota} = useContext(NewsContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [jumlahAnggota, setJumlahAnggota] = useState<number>(0)
  const [postedOn, setPostedOn] = useState<string>("")
  
  
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
      try {
        const date = Timestamp.fromDate(new Date(postedOn))
       await addDoc(collection(db, "anggota"), {
                                    jumlahAnggota: jumlahAnggota,
                                    postedOn: date,
        });
        setJumlahAnggota(0);
        setPostedOn("");
        onClose()
          console.log("Document successfully written!");
      } catch (error) {
          console.error("Error writing document: ", error);
      }
    }

  return (
    <ChakraProvider>
    <div className='w-screen min-h-screen bg-purple-200 flex text-gray-600'>
      {/* sidebar */}
      <Sidebar />
      <div className="w-[80%] min-h-screen ml-auto flex flex-col mt-[120px] ">
            {/* topbar */}
            <Topbar />
            {/* header */}
            <div className='flex items-center w-[80%] mx-auto space-x-3'>
                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                        <h1 className='text-gray-600 text-3xl font-extrabold'>Kelola Anggota</h1>
              </div>
                  {/* body */}
                  <div className='w-[60%] mt-[60px] flex flex-col space-y-5 mx-auto'>
                  <button onClick={onOpen} className='px-3 py-2 rounded-lg bg-blue-500 text-white ring-0 outline-0 border-0 text-lg'>Update Anggota</button>
                  <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                              <tr>
                              <th scope="col" className="px-6 py-3">
                                    Token
                              </th>
                              <th scope="col" className="px-6 py-3">
                                    Jumlah Anggota
                              </th>
                              <th scope="col" className="px-6 py-3">
                                    Jumlah anggota / Tanggal
                              </th>
                              </tr>
                        </thead>
                        <tbody>
                        {dataListAnggota.map(post => (
                              <tr key={post.id} className="w-full bg-white border-b hover:bg-gray-50 ">
                                    <th scope="row" className="w-[0.25] px-6 py-4 truncate font-medium text-gray-900">
                                          <h1 className="truncate">
                                                {post.id}
                                          </h1>
                                    </th>
                                    <td className="w-[0.2] px-6 py-4 truncate">
                                          <h1 className="w-full truncate">
                                                {post.data.jumlahAnggota}
                                          </h1>
                                    </td>
                                    <td className="w-[0.2] px-6 py-4 truncate">
                                          <h1 className="w-full truncate">
                                                {post.data.postedOn}
                                          </h1>
                                    </td>
                              </tr>
                              ))}
                        </tbody>
                  </table>
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
          <ModalHeader>Tambah</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* title */}
            <form className="w-full">
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">Jumlah Anggota</h1>
                  <Input type='number' value={jumlahAnggota} placeholder='title..'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setJumlahAnggota(parseInt(e.target.value)) }
                   />
            </div>
             {/* brief */}
            <div className='my-3 flex-flex-col space-y-2'>
                  <h1 className="text-gray-500 font-light text-lg">Tanggal</h1>
                  <Input type="datetime-local"  
                 value={postedOn} onChange={e => setPostedOn(e.target.value)}
                  />
            </div>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    </ChakraProvider>
  )
}

export default DataUser