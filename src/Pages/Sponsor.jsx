import React from 'react'
import { BottomIcon, Navbar3, Button } from '../components'
import { AiFillGithub } from 'react-icons/ai'

const Sponsor = () => {
    return (
        <div className='text-white'>
            <div className='w-full flex justify-between p-5 text-white fixed bg-[#000026]'>
                <Navbar3 />
            </div>

            <div className='sm:p-20 p-5 sm:mt-[10%] mt-[130px] absolute w-full'>
                <h1 className='text-white sm:text-[40px] text-[30px] py-5 mt-[-10%] bg-none'
                >Sponsor Us</h1>
                <h1 className='text-[#5f5f5f]'>Hi, I'm Esan Samuel,a problem solving full-stack developer skilled in React,TypeScript,Firebase,Tailwind,Node js and Solidity. I built this project to solve the problem I have in transferring a file from one device to another.
</h1>
                <a href='https://github.com/EsanSamuel'><Button
                    styles='w-full mt-10 hover:bg-[#0d6efd] p-2 rounded hover:bg-transparent border border-[#0d6efd]'
                    title='Support on Github'
                /></a>


                <h1 className='mt-20 text-[#5f5f5f]'>You can view the source codes of this project,star the project,find bugs and contribute a fix.You can also suggest pickup development of a new feature</h1>
                <a href='https://github.com/EsanSamuel/Blaze-file-transfer'><Button
                    styles='w-full mt-10 hover:bg-[#0d6efd] p-2 rounded hover:bg-transparent border border-[#0d6efd]'
                    title='View Github profile'
                /></a>

                <div className='text-center flex justify-center cursor-pointer'><h1 className='text-center py-20'> View Github repisitory</h1></div>
            </div>


            <BottomIcon />
        </div>
    )
}

export default Sponsor
