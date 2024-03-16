import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { API } from '../../services/api.js'


const signupInit = {
    name: '',
    username: '',
    email: '',
    password: '',
}

const loginInit = {
    username: '',
    password: '',
}

export default function Login({ isUserAuthenticated }) {

    const [err, setError] = useState("")
    const [signup, setsignup] = useState(signupInit)
    const [login, setlogin] = useState(loginInit)
    const [account, setaccount] = useState('login')
    const navigate = useNavigate()

    // useEffect(() => {
    //     setError("")
    // }, [])

    const toggleaccount = () => {
        account === 'login' ? setaccount('signup') : setaccount('login')
    }

    const onsigninChange = (e) => {
        setsignup({ ...signup, [e.target.name]: e.target.value })
    }
    const onloginChange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value })
        // console.log(login)
    }

    const signupUser = async () => {
        try {
            const response = await API.userSignup(signup);
            if (response.isSuccess) {
                setError("")
                setsignup(signupInit)
                toggleaccount('login')
            }
        } catch (error) {
            // setError(error)
            console.log(error)
            // return;
        }
    }

    const loginUser = async () => {
        console.log("called...!")
        try {
            const response = await API.userLogin(login);
            if (response.isSuccess) {
                isUserAuthenticated(true)
                setError("")
                navigate('/')   
            }
        } catch (error) {
            setError(error)
            console.log(error)
            // return;
        }
    }

    return (
        <div className='container flex justify-center mx-auto my-20'>
            {/* <img src={loginImg} alt="" className="img w-96 rounded-l-lg bg-cover hidden lg:block" /> */}
            <div className="login">
                <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 width border rounded-r-lg w-full">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-5xl text-green-800 font-bold leading-9 tracking-tight text-gray-900 title">Socialcord</h2>
                    </div>
                    {/* login */}
                    {
                        account === 'login' ? <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-800">Username</label>
                                    <div className="mt-2">
                                        <input id="username" name="username" onChange={(e) => onloginChange(e)} type="text" autoComplete="username" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-800">Password</label>
                                    </div>
                                    <div className="mt-2">
                                        <input id="password" name="password" onChange={(e) => onloginChange(e)} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <span className='text-center block text-red-500 font-semibold'>{err}</span> 
                                    <button type="submit" onClick={() => loginUser()} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                                </div>
                            </div>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Not a member?
                                <span onClick={() => toggleaccount()} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"> Sign up</span>
                            </p>
                        </div>
                            :
                            // signup
                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                        <div className="">
                                            <input id="name" name="name" type="text" autoComplete="name" onChange={(e) => onsigninChange(e)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                        <div className="">
                                            <input id="username" name="username" type="text" autoComplete="username" onChange={(e) => onsigninChange(e)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                        <div className="">
                                            <input id="email" name="email" type="text" autoComplete="email" onChange={(e) => onsigninChange(e)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                        </div>
                                        <div className="">
                                            <input id="password" name="password" type="password" autoComplete="current-password" onChange={(e) => onsigninChange(e)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div>
                                        {/* {err} */}
                                        <button type='submit' onClick={() => signupUser()} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                                    </div>
                                </div>

                                <p className="mt-10 text-center text-sm text-gray-500">
                                    Already have account?
                                    <span onClick={() => toggleaccount()} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"> Login</span>
                                </p>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
