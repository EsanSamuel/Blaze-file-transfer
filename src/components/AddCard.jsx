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

            <div className='px-10 sm:mt-0 mt-[120px] bg-transparent fixed sm:ml-[75%] bottom-0  flex items-center justify-center ml-[50%]'>
                <Button
                    title='New'
                    styles='mb-28 
                    px-6 py-3 rounded-[100px] bg-[#1dc071] text-[20px]  float-right hover:opacity-50 text-black'
                    handleClick={() => setRoom(true)}
                />
            </div>

            <div className='sm:px-[270px] sm:ml-10 bg-transparent w-[89%] flex justify-center items-center fixed'>
                {room && (
                    <form className='p-10 
                      bg-[#000026]  glass  text-center mt-[-172%] w-full sm:ml-[-20%] ' onSubmit={handleSave}>
                        <AiOutlineClose onClick={() => setRoom(false)} />
                        <h1>Create Room</h1>
                        <input className='w-full h-[50px] mt-5 border border-[#5f5f5f] bg-transparent rounded outline-[#0d6efd] px-5' onChange={handleChange} name='roomname' value={cardText} />

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
