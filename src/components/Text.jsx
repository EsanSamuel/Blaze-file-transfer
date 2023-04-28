import React from 'react'
import { CustomButton } from './'
import file from '../assets/files.png'
import { Link } from 'react-router-dom'

const Text = () => {
    return (
        <div className='text-white sm:mt-[10%] mt-[40%] sm:flex justify-between '>
            <div>
                <h1 className='sm:text-[60px] text-[30px] font-bold'>Big transfers, bigger<br /> impact</h1>
                <p className=' mt-7 text-[#5f5f5f]'>Share files all over the world with ease and top <br />notch secutity with lots of features. </p>

                <div className='mt-10'>
                    <Link to='/auth'> <CustomButton
                        title='Get Started'
                    /></Link>
                </div>

            </div>


            <div className='mt-10 sm:mt-0'>
                <img src={file} />
            </div>

        </div >
    )
}

export default Text