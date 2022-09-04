import React from 'react'
import "../css/productReviewCard.css"

const ProductReviewCard = ({name, image, price, review}) => {
  return (
    <div className='ProductReviewCard'>
        <img src={image} alt={name} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>

    </div>
  )
}

export default ProductReviewCard