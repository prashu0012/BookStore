import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './card'
import { Link } from 'react-router-dom';
import Form from './addbook';
import Update from './update';

export default function Home() {

    const [books, setbooks] = useState([]);
    const [id,setid]=useState()
    const [trigger, settrigger] = useState('false')
    const [form, showform] = useState('false')
    const [updateForm, showUpdateForm] = useState('false')
    const openForm = () => {
        showform(prevState => !prevState)
    }
    const openupdateForm = () => {
        showUpdateForm(prevState => !prevState)
    }
    const rerender = () => {
        settrigger(prevState => !prevState)
    }
    const handleid=(id)=>{
        setid(id)
    }
    useEffect(() => {
        axios.get('https://lazy-red-ladybug-hose.cyclic.app/books')
            .then((res) => {
                setbooks(res.data);
            }), (error) => {
                alert(error);
                Promise.reject(error);
            }
    }, [trigger])

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BookStore</span>
                    </a>
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className=" w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to='/' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <div onClick={openForm} className="block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Book</div>
                            </li>
                            <li>
                                <Link to='/' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="relative">
                {/* add books */}
                {
                    (form) ? ""
                        : <Form openForm={openForm} rerender={rerender} />
                }
                {/* update */}
                {
                    (updateForm) ? "" : <Update id={id} />
                }

                {/* all books */}
                <h1 className='text-center text-gray-800 text-3xl font-bold mt-20 mb-10'>All Books</h1>
                <div className='flex mx-auto flex-wrap w-2/3 justify-center md:justify-large lg:justify-start'>
                    {
                        books.length ? books.map((book) => (
                            <Card key={book._id} books={book} rerender={rerender} openupdateForm={openupdateForm} handleid={handleid} />
                        )) : <h3 className='text-red-500'>No data</h3>
                    }
                </div>
            </div>
        </>
    )
}
