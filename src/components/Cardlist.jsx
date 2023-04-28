import React from 'react'
import { Card, AddCard } from '../components'

const Cardlist = ({ card, handleAddCard }) => {
    return (
        <div className='sm:p-20 p-10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:mt-0 mt-5 bg-none'>
            {card.map((cardx) => (
                <Card
                    id={cardx.id}
                    text={cardx.text}
                    date={cardx.date}
                />


            ))}

           
                <AddCard handleAddCard={handleAddCard} />

            </div>
        
    )
}

export default Cardlist