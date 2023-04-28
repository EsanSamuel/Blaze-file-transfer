import React from 'react'

//bg-[#0d6efd]
//#1dc071

const CustomButton = ({title}) => {
  return (
    <div>
        <button className='px-3 py-2 bg-[#0d6efd] rounded'>
            {title}
        </button>
    </div>
  )
}

export default CustomButton