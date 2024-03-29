import React, { useState, useEffect } from 'react'
import { Navbar3, Button, AddCard, Cardlist, BottomIcon } from '../components'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'
import { BiCog } from 'react-icons/bi'
import { AiFillGift, AiOutlineHeart, AiOutlineClose } from 'react-icons/ai'
import { nanoid } from 'nanoid'
import { Search } from '../components'
import { IoMdNotificationsOutline , IoMdNotificationsOff} from 'react-icons/io'

const Files = ({ handleAddCard }) => {
    const [card, setCard] = useState([])
    const [search, setSearch] = useState('')
     const [notifications, setNotifications] = useState(false)

    const { state } = useLocation()

    const { username } = state

    const addCards = (text) => {
        const date = new Date()
        const newCard = {
            id: nanoid,
            text: text,
            date: date.toLocaleDateString()
        }
        const newcard = [...card, newCard]
        setCard(newcard)
    }

    const deleteCard = (id) => {
        const deletecard = card.filter((cardx) => cardx.id !== id)
        setCard(deletecard)
    }

    useEffect(() => {
        const savedCard = JSON.parse(
            localStorage.getItem(
                'file-transfer')
        )
        if (savedCard) {
            setCard(savedCard)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('file-transfer', JSON.stringify(card))
    }, [card])

    return (
        <div className='text-white h-auto'>
            <div className='w-full flex justify-between p-5 text-white fixed bg-[#000026]'>
                <Navbar3 />

                  <div className='sm:px-[270px]  bg-transparent w-[89%] flex justify-center items-center z-20 fixed top-[10%]'>
                    {notifications && (
                        <div className={`p-10 
                      bg-[#000026]  glass  text-center  w-full  animate-slide-in`} >
                            <AiOutlineClose onClick={() => setNotifications(false)} />
                            <h1>Notifications</h1>

                            <div className='flex justify-center mt-10 text-[#5f5f5f]'>
                                <IoMdNotificationsOff className='text-[90px]' />

                            </div>
                            <div className='text-[#5f5f5f] mt-5'>
                                <h1>No Notifications</h1>
                            </div>

                        </div>
                    )}
                </div>


                <div className='text-[#5f5f5f] sm:hidden'>
                    <IoMdNotificationsOutline className='text-[#5f5f5f] text-[27px] sm:hidden hover:animate-bounce' onClick={() => setNotifications(true)}/>
                </div>
            </div>




            <div className='sm:flex justify-between w-full'>
                <div className='sm:p-20 px-5 py-20'>
                    <h1 className='text-[26px] mt-2 font-bold'>Hi, {username} 👋.</h1>
                    <p className='text-[#5f5f5f] mt-3'>Join or create a room to share files</p>
                </div>
            </div>


            <div className='sm:p-20 p-5 mt-[-10%]'>
                <Search handleSearch={setSearch} />
            </div>

            <Cardlist
                card={card.filter((cardx) => cardx.text.toLowerCase().includes(search.toLowerCase()))}
                handleAddCard={addCards}
                handleDeleteCard={deleteCard}
            />



            <BottomIcon />







        </div>
    )
}

export default Files
