import React, { useState } from 'react'
import { RxDashboard } from 'react-icons/rx'
import { BiCog, BiHelpCircle } from 'react-icons/bi'
import { AiFillGift, AiOutlineHeart } from 'react-icons/ai'
import { BsLightningCharge } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar3 = () => {
    const [active, setActive] = useState(false)
    return (
        <div className='w-full justify-between flex'>
            <Link to='/files'> <h1 className='flex gap-2 text-[20px]'><BsLightningCharge className='text-[30px] text-[#0d6efd]' />Blaze</h1></Link>

            <ul className='flex gap-6 sm:flex hidden cursor-pointer'>
                <li className={active ? (
                    'flex gap-1 text-[#0d6efd]'
                ) : (
                    'flex gap-1 hover:text-[#0d6efd]'
                )}
                    onClick={() => setActive(true)}><RxDashboard className='text-[20px]' />Dashboard</li>
                <Link to='/setting'><li className='flex gap-1 hover:text-[#0d6efd]'><BiCog className='text-[20px]' />Settings</li></Link>
                <Link to='/sponsor'> <li className='flex gap-1 hover:text-[#0d6efd]'><AiFillGift className='text-[20px]' />Sponsor us</li> </Link>
                <Link to='/help'><li className='flex gap-1 hover:text-[#0d6efd]'><BiHelpCircle className='text-[20px]' />Help</li></Link>
            </ul>


        </div>
    )
}

export default Navbar3