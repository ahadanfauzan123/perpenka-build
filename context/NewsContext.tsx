"use client"
import { createContext, useState, ReactNode, useEffect } from "react";
import {collection, getDocs, setDoc ,doc, limit, orderBy,query, where} from 'firebase/firestore'
import {db} from '../firebase'

type NewsContextType = {
      users: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      posts: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      agendas: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      dashboardPost: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      galleryDashboard: any[]; // Sesuaikan dengan tipe data yang sebenarnya
      fullGallery: any[]; // Sesuaikan dengan tipe data yang sebenarnya
  }
  
  const initialContext: NewsContextType = {
      users: [],
      posts: [],
      agendas: [],
      dashboardPost: [],
      galleryDashboard: [],
      fullGallery: [],
  }
  
  const NewsContext = createContext<NewsContextType>(initialContext);
  
  type NewsProviderProps = {
      children: ReactNode;
  }
const NewsProvider = ({children}: NewsProviderProps) => {
      const [users, setUsers] = useState<any[]>([])
      const [posts, setPosts] = useState<any[]>([])
      const [agendas, setAgendas] = useState<any[]>([])
      const [dashboardPost, setDashboardPost] = useState<any[]>([])
      const [galleryDashboard, setGalleryDashboard] = useState<any[]>([])
      const [fullGallery, setFullGallery] = useState<any[]>([])
      
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
                  const querySnapshot = await getDocs(collection(db, 'agenda'));
                  setAgendas(querySnapshot.docs.map(doc => {
                        return {
                              id: doc.id,
                              data: {
                                    name: doc.data().name,
                                    description: doc.data().description,
                                    startDate: doc.data().startDate.toDate().toLocaleString('id-ID'),
                                    DueDate: doc.data().DueDate.toDate().toLocaleString('id-ID'),//mark
                              }
                        }
                  }))
            }
            getAgenda()

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
                                    postedOn: doc.data().postedOn.toDate().toLocaleString("id-ID"),
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
return (
      <NewsContext.Provider value={{ fullGallery,posts,users,agendas, dashboardPost, galleryDashboard }}>
            {children}
      </NewsContext.Provider>
)
}


export {NewsContext, NewsProvider}