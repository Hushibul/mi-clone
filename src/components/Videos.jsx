import React from 'react'
import VideosCard from './VideosCard'
import "../css/videos.css"

const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {videos.map((element, index) => (
            <VideosCard index={index} key={element.image} image={element.image} name={element.name} />
        ))}
    </div>
  )
}

export default Videos