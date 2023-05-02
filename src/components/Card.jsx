import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { FavoriteContext } from '../Context/Favorites'

const Card = ({ id, text, date }) => {
  const { addtofavorites } = useContext(FavoriteContext)
  return (
    <Link to='/share'><div className='sm:p-20 px-10 py-5  border-2 border-[#3a3a43] w-full rounded'>
      <h1 className='text-[20px]'>{text}</h1>
      <div className='bottom-0 mb-2'>
        <small className='mt-20'>{date}</small>
        <div className='top-0'>
          {/*<AiOutlineClose className='float-right mt-[-28px]'/>*/}
        </div>
      </div>
    </div></Link>
  )
}

export default Card