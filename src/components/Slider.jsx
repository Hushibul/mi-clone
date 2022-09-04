import React from 'react'
import { Carousel } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

const Slider = ({start}) => {
  return (
    <Carousel fade>
        
        {start.map((element,index) => (
            <Carousel.Item key={index}>
                <img className='d-block w-100' src={element} alt="Slider_Image" />
            </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default Slider