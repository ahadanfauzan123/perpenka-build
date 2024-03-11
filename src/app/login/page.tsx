"use client"
import React, {useState} from 'react'

import { signIn } from '@/lib/auth';
import { useRouter, useSearchParams } from 'next/navigation';



function Login() {
      const router = useRouter();
      const searchParams = useSearchParams();
      const continueTo = searchParams.get("continueTo") ?? "/admin/dashboard";
      
      async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
            event.preventDefault();
            const form = event.currentTarget;
            const username = form.username.value;
            const password = form.password.value;
            const rememberMe = form.rememberMe.checked;
            try {
                  await signIn(username, password, rememberMe);
                  router.replace(continueTo)
            } catch (e) {
                  console.error(e);
            }
      }
    
  return (
      <div className="font-sans text-gray-900 antialiased">
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#f8f4f3]">
                <div>
                    <h2 className="font-bold text-3xl uppercase">perpenka <span className="bg-orange-400 text-white px-2 rounded-md">admin</span></h2>
                    
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <form onSubmit={handleSubmit}>

                        <div className="py-8">
                            <center>
                                <span className="text-2xl font-semibold">Log In</span>
                            </center>
                        </div>

                        <div>
                            <label className="block font-medium text-sm text-gray-700"  />
                            <input type='email'
                                name='username'
                                id="username"
                                placeholder='Email'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-200" />                        
                        </div>


                        <div className="mt-4">
                            <label className="block font-medium text-sm text-gray-700" />
                            <div className="relative">
                                <input id="password" type="password" name="password" placeholder="Password" required  className = 'w-full rounded-md py-2.5 px-4 border text-sm outline-blue-200' />
                            </div>
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <input type="checkbox" id="rememberMe" name="rememberMe" className='rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500' />
                                <span className="ms-2 text-sm text-gray-600">Remember Me</span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">

                            <button type='submit' className= 'ms-4 inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>
                                Sign In
                            </button>

                        </div>
                        <pre>next: {continueTo}</pre>
                        
                    </form>                
                </div>
            </div>
        </div>
  );
}

export default Login