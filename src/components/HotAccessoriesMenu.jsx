import React from 'react'
import { Link } from 'react-router-dom'
import '../css/hotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className='HotAccessoriesLink' to="/music">Music Store</Link>
        <Link className='HotAccessoriesLink' to="/smartDevice">Smart Device</Link>
        <Link className='HotAccessoriesLink' to="/home">Home</Link>
        <Link className='HotAccessoriesLink' to="/lifeStyle">Life Style</Link>
        <Link className='HotAccessoriesLink' to="/mobileAcessories">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu