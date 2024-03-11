"use client"
import { useUser } from "@/lib/auth"
import { redirect } from "next/navigation";
import { ReactNode } from "react"
import {GridLoader} from "react-spinners"

export default function Layout({children}: {children: ReactNode}) {
      const user = useUser();
      if(user === false) return <div className="w-screen h-screen bg-white flex flex-col space-y-4 items-center justify-center"><GridLoader color="#FDA403" /><h1 className="text-lg font-semibold text-gray-500">Securing..</h1></div>
      if(!user) return redirect("/login")
      return children;
}