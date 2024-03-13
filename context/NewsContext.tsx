"use client"
import { createContext, useState, ReactNode, useEffect } from "react";
import {collection, getDocs, setDoc ,doc, limit, orderBy,query, where, and} from 'firebase/firestore'
import {db} from '../firebase'

type NewsContextType = {
      users: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      posts: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      agendas: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      futureAgendas: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      dashboardPost: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      galleryDashboard: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      fullGallery: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      bannerDashboard: any[];
      strukturImage: any[];
      dppImage: any[];
      dataListAnggota: any[];
      singleDataListAnggota: any[];
  }
  
  const initialContext: NewsContextType = {
      users: [],
      posts: [],
      agendas: [],
      futureAgendas: [],
      dashboardPost: [],
      galleryDashboard: [],
      fullGallery: [],
      bannerDashboard: [],
      strukturImage: [],
      dppImage: [],
      dataListAnggota: [],
      singleDataListAnggota: [],
  }
  
  const NewsContext = createContext<NewsContextType>(initialContext);
  
  type NewsProviderProps = {
      children: ReactNode;
  }
const NewsProvider = ({children}: NewsProviderProps) => {
      const [users, setUsers] = useState<any[]>([])
      const [posts, setPosts] = useState<any[]>([])
      const [agendas, setAgendas] = useState<any[]>([])
      const [futureAgendas, setFutureAgendas] = useState<any[]>([])
      const [dashboardPost, setDashboardPost] = useState<any[]>([])
      const [galleryDashboard, setGalleryDashboard] = useState<any[]>([])
      const [fullGallery, setFullGallery] = useState<any[]>([])
      const [bannerDashboard, setBannerDashboard] = useState<any[]>([])
      const [strukturImage, setStrukturImage] = useState<any[]>([])
      const [dppImage, setDppImage] = useState<any[]>([])
      const [dataListAnggota, setDataListAnggota] = useState<any[]>([])
      const [singleDataListAnggota, setSingleDataListAnggota] = useState<any[]>([])
      
      useEffect(() => {
            const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'));
            setUsers(querySnapshot.docs.map(doc => {
                  return {
                        id:doc.id,
                        data: {
                              ...doc.data()
                        }
                  }
            }));

      }
      
      getUsers()
      }, [])
      useEffect(() => {
            const getAgenda = async () => {
                  const futureAgendaCollection = collection(db, 'agenda');
                  const latestSnapshot = await query(futureAgendaCollection,
                        orderBy('startDate', 'asc'))
                  const querySnapshot = await getDocs(latestSnapshot)
                  setAgendas(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    name: doc.data().name,
                                    description: doc.data().description,
                                    startDate: doc.data().startDate.toDate().toLocaleString('id-ID' , {
                                          year:"numeric",
                                          month: "long",
                                          day: "numeric"
                                    }),
                                    DueDate: doc.data().DueDate.toDate().toLocaleString('id-ID' , {
                                          year:"numeric",
                                          month: "long",
                                          day: "numeric"
                                    }),//mark
                              }
                        }
                  }))
            }
            getAgenda()

      }, [])
      useEffect(() => {
            const getFutureAgendas = async () => {
                  const futureAgendaCollection = collection(db, 'agenda');
                  const latestSnapshot = await query(futureAgendaCollection,
                        where("startDate", ">=", new Date()),
                        orderBy('startDate', 'asc'),
                        limit(3))
                  const querySnapshot = await getDocs(latestSnapshot)
                  setFutureAgendas(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    name: doc.data().name,
                                    description: doc.data().description,
                                    startDate: doc.data().startDate.toDate().toLocaleDateString('id-ID' , {
                                          year:"numeric",
                                          month: "long",
                                          day: "numeric"
                                    }),
                                    DueDate: doc.data().DueDate.toDate().toLocaleDateString('id-ID' , {
                                          year:"numeric",
                                          month: "long",
                                          day: "numeric"
                                    }),//mark
                              }
                        }
                  }))
            }
            getFutureAgendas()

      }, [])
      useEffect(() => {
            const getPosts = async () => {
                  const articlesCollection = collection(db, 'articles');
                  const latestSnapshot = await query(articlesCollection,
                        orderBy('postedOn', 'desc'))
                  const querySnapshot = await getDocs(latestSnapshot)
                  setPosts(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    body: doc.data().body,
                                    brief: doc.data().brief,
                                    category: doc.data().category,
                                    bannerImage: doc.data().bannerImage,
                                    title: doc.data().title,
                                    postedOn: doc.data().postedOn.toDate().toLocaleString("id-ID", {
                                          year:"numeric",
                                          month: "long",
                                          day: "numeric"
                                    }),
                                    author: doc.data().author,
                              }
                        }
                  }))
            }
            getPosts()

      }, [])
      useEffect(() => {
            const getDashBoardPosts = async () => {
                  const articlesCollection = collection(db, 'articles');
                  const latestSnapshot = await query(articlesCollection,
                        orderBy('postedOn', 'desc'),
                        limit(3))
                  const querySnapshot = await getDocs(latestSnapshot);
                  setDashboardPost(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    body: doc.data().body,
                                    brief: doc.data().brief,
                                    category: doc.data().category,
                                    bannerImage: doc.data().bannerImage,
                                    title: doc.data().title,
                                    postedOn: doc.data().postedOn,
                                    author: doc.data().author,
                              }
                        }
                  }))
            }
            getDashBoardPosts()

      }, [])
      useEffect(() => {
            const getGalleryDashboard = async () => {
                  const articlesCollection = collection(db, 'images');
                  const latestSnapshot = await query(articlesCollection,
                        where('role', '==' , 'gallery'),
                        orderBy('createdAt', 'desc'),
                        limit(10))
                  const querySnapshot = await getDocs(latestSnapshot);
                  setGalleryDashboard(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    name: doc.data().name,
                                    url: doc.data().url,
                                    role: doc.data().role,
                              }
                        }
                  }))
            }
            getGalleryDashboard()

      }, [])
      useEffect(() => {
            const getFullGallery = async () => {
                  const articlesCollection = collection(db, 'images');
                  const latestSnapshot = await query(articlesCollection,
                        where('role', '==' , 'gallery'),
                        orderBy('createdAt', 'desc'))
                  const querySnapshot = await getDocs(latestSnapshot);
                  setFullGallery(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    name: doc.data().name,
                                    url: doc.data().url,
                                    role: doc.data().role,
                              }
                        }
                  }))
            }
            getFullGallery()

      }, [])
      // bannerDashboard
      useEffect(() => {
            const getBannerDashboard = async () => {
                  const bannerCollection = collection(db, 'images');
                  const latestSnapshot = await query(bannerCollection,
                        where('role', '==' , 'banner'),
                        orderBy('createdAt', 'desc'),
                        limit(3))
                  const querySnapshot = await getDocs(latestSnapshot);
                  setBannerDashboard(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    name: doc.data().name,
                                    url: doc.data().url,
                                    role: doc.data().role,
                              }
                        }
                  }))
            }
            getBannerDashboard()

      }, [])
      // struktur image
      useEffect(() => {
            const getStrukturImage = async () => {
                  const strukturCollection = collection(db, 'images');
                  const latestSnapshot = await query(strukturCollection,
                        where('role', '==' , 'struktur'),
                        where("name", "!=", "dpp"),
                        orderBy('name', 'asc'))
                  const querySnapshot = await getDocs(latestSnapshot);
                  setStrukturImage(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    name: doc.data().name,
                                    url: doc.data().url,
                                    role: doc.data().role,
                              }
                        }
                  }))
            }
            getStrukturImage()

      }, [])
      // dppImage
      useEffect(() => {
            const getDppImage = async () => {
                  const dppCollection = collection(db, 'images');
                  const latestSnapshot = await query(dppCollection,
                        where('role', '==' , 'struktur'),
                        where("name", "==", "dpp"),
                        orderBy('name', 'asc'))
                  const querySnapshot = await getDocs(latestSnapshot);
                  setDppImage(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    name: doc.data().name,
                                    url: doc.data().url,
                                    role: doc.data().role,
                              }
                        }
                  }))
            }
            getDppImage()

      }, [])
      // get list data anggota
      useEffect(() => {
            const getDataListAnggota = async () => {
                  const anggotaCollection = collection(db, 'anggota');
                  const latestSnapshot = await query(anggotaCollection,
                        orderBy('postedOn', 'desc'))
                  const querySnapshot = await getDocs(latestSnapshot);
                  setDataListAnggota(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    jumlahAnggota: doc.data().jumlahAnggota,
                                    postedOn: doc.data().postedOn.toDate().toLocaleDateString("id-ID", {
                                          year:"numeric",
                                          month: "long",
                                          day: "numeric"
                                    }),
                              }
                        }
                  }))
            }
            getDataListAnggota()

      }, [])
      // get single data anggota
      useEffect(() => {
            const getDataListAnggota = async () => {
                  const anggotaCollection = collection(db, 'anggota');
                  const latestSnapshot = await query(anggotaCollection,
                        orderBy('postedOn', 'desc'),
                        limit(1))
                  const querySnapshot = await getDocs(latestSnapshot);
                  setSingleDataListAnggota(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    jumlahAnggota: doc.data().jumlahAnggota,
                                    postedOn: doc.data().postedOn.toDate().toLocaleDateString("id-ID", {
                                          year:"numeric",
                                          month: "long",
                                          day: "numeric"
                                    }),
                              }
                        }
                  }))
            }
            getDataListAnggota()

      }, [])
return (
      <NewsContext.Provider value={{ singleDataListAnggota, dataListAnggota, dppImage, bannerDashboard, strukturImage, futureAgendas,fullGallery,posts,users,agendas, dashboardPost, galleryDashboard }}>
            {children}
      </NewsContext.Provider>
)
}


export {NewsContext, NewsProvider}