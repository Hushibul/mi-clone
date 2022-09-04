import React from 'react'
import { Carousel } from 'react-bootstrap'

const Banner = ({banner}) => {
  return (
    <Carousel fade>
        {banner.end.map((element, index) => (
            <Carousel.Item key={element.image} id="banner" interval={1000} >
                <img src={element.image} alt={element.name} />
                <Carousel.Caption>
                  <h3>{element.name}</h3>
                  <p>{element.description}</p>
                  <p>{element.source}</p>
                  <u>Read More</u>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default Banner