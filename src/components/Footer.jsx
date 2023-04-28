import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <div className='sm:mt-[10%] mt-[35%] sm:p-20 text-center text-white'>
        <div className='flex justify-center items-center'>
        <img src={logo} className='sm:w-[20%] w-[50%]'/>
        </div>
            <h1 className='text-[#5f5f5f] mt-5'>© 2023 - present Blaze. Released under the MIT License
                Designed & Developed in NIG</h1>
        </div>
    )
}

export default Footer