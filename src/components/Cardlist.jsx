import React from 'react'
import { Card, AddCard } from '../components'

const Cardlist = ({ card, handleAddCard, handleDeleteCard }) => {
    return (
        <div className='sm:p-20 px-5 pb-20 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:mt-0 mt-5 bg-none'>
            <h1 className='font-bold sm:hidden'>Recent rooms</h1>
            {card.reverse().map((cardx) => (
                <Card
                    id={cardx.id}
                    text={cardx.text}
                    date={cardx.date}
                    handleDeleteCard={handleDeleteCard}
                />
))}


            <AddCard handleAddCard={handleAddCard} />

        </div>

    )
}

export default Cardlist