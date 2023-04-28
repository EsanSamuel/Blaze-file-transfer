import React, { useState, useEffect } from 'react'
import { Navbar3, Button, AddCard, Cardlist } from '../components'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'
import { BiCog } from 'react-icons/bi'
import { AiFillGift, AiOutlineHeart } from 'react-icons/ai'
import { nanoid } from 'nanoid'
import { Search } from '../components'

const Files = ({ handleAddCard }) => {
    const [card, setCard] = useState([])
    const [search, setSearch] = useState('')

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
            </div>




            <div className='sm:flex justify-between w-full'>
                <div className='sm:p-20 px-10 py-20'>
                    <h1 className='text-[26px] mt-2'>Hi, {username} 🖐.</h1>
                    <p className='text-[#5f5f5f] mt-3'>Join or create a room to share files</p>
                </div>
            </div>


            <div className='sm:p-20 p-10 mt-[-10%]'>
                <Search handleSearch={setSearch} />
            </div>

            <Cardlist
                card={card.filter((cardx) => cardx.text.toLowerCase().includes(search))}
                handleAddCard={addCards}
            />



            <div className='sm:hidden flex justify-between px-10 py-2 pb-10 xx bottom-0 fixed w-full'>
                <RxDashboard className='text-[25px]' />
                <BiCog className='text-[25px]' />
                <AiFillGift className='text-[25px]' />
                <AiOutlineHeart className='text-[25px]' />
            </div>







        </div>
    )
}

export default Files