import React, { useState } from 'react'
import { Button, Navbar2, Navbar3 } from '../components'
import { RxDashboard } from 'react-icons/rx'
import { BiCog } from 'react-icons/bi'
import { AiFillGift, AiOutlineHeart } from 'react-icons/ai'

const Share = () => {
    const [loading, setLoading] = useState(false)
    return (
        <div className='text-white'>
            <div className='w-full flex justify-between p-5 text-white fixed bg-[#000026]'>
                <Navbar3 />
            </div>

            <div className=' bottom-0 p-10'>
                <input type='file' placeholder='Choose files' className='mt-20' />
            </div>




            <div className='bottom-0 fixed items-center text-center flex justify-center sm:pb-10 pb-[90px] p-10'>
                <Button
                    title={loading ? (
                        'Sending...'
                    ) : (
                        'Send File'
                    )}
                    styles={loading ? (
                        'bg-[#1dc071]  px-5 py-2 rounded opacity-70'
                    ):(
                        'bg-[#1dc071]  px-5 py-2 rounded '
                    )}
                    handleClick={() => setLoading(true)}
                />
            </div>

            <div className='sm:hidden flex justify-between px-10 py-2 pb-10 xx bottom-0 fixed w-full'>
                <RxDashboard className='text-[25px]' />
                <BiCog className='text-[25px]' />
                <AiFillGift className='text-[25px]' />
                <AiOutlineHeart className='text-[25px]' />
            </div>


        </div>
    )
}

export default Share