import React from 'react'

const Search = ({ handleSearch }) => {
    return (
        <div className='sm:mt-20 mt-10'>
            <input className='w-full border border-[#3a3a43] bg-transparent h-[40px] px-5 rounded-[100px] outline-none' placeholder='Search rooms' onChange={(e) =>
                handleSearch(e.target.value)} />
        </div>
    )
}

export default Search