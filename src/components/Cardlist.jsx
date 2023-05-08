import React from 'react'
import { Card, AddCard } from '../components'
import { VscEmptyWindow } from 'react-icons/vsc'

const Cardlist = ({ card, handleAddCard, handleDeleteCard }) => {
    return (
        <div className='sm:p-20 px-5 pb-20 gap-5 sm:mt-0 mt-5 bg-none'>
            <h1 className='font-bold sm:hidden'>Recent rooms</h1>
            {card?.length > 0 ? (
                <div className='gap-1 sm:gap-2 grid grid-cols-1 sm:grid-cols-3'>
                    {card.reverse().map((cardx) => (
                        <Card
                            id={cardx.id}
                            text={cardx.text}
                            date={cardx.date}
                            handleDeleteCard={handleDeleteCard}
                        />
                    ))}
                </div>
            ) : (
                <div className='text-center text-[#5f5f5f] sm:mt-5 mt-10 '>
                    <div className='flex justify-center'>
                        <VscEmptyWindow className='text-[90px]' />
                    </div>
                    <div className='mt-5'>
                        <h1>No Room Created Yet</h1>
                    </div>
                </div>

            )}



            <AddCard handleAddCard={handleAddCard} />

        </div>

    )
}

export default Cardlist
