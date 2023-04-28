import React, { useState } from 'react'
import { CustomButton, Button } from './'
import { AiFillFileText, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsLightningCharge } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [account, setAccount] = useState(false)
    const [navbar, setNavbar] = useState(false)
    return (
        <div className='w-full flex justify-between'>
            <Link to='/'><h1 className='flex gap-2 text-[20px]'><BsLightningCharge className='text-[30px] text-[#0d6efd]' />Blaze</h1></Link>

            <ul className='flex gap-10 sm:flex hidden cursor-pointer'>
                <li>How it works</li>
                <li>Sponsor us!</li>
                <li>Github</li>
            </ul>

            <div className='sm:flex hidden'>
                <Button
                    title={account ? (
                        'Login'
                    ) : (
                        'Create Account'
                    )}

                    styles={account ? (
                        'px-3 py-2 bg-[#0d6efd] rounded'
                    ) : (
                        'px-3 py-2 bg-[#0d6efd] rounded'
                    )}
                />
            </div>

            {!navbar && (
                <div className='sm:hidden text-[25px]'>
                    <AiOutlineMenu onClick={() => setNavbar(true)} />
                </div>

            )}

            {/*smaller devices navbar */}
            {navbar && (
                <div className='sm:hidden w-[90%] text-center p-20 rounded-[20px] justify-center mt-20 absolute glass text-white '>

                    <AiOutlineClose className='text-[25px] float-right mt-[-20%] mr-[-15%]' onClick={() => setNavbar(false)} />
                    <ul className='gap-10'>
                        <li>How it works</li>
                        <li className='mt-10'>Sponsor us!</li>
                        <li className='mt-10'>Github</li>
                    </ul>

                    <Button
                        title={account ? (
                            'Login'
                        ) : (
                            'Create Account'
                        )}

                        styles={account ? (
                            'px-3 py-2 bg-[#0d6efd] rounded mt-10'
                        ) : (
                            'px-3 py-2 bg-[#0d6efd] rounded mt-10'
                        )}
                    />

                </div>
            )}

        </div>
    )
}

export default Navbar