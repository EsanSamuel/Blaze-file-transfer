import React, { useState } from 'react'
import { Button, Navbar2 } from '../components'
import { Link, useNavigate } from 'react-router-dom'

const Form = () => {
    const [form, setForm] = useState()
    const [loader, setLoader] = useState(false)
    const [username, setUsername] = useState('')

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
    return (
        <div className='h-[104vh]'>
            <div className='w-full flex justify-between p-5 text-white fixed bg-[#000026]'>
                <Navbar2 />
            </div>
            <div className='sm:px-20 sm:py-[20%] py-[40%] px-10 text-white sm:flex justify-between gap-[100px]'>



                <div>
                    <h1 className='sm:text-[50px] text-[30px]'>Create your profile</h1>
                    <p className='mt-7 text-[#5f5f5f]'>Nicknames are used to identify different devices in a <br />common file sharing room. A room must always <br />have devices with unique nicknames.</p>
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
        </div>
    )
}

export default Form