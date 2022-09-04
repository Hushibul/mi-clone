import React from 'react'

import Offer from './Offer'
import '../css/offers.css'

const Offers = ({offer}) => {
  return (
    <div className='offersSection'>
        {offer.map((element, index) => (
            <Offer key={element.image} index={index} src={element.image} link={element.url} />
        ))}
    </div>
  )
}

export default Offers