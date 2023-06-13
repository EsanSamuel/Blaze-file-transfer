import React from 'react'
import { Navbar3 } from '../components'
import { AiOutlineHeart, AiFillGift } from 'react-icons/ai'
import { BiCog ,BiHelpCircle} from 'react-icons/bi'
import { RxDashboard } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const BottomIcon = () => {
    return (
        <div className='text-white bg-[#000026]'>
            <div className='sm:hidden flex justify-between px-10 py-2 pb-10 xx bottom-0 fixed w-full'>
            <RxDashboard className='text-[25px]' />
                <Link to='/setting'><BiCog className='text-[25px]' /></Link>
                <Link to='/sponsor'><AiFillGift className='text-[25px]' /></Link>
                <Link to='/help'><BiHelpCircle className='text-[25px]' /></Link>
            </div>
        </div>
    )
}

export default BottomIcon
