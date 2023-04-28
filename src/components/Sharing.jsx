import React from 'react'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'

const Sharing = () => {
    return (
        <div className='sm:mt-[20%] mt-[35%] text-white text-center'>
            <h1 className='text-[25px]'>Start sharing with Blaze</h1>
            <p className='mt-5 text-[#5f5f5f]'>Blaze is completely free and easy to use.</p>

            <div className='mt-7'>
               <Link to='/auth'> <CustomButton
                    title='Get Started'
                /></Link>
            </div>

        </div>
    )
}

export default Sharing