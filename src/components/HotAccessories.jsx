import React from 'react'

import HotItemCard from './HotItemCard'
import "../css/hotAccessories.css"

const HotAccessories = ({music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover}) => {
  return (
    <div className='HotAccessories'>
        <div>
            <img src={musicCover || smartDeviceCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="Cover" />
        </div>

        <div>
          {music && music.map((element, index) => (
            <HotItemCard key={element.image} name={element.name} price={element.price} image={element.image} index={index} />
          ))}

          {smartDevice && smartDevice.map((element, index) => (
            <HotItemCard key={element.image} name={element.name} price={element.price} image={element.image} index={index} />
          ))}

          {home && home.map((element, index) => (
            <HotItemCard key={element.image} name={element.name} price={element.price} image={element.image} index={index} />
          ))}

          {lifeStyle && lifeStyle.map((element, index) => (
            <HotItemCard key={element.image} name={element.name} price={element.price} image={element.image} index={index} />
          ))}

          {mobileAccessories && mobileAccessories.map((element, index) => (
            <HotItemCard key={element.image} name={element.name} price={element.price} image={element.image} index={index} />
          ))}

          <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
        </div>
    </div>
  )
}

export default HotAccessories