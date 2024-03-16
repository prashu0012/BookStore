import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Bookinit={
    title:'',
    description:'',
    genre:'',
    author:'',
}

export default function Update({id}) {
    const [data, setdata] = useState(Bookinit);
    useEffect(() => {
        axios.get(`https://lavender-caterpillar-tie.cyclic.app/books/${id}`,{
            header: {
                "Accept": "application/json, form-data",
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                setdata(res.data);
            }), (error) => {
                alert(error);
                Promise.reject(error);
            }
    }, [])

    const Update=()=>{
        axios.put(`https://lavender-caterpillar-tie.cyclic.app/books/${id}`,data,{
            header: {
                "Accept": "application/json, form-data",
                "Content-Type": "application/json"
            }
        })
        .then((res)=>{
            alert("Done!")
        }),(error)=>{
            console.log(error)
            Promise.reject(error)
        }
    }
    const handleinput = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }
    
    return (
        <div className="max-w-sm mx-auto shadow p-4">
            <div className="mb-5">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" onChange={(e) => handleinput(e)} id="title" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.title?data.title:" "} required />
            </div>
            <div className="mb-5">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input type="text" onChange={(e) => handleinput(e)} id="description" name='description' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.description?data.description:" "} required />
            </div>
            <div className="mb-5">
                <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
                <input type="text" onChange={(e) => handleinput(e)} id="genre" name='genre' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.genre?data.genre:" "} required />
            </div>
            <div className="mb-5">
                <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                <input type="text" onChange={(e) => handleinput(e)} id="author" name='author' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={data.author?data.author:" "} />
            </div>

            <button type="submit" onClick={Update} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
    )
}
