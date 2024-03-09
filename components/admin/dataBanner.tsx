import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import { db } from '../../firebase';
import Image from 'next/image';
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

interface BannerItem {
      id: string;
      data: {
        name: string;
        url: string;
        role: string;
      };
    }

interface DataBannerProps {
      currentItems: BannerItem[];
      onDelete: (id: string) => void;
}

function DataBanner({ currentItems, onDelete }: DataBannerProps) {
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [isLoading, setIsLoading] = useState<boolean>(false)
      const [idToDelete, setIdToDelete] = useState<string>("")
      const [progress, setProgress] = useState<boolean>(false)

      const handleDeleteClick = (id: string) => {
            setIdToDelete(id);
            setIsLoading(true)
            onOpen();
          };
      const handleDelete = async (id: string) => {
            setProgress(true)
            try {
              await deleteDoc(doc(db, 'images', id));
              onDelete(id);
              onClose()
              setIsLoading(false)
              setProgress(false)
            } catch (error) {
              console.error('Error deleting document: ', error);
            }
          };
  return (
      <ChakraProvider>
      <div className='min-h-[90vh] w-full flex flex-col space-y-4'>
      {currentItems &&
        currentItems.map(item => (
          <div key={item.id} className='w-[90%] mx-auto rounded-xl bg-white h-[240px] space-x-4 flex justify-between'>
            <Image src={item.data.url} alt={item.data.name} width={200} height={200} className="h-full rounded-xl w-[300px] object-cover" />
            <div className='flex-1 h-full mt-6'>
                  <h3 className="text-gray-600 text-lg text-justify"><span className='font-semibold'>token:</span>{item.data.name}</h3>
            </div>
            <div className='flex-[0.3] h-full p-4 flex items-end justify-end'>
                  <button onClick={()=>handleDeleteClick(item.id)} className='bg-red-400 ring-2 ring-red-200 w-[50%] h-[45px] hover:bg-red-200 rounded-lg text-white'>delete</button>
            </div>
          </div>
        ))}
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
  );
}

interface PaginatedItemsProps {
  itemsPerPage: number;
}

function BannerPaginatedItems({ itemsPerPage }: PaginatedItemsProps) {
      const [itemOffset, setItemOffset] = useState(0);
      const [fullGallery, setFullGallery] = useState<BannerItem[]>([]);
    
      useEffect(() => {
        const getFullGallery = async () => {
          const articlesCollection = collection(db, 'images');
          const latestSnapshot = query(
            articlesCollection,
            where('role', '==', 'banner'),
            orderBy('createdAt', 'desc')
          );
          const querySnapshot = await getDocs(latestSnapshot);
          setFullGallery(
            querySnapshot.docs.map((doc) => {
              return {
                id: doc.id,
                data: {
                  name: doc.data().name,
                  url: doc.data().url,
                  role: doc.data().role,
                },
              };
            })
          );
        };
        getFullGallery();
      }, []);

      const endOffset = itemOffset + itemsPerPage;
      const currentItems = fullGallery.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(fullGallery.length / itemsPerPage);

      const handlePageClick: ReactPaginateProps['onPageChange'] = (selectedItem) => {
            const newOffset = (selectedItem.selected * itemsPerPage) % fullGallery.length;
            setItemOffset(newOffset);
      };
      const handleDeleteItem = (id: string) => {
            setFullGallery((prevGallery) => prevGallery.filter((item) => item.id !== id));
      };
        

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination flex justify-center"
      activeClassName="active"
      previousLinkClassName="border bg-white flex items-center justify-center rounded-lg w-[110px] h-[40px] mr-2"
      nextLinkClassName="border bg-white flex items-center justify-center rounded-lg w-[110px] h-[40px] ml-2"
      pageClassName="border bg-white flex items-center justify-center rounded-lg w-[40px] h-[40px] mx-1"
      activeLinkClassName="text-white bg-blue-400 w-[40px] h-[40px] rounded-lg flex items-center justify-center ease-in transition-all duration-400 outline-[5px] outline-blue-100 "
      />
      
      <DataBanner currentItems={currentItems} onDelete={handleDeleteItem} />
    </>
  );
}

export default BannerPaginatedItems;