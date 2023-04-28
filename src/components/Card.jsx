import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'

const Card = ({ id, text, date }) => {
  return (
    <Link to='/share'><div className='sm:p-20 p-10 border border-[#3a3a43] w-full rounded'>
      <h1 className='text-[20px]'>{text}</h1>
      <div className='bottom-0 mb-2'>
        <small className='mt-20'>{date}</small>
      </div>
    </div></Link>
  )
}

export default Card