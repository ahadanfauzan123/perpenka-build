"use client"
import { useUser } from "@/lib/auth"
import { redirect } from "next/navigation";
import { ReactNode } from "react"

export default function Layout({children}: {children: ReactNode}) {
      const user = useUser();
      if(user === false) return <>Auth Loading...</>
      if(!user) return redirect("/login")
      return children;
}