"use client"
import React, { ChangeEvent, DragEvent, FormEvent, useRef, useState, useEffect } from 'react'
import Sidebar from '../../../../../components/admin/sidebar';
import Topbar from '../../../../../components/admin/topbar';
import Image from 'next/image';

import  {getDownloadURL, ref,   uploadBytesResumable, UploadTaskSnapshot} from 'firebase/storage'
import { collection,addDoc, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../../../../../firebase';
import {v4 as uuidv4 } from "uuid"
import { LuUploadCloud } from 'react-icons/lu';
import {
      Input,
      Text,
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
      Textarea,
    } from '@chakra-ui/react'
    import { useAuthState } from 'react-firebase-hooks/auth'
    import { useRouter } from 'next/navigation'
    import { auth } from '../../../../../firebase'


function AddNews() {
      const [user] = useAuthState(auth)
      const router = useRouter()

      useEffect(() => {
            if (!user) {
              router.push("/");
            } else {
              console.log(user);
            }
      }, [user, router]);
      const [title, setTitle] = useState<string>('');
      const [body, setBody] = useState<string>('');
      const [brief, setBrief] = useState<string>('');
      const [author, setAuthor] = useState<string>('');
      const [postLength, setPostLength] = useState<string>('');
      const [category, setCategory] = useState<string>('');
      const [urlVideo, setUrlVideo] = useState<string>('');
      const [image, setImage] = useState<File | null>(null);
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
      const [isLoading, setIsLoading] = useState<boolean>(false)
      const [progressValue, setProgressValue] = useState<number>(0)
      

      const inputRef = useRef<HTMLInputElement>(null);

      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
            event.preventDefault();
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
      

      const addPostToFirebase = async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()
                  if(image) {
                        setIsLoading(true)
                        const fileId = uuidv4()
                        const formatFile = image.type.split('/')[1];
                        const storageRef = ref(storage, `articles/${fileId}.${formatFile}`);
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
                                    try {
                                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                                        await addDoc(collection(db, "articles"), {
                                            bannerImage: downloadURL,
                                            body: body,
                                            category: category,
                                            brief: brief,
                                            title: title,
                                            postLength: postLength,
                                            author: author,
                                            postedOn: serverTimestamp(),
                                            urlVideo: urlVideo
                                        });
                                        setTitle('');
                                        setBody('');
                                        setBrief('');
                                        setAuthor("");
                                        setCategory("");
                                        setPostLength("");
                                        setUrlVideo("");
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
      <ChakraProvider>
      <div className='w-screen min-h-screen bg-blue-100 flex text-gray-600'>
            {/* sidebar */}
            <Sidebar />
            <div className="w-full xl:w-[80%] min-h-screen ml-auto flex flex-col">
                  {/* topbar */}
                  <Topbar />
                  {/* body */}
            <form onSubmit={addPostToFirebase} className='pt-[120px] mb-[200px] min-h-[calc(100vh-90px)] w-[80%] mx-auto flex flex-col space-y-5 '>
            <div className='flex items-center space-x-3'>
                  <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                  <h1 className='text-gray-600 text-3xl font-extrabold'>Add News</h1>
            </div>
            <div 
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="flex items-center justify-center w-[60%]">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 bg-white border-4 border-gray-300 border-dashed rounded-lg cursor-pointer">
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
            
             {/*title  */}
            <div className="bg-white p-4 rounded-xl h-[100px]">
                  <Text mb='8px'>title</Text>
                  <Input
                  value={title}
                  placeholder='title..'
                  className=' w-[300px] h-[60px] rounded-lg bg-white border-0 outline-0 ring-0'
                  size='sm'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                  />
            </div>
            {/* brief */}
            <div className="bg-white p-4 rounded-xl h-[100px]">
                  <Text mb='8px'>brief</Text>
                  <Input
                  value={brief}
                  placeholder='brief..'
                  size='sm'
                  className=' w-[300px] h-[60px] rounded-lg bg-white border-0 outline-0 ring-0'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBrief(event.target.value)}
                  />
            </div>
            {/* category */}
            <div className="bg-white p-4 rounded-xl h-[100px]">
                  <Text mb='8px'>category</Text>
                  <Input
                  value={category}
                  placeholder='category..'
                  size='sm'
                  className=' w-[300px] h-[60px] rounded-lg bg-white border-0 outline-0 ring-0'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCategory(event.target.value)}
                  />
            </div>
            {/* author */}
            <div className="bg-white p-4 rounded-xl h-[100px]">
                  <Text mb='8px'>author</Text>
                  <Input
                  value={author}
                  placeholder='author..'
                  size='sm'
                  className=' w-[300px] h-[60px] rounded-lg bg-white border-0 outline-0 ring-0'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAuthor(event.target.value)}
                  />
            </div>
            {/* body */}
            <div className="bg-white p-4 rounded-xl min-h-[200px]">
                  <Text mb='8px'>body</Text>
                  <Textarea
                  value={body}
                  placeholder='body..'
                  size='sm'
                  className=' w-[300px] h-[60px] rounded-lg bg-white border-0 outline-0 ring-0'
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setBody(event.target.value)}
                  />
            </div>
            {/* post length */}
            <div className="bg-white p-4 rounded-xl h-[100px]">
                  <Text mb='8px'>Durasi Baca</Text>
                  <Input
                  value={postLength}
                  placeholder='durasi..'
                  size='sm'
                  className=' w-[300px] h-[60px] rounded-lg bg-white border-0 outline-0 ring-0'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPostLength(event.target.value)}
                  />
            </div>
            {/* url video */}
            <div className="bg-white p-4 rounded-xl h-[100px]">
                  <Text mb='8px'>Link Youtube(optional)</Text>
                  <Input
                  value={urlVideo}
                  placeholder='link..'
                  size='sm'
                  className=' w-[300px] h-[60px] rounded-lg bg-white border-0 outline-0 ring-0'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUrlVideo(event.target.value)}
                  />
            </div>
            {title && body ? (
                  <button type='submit' className="w-full py-3 flex items-center justify-center bg-blue-400 text-lg text-white rounded-xl">submit</button>

            ): (
                  <></>
            )}
            </form>
</div>
</div>
{/* modal */}
<Modal isOpen={isLoading} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>File is under way..</ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody className="flex items-center justify-center my-[18px]">
            <CircularProgress size="80px" value={progressValue} color='green.400' thickness='9px' />
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
</ChakraProvider>
  )
}

export default AddNews