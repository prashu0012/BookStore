import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Bookinit={
    title:'',
    description:'',
    genre:'',
    author:'',
}

export default function Form({openForm,rerender}) {
    const [data,setdata]=useState(Bookinit);
    const navigate=useNavigate()
    const handleinput=(e)=>{
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    const submitdata=()=>{
        axios.post('http://localhost:8000/books',data)
        .then((res)=>{
            // console.log(res)
            openForm()
            rerender()
            navigate('/')
        }),(error)=>{
            console.log(error)
        }
    }

    return (
        <div className="max-w-sm mx-auto shadow p-4">
            <div className="mb-5">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" onChange={(e)=>handleinput(e)} id="title" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input type="text" onChange={(e)=>handleinput(e)} id="description" name='description' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-5">
                <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
                <input type="text" onChange={(e)=>handleinput(e)} id="genre" name='genre' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-5">
                <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                <input type="text" onChange={(e)=>handleinput(e)} id="author" name='author' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <button type="submit" onClick={submitdata} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
    )
}
