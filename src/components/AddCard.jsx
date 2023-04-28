import React, { useState } from 'react'
import { Button } from './'
import { AiOutlineClose,AiOutlinePlus } from 'react-icons/ai'

const AddCard = ({ handleAddCard }) => {
    const [room, setRoom] = useState(false)
    const [cardText, setCardText] = useState('')

    const handleSave = () => {
        if (cardText.trim().length > 0) {
            handleAddCard(cardText)
            setCardText('')
        }
    }

    const handleChange = (e) => {
        setCardText(e.target.value)
    }

    return (
        <div className='fixed bg-transparent w-full'>

            <div className='px-10 sm:mt-0 mt-[120px] bg-transparent fixed sm:ml-[75%] bottom-0  flex items-center justify-center ml-[50%]'>
                <Button
                    title='Add'
                    styles='mb-28 z-10 p-4 button   bg-[#1dc071] text-[20px]  float-right '
                    handleClick={() => setRoom(true)}
                />
            </div>

            <div className='sm:px-[200px] p-10 bg-transparent w-full flex justify-center items-center'>
                {room && (
                    <div className='p-10 bg-[#000026]  glass  text-center mt-[-70%] w-full sm:ml-[-20%] ml-[-25%]'>
                        <AiOutlineClose onClick={() => setRoom(false)} />
                        <h1>Create Room</h1>
                        <input className='w-full h-[50px] mt-5 border border-[#5f5f5f] bg-transparent rounded outline-[#0d6efd] px-5' onChange={handleChange} value={cardText} />

                        <div className='bg-none'>
                        <Button
                            title='Create Room'
                            styles='w-full h-[50px] bg-[#0d6efd] rounded mt-10'
                            handleClick={handleSave}

                        />
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default AddCard