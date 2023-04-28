import React from 'react'
import { MdOutlineComputer } from 'react-icons/md'
import { BsPhone, BsPhoneVibrate } from 'react-icons/bs'
import {HiOutlineGlobe} from 'react-icons/hi'

const Service = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 text-white mt-[20%] gap-10'>
            <div className='text-center w-full'>
            <div className='flex justify-center items-center'>
                <MdOutlineComputer className=' text-[100px] text-[#0d6efd]   py-3' />
                </div>
                <h1 className='text-[25px] font-bold'>Easy to use</h1>

                <p className='mt-5 text-[#5f5f5f]'>Blaze is a web app, just open it in your browser, join a room,
                    and start sharing. No need to install any specific app,
                    or create an account!</p>
            </div>

            <div className='text-center w-full '>
            <div className='flex justify-center items-center'>
            <BsPhone className='text-[100px] text-[#0d6efd] py-3' />
            </div>
                <h1 className='text-[25px] font-bold'>Multi-device</h1>

                <p className='mt-5 text-[#5f5f5f]'>Blaze is a web app, just open it in your browser, join a room,
                    and start sharing. No need to install any specific app,
                    or create an account!</p>
            </div>

            <div className='text-center w-full'>
            <div className='flex justify-center items-center '>
            <HiOutlineGlobe className='text-[100px] text-[#0d6efd] py-3' />
            </div>
                <h1 className='text-[25px] font-bold'>Anywhere</h1>

                <p className='mt-5 text-[#5f5f5f]'>Blaze is a web app, just open it in your browser, join a room,
                    and start sharing. No need to install any specific app,
                    or create an account!</p>
            </div>

        </div>
    )
}

export default Service