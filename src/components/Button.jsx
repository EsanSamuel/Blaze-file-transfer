import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const Button = ({ title, styles, handleClick }) => {
  return (
    <div>
      <button className={styles} onClick={handleClick}>
        {title}
      </button>
    </div>
  )
}

export default Button