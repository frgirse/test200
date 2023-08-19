"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/images/LogoWA.png"
import { stringify } from 'querystring'

const RegisterPage = () => {

  const router = useRouter()
  const [data, setData] = useState({
    name: "",
    email: "",
    password:""


  })

  const registerUser = async (e) => {
    e.preventDefault()
    const response = await fetch("/api/register",{
method: 'POST',
headers: {
  'Content-Type':'application/json'
  },
body: JSON.stringify({data})
    })

const userInfo = await response.json()
console.log(userInfo)
router.push('/login')
  }

  return (
    <>
    <div className=" bg-stone-600 flex w-1/3 mx-auto min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm rounded-xl">
      <Image
        className="mx-auto h-20 w-auto border-2 border-amber-400"
        src={Logo}
        alt="Your Company"
        width="400"
        height="300"
      />
      <h2 className="mt-10 text-center text-2xl font-primary leading-9 tracking-tight text-gray-100">
      Registrieren (Account anlegen)
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
      <form className="space-y-6" action="#" method="POST">
      <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">
              Benutzername
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-gray-300 hover:text-red-500">
            
              </a>
            </div>
          </div>
          <div className="mt-2">
          <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={data.name}
                    onChange={e => setData({ ...data, name: e.target.value })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
          </div>
        </div>
        <div>

          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
            Email address
          </label>
          <div className="mt-2">
          <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-gray-300 hover:text-red-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
          <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={data.password}
                    onChange={e => setData({ ...data, password: e.target.value })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
          </div>
        </div>

        <div>
            
          <button
            type="submit"
             
            className="flex w-full justify-center rounded-md from-amber-600 via-white-500 to-yellow-500 bg-gradient-to-r hover:border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        c  >
            Registrieren
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Start a 14 day free trial
        </a>
      </p>
    </div>
  </div>
</>
  )
}
export default RegisterPage