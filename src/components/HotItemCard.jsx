import React from 'react'
import "../css/hotItemCard.css"

const HotItemCard = ({name, image, price}) => {
  return (
    <div className='HotItemCard'>
        <img src={image} alt={name} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard
