import React from 'react'
import { Text, Service, Question,Sharing,Footer } from '../components'
import { Navbar } from '../components'

const Home = () => {
    return (
        <div>

<div className='w-full flex justify-between p-5 text-white fixed bg-[#000026]'>
          <Navbar />
        </div>


            <div className='sm:p-20 p-10 '>
                <Text />

                <Service />

                <Question />

                <Sharing />

                <Footer />
            </div>

        </div>
    )
}

export default Home