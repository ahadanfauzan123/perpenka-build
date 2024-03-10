"use client"
import React, {useState} from 'react'
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth"
import { auth } from '../../../../firebase'
import { redirect, useRouter } from 'next/navigation'



function LoginAdmin() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
    const router = useRouter()
    const handleSignIn = async () => {
        try {
            const res = await signInWithEmailAndPassword(email, password);
            console.log({res})
            setEmail('')
            setPassword('')
            if(res === undefined) {
                router.push("/admin/adminLogin")
            } else {
                router.push("/admin/dashboard")
            }
        } catch (e) {
            console.error(e)
        }
    }
  return (
      <div className="font-sans text-gray-900 antialiased">
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#f8f4f3]">
                <div>
                    <h2 className="font-bold text-3xl uppercase">perpenka <span className="bg-orange-400 text-white px-2 rounded-md">admin</span></h2>
                    
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <div>

                        <div className="py-8">
                            <center>
                                <span className="text-2xl font-semibold">Log In</span>
                            </center>
                        </div>

                        <div>
                            <label className="block font-medium text-sm text-gray-700"  />
                            <input type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                name='email'
                                placeholder='Email'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-200" />                        
                        </div>


                        <div className="mt-4">
                            <label className="block font-medium text-sm text-gray-700" />
                            <div className="relative">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" name="password" placeholder="Password" required  className = 'w-full rounded-md py-2.5 px-4 border text-sm outline-blue-200' />
                            </div>
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <input type="checkbox" id="remember_me" name="remember" className= 'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500' />
                                <span className="ms-2 text-sm text-gray-600">Remember Me</span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                                {/* <a className="hover:underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('password.request') }}">
                                    Forgot your password?
                                </a> */}

                            <button onClick={handleSignIn} className= 'ms-4 inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>
                                Sign In
                            </button>

                        </div>
                        
                    </div>                
                </div>
            </div>
        </div>
  );
}

export default LoginAdmin