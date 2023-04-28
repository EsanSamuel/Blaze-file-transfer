import React, { useState } from 'react'
import { RxDashboard } from 'react-icons/rx'
import { BiCog } from 'react-icons/bi'
import { AiFillGift,AiOutlineHeart } from 'react-icons/ai'
import { BsLightningCharge } from 'react-icons/bs'

const Navbar3 = () => {
    const [active, setActive] = useState(false)
    return (
        <div className='w-full justify-between flex'>
            <h1 className='flex gap-2 text-[20px]'><BsLightningCharge className='text-[30px] text-[#0d6efd]' />Blaze</h1>

            <ul className='flex gap-6 sm:flex hidden cursor-pointer'>
                <li className={active ? (
                    'flex gap-1 text-[#0d6efd]'
                ) : (
                    'flex gap-1 hover:text-[#0d6efd]'
                )}
                    onClick={() => setActive(true)}><RxDashboard className='text-[20px]' />Dashboard</li>
                <li className='flex gap-1 hover:text-[#0d6efd]'><BiCog className='text-[20px]' />Settings</li>
                <li className='flex gap-1 hover:text-[#0d6efd]'><AiFillGift className='text-[20px]' />Sponsor us</li>
                <li className='flex gap-1 hover:text-[#0d6efd]'><AiOutlineHeart className='text-[20px]' />Favorites</li>
            </ul>


        </div>
    )
}

export default Navbar3