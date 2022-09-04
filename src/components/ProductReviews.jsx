import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import "../css/productReviews.css"

const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {productReviews.map((element, index) => (
            <ProductReviewCard key={index} image={element.image} name={element.name} price={element.price} review={element.review} />
        ))}
    </div>
  )
}

export default ProductReviews