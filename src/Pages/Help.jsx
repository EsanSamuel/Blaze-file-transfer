import React, { useContext } from 'react'
import { Navbar3, BottomIcon, Card } from '../components'
import { FavoriteContext } from '../Context/Favorites'


const Help = ({ card }) => {
  //const { favorites } = useContext(FavoriteContext)
  return (
    <div className=' text-white'>
      <div className='w-full flex justify-between p-5 text-white fixed bg-[#000026]'>
        <Navbar3 />
      </div>


      <div className='mt-20 absolute sm:p-20 p-10 sm:text-[40px] text-[30px]'>
        <h1>Help</h1>
      </div>

      {/*{card.map((data) => {
        if (favorites[data.id] !== 0) {
          return (
            <Card key={data.id} {...data} />
          )
        }
      })}*/}

      <BottomIcon />

    </div>
  )
}

export default Help
