import React from 'react'
import { BottomIcon, Navbar3, Button } from '../components'
import { AiFillGithub } from 'react-icons/ai'

const Sponsor = () => {
    return (
        <div className='text-white'>
            <div className='w-full flex justify-between p-5 text-white fixed bg-[#000026]'>
                <Navbar3 />
            </div>

            <div className='sm:p-20 p-10 sm:mt-20 mt-[130px] absolute w-full'>
                <h1 className='text-[#5f5f5f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
                <Button
                    styles='w-full mt-10 bg-[#0d6efd] p-2 rounded hover:bg-transparent hover: border border-[#0d6efd]'
                    title='View Github profile'
                />


                <h1 className='mt-20 text-[#5f5f5f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
                <Button
                    styles='w-full mt-10 bg-[#0d6efd] p-2 rounded hover:bg-transparent hover: border border-[#0d6efd]'
                    title='View Github profile'
                />

                <div className='text-center flex justify-center cursor-pointer'><h1 className='text-center mt-20'> View Github repisitory</h1></div>
            </div>


            <BottomIcon />
        </div>
    )
}

export default Sponsor