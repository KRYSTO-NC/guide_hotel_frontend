import React from 'react'
import HeaderSection from '../HeaderSection/HeaderSection'
import hotelBanner from '../../../../../../assets/hotel_banner.jpeg'
function Welcome() {
  return (
    <div>
        
        <HeaderSection title={'Bienvenue !'}/>

        <div className="cover-homePreviewContainer">
            <img src={hotelBanner} alt="" />
        </div>
    </div>
  )
}

export default Welcome