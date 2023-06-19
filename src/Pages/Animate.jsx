import React from 'react'
import { data } from '../Utils/Data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Button } from '../components'
import { Link } from 'react-router-dom'


const Animate = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className='sm:px-[20%] sm:py-8 p-10 text-white'>

      <div
        className=''>
        <h1 className='text-center text-[20px]'>Welcome to Blaze</h1>
        <Slider {...settings}>
        
          {data.map((datax) => (
            <div key={datax.id} className='sm:mt-0 mt-20'>
              <div className=''>

                <img src={datax.image} className='w-full sm:h-[400px]' />
                <h1 className='text-center text-[25px] mt-10'>{datax.title}</h1>

              </div>

            </div>


          ))}
        </Slider>

        <div className='sm:px-[15%]'>
          <Link to='/auth'>
            <Button
              title='Continue'
              styles=' w-full h-[45px] bg-[#0d6efd] rounded-[100px] mt-20 hover:opacity-50 '
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Animate
