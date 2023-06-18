import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Card = ({ id, text, date ,handleDeleteCard}) => {
  return (
    <div className='sm:p-20 px-10 py-3  border-2 border-[#3a3a43] w-full rounded hover:border-[#1dc071] mt-3'>
      <Link to={`/share/${text}`}><h1 className='sm:text-[20px] text-[17px]'>{text}</h1>
      <div className='bottom-0 mb-2'>
        <small className='mt-20 text-[#5f5f5f]'>{date}</small>
        
      </div></Link>
      <div className='top-0'>
          <AiOutlineClose className='text-[#5f5f5f] float-right mt-[-35px]' onClick={()=> handleDeleteCard(id)}/>
        </div>
    </div>
  )
}

export default Card
