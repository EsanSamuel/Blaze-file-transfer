import React,{ createContext, useState } from 'react'
import { Card } from '../components'


export const FavoriteContext = createContext()

const getFavorite = () => {
    let favorite = {}
    for (let i = 1; i < Card.length + 1; i++) {
        favorite[i] = 0
    }
    return favorite
}

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(getFavorite())

    const addtofavorites = (itemId) => {
        setFavorites((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

        alert('Added to favorites!')
    }


    const removefavorites = (itemId) => {
        setFavorites((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }


    return (
        <FavoriteContext.Provider value={{ favorites, addtofavorites,removefavorites }}>
            {children}
        </FavoriteContext.Provider>
    )
}