import React, { useContext } from 'react'
import { Navbar3, BottomIcon, Card, Button } from '../components'
import { MdSupportAgent } from 'react-icons/md'


const Help = () => {

  return (
    <div className=' text-white'>
      <div className='w-full flex justify-between p-5 text-white fixed bg-[#000026]'>
        <Navbar3 />
      </div>


      <div className='mt-20 absolute sm:p-20 p-5 sm:text-[40px] text-[30px]'>
        <h1>How to use Blaze</h1>
      </div>

      <div className='flex justify-center items-center bg-none'>
        <MdSupportAgent className='text-[170px] text-[#0d6efd] sm:mt-[50%] mt-[130%] bg-none absolute'/>
      </div>
    
     <div>
        <h1 className='text-center  text-[#5f5f5f] mt-[100%] z-10'>Details on how to use blaze coming soon.</h1>

      </div>


      <BottomIcon />

    </div>
  )
}

export default Help
