import React, { useState } from 'react'
import { Button, Navbar3, BottomIcon } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import { BsToggleOn, BsToggleOff } from 'react-icons/bs'

const Setting = () => {
    const [form, setForm] = useState()
    const [loader, setLoader] = useState(false)
    const [username, setUsername] = useState('')
     const [toggle, setToggle] = useState(false)

    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()

        if (!username) return (
            alert('Form must not be empty!')
        )

        if (username.length < 3) return (
            alert('Nickname must be 3 or more words!')
        )

        if (username.length > 8) return (
            alert('Nickname must be less than or equals to 8 words!')
        )

        navigate('/files', { state: { username: username } })
    }

    const clearAll = () => {
        localStorage.clear()
        navigate('/auth')
        alert('Data cleared successfully!')
    }

    return (
        <div className='text-white'>
            <div className='w-full flex justify-between p-5 text-white fixed bg-[#000026]'>
                <Navbar3 />
            </div>

            <div className='sm:px-20 sm:py-[20%] py-[40%] px-5 text-white sm:flex justify-between gap-[100px]'>



                <div>
                    <h1 className='sm:text-[50px] text-[30px]'>Settings</h1>
                    <p className='mt-7 text-[#5f5f5f]'>Change your nickname into anyone of your choice </p>
                </div>

                <form className='sm:mt-0 mt-[30%] sm:w-[40%] gap-5' onSubmit={Submit}>
                    <h1 className='text-[25px]'>Nickname</h1>
                    <input className='w-full h-[50px] mt-5 border border-[#5f5f5f] bg-transparent rounded outline-[#0d6efd] px-5' placeholder='Enter Name' name='username'
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Button
                        title='Continue'
                        styles='w-full h-[50px] bg-[#0d6efd] rounded mt-10'
                    />
                </form>

            </div>

            <div className='sm:p-20 p-5 mt-[-10%]'>
             <div className='flex justify-between w-full sm:p-20 p-5 sm:pb-0 pb-10 text-[#5f5f5f] mt-[-10%] border border-[#5f5f5f] rounded'>
                <div>
                    <h1>Request Password Input</h1>
                </div>

                <div>
                    {toggle && (<BsToggleOn className='text-[#0d6efd] text-[30px]' onClick={() => setToggle(false)} />)}
                    {!toggle && (<BsToggleOff className='text-[#5f5f5f] text-[30px]' onClick={() => setToggle(true)} />)}
                </div>

            </div>
            </div>



            <div className='sm:px-20 sm:py-[0%] py-[0%] px-5 text-white sm:flex justify-between gap-[100px]'>

                <div className='sm:pb-10 pb-20'>

                    <h1 className='mt-7  text-[25px]'>Clear local data </h1>
                    <p className='mt-7 text-[#5f5f5f] sm:w-[60%]'>Clearing local data removes all the data stored by blaze on this devices.
                        You'll be taken to new user setup screen </p>
                </div>

                <div className='sm:mt-0 mb-[30%] sm:w-[55%] '>
                    <Button
                        title='Clear all'
                        styles='w-full h-[50px] border border-[#0d6efd] rounded mt-0 hover:bg-[#0d6efd] mt-10'
                        handleClick={clearAll}
                    />


                </div>

            </div>
            <BottomIcon />
        </div>
    )
}

export default Setting
