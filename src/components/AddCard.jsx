import React, { useState, useEffect } from 'react'
import { Button } from './'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const AddCard = ({ handleAddCard }) => {
    const [room, setRoom] = useState(false)
    const [cardText, setCardText] = useState('')
    const [form, setForm] = useState()

    const navigate = useNavigate()

    const handleSave = (e) => {
        e.preventDefault()
        if (cardText.trim().length > 0) {
            handleAddCard(cardText)
            setCardText('')
            setRoom(false)
        }

        //navigate('/share', { state: { roomname: cardText } })
    }

    const handleChange = (e) => {
        setCardText(e.target.value)
    }

 
        const Generate = () => {
            let code = '1234567890'
            let roomCode = ''
            for (let i = 0; i < 6; i++) {
                roomCode += code[Math.floor(Math.random() * 10)]
            }
            setCardText(roomCode)
        }
    

        useEffect(() => {
            Generate()
        }, [])


    return (
        <div className='fixed bg-transparent w-full'>

            <div className='bottom-0 bg-transparent fixed sm:right flex items-center justify-center right-[5%]'>
                <Button
                    title='New Room'
                    styles='mb-28 
                    px-6 py-3 rounded-[50px] bg-[#1dc071] text-[20px]  float-right hover:opacity-50 text-black'
                    handleClick={() => setRoom(true)}
                />
            </div>

            <div className='sm:px-[270px] sm:ml-10 bg-transparent w-[89%] flex justify-center items-center fixed top-[10%] '>
                {room && (
                    <form className='p-10 
                      bg-[#000026]  glass  text-center w-full sm:ml-[-20%] ' onSubmit={handleSave}>
                        <AiOutlineClose onClick={() => setRoom(false)} />
                        <h1>Create Room</h1>
                        <input className='w-full h-[50px] mt-5 border border-[#5f5f5f] bg-transparent rounded outline-[#0d6efd] px-5' onChange={handleChange} name='roomname' value={cardText} placeholder='Enter Room Name'/>

                        <div className='bg-none'>
                            <Button
                                title='Create Room'
                                styles='w-full h-[50px] bg-[#0d6efd] rounded mt-10 hover:opacity-50 '
                                handleClick={handleSave}

                            />

                            <Button
                                title='Generate random room'
                                styles='w-full h-[50px] border border-[#0d6efd] rounded mt-10 hover:opacity-50 '
                                handleClick={Generate}

                            />
                        </div>
                    </form>
                )}
            </div>

        </div>
    )
}

export default AddCard
