import React from 'react'
import axios from 'axios'

export default function Card({ books,rerender, openupdateForm,handleid }) {
    
    const handle=()=>{
        openupdateForm();
        handleid(books._id)
    }
    const ondelete = () => {
        axios.delete(`https://lavender-caterpillar-tie.cyclic.app/books/${books._id}`)
        .then((res) => {
            alert("done!")
            rerender()
        }), (error) => {
            alert(error)
        }
    }

    return (
        <div className="block m-2 w-80 p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex justify-between">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{books.title}</h5>
                <div>
                    <button onClick={handle}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    </button>
                    <button onClick={ondelete}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-600">
                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                    </svg>
                    </button>
                </div>
            </div>
            <span className='text-gray-400 text-sm'>Genre: {books.genre}</span>
            <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">{books.description}</p>
            <span className='text-gray-400 text-sm'>Author: {books.author}</span>
        </div>

    )
}
