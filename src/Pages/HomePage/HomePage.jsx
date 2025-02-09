import React from 'react'
import Header from '../../Components/Header/Header'
import HeroSlider from '../../Components/HeroSlider/HeroSlider'
import PropertiesSec from '../../Layouts/PropertiesSec/PropertiesSec'
import ProgressSec from '../../Layouts/ProgressSec/ProgressSec'
import TestimonialSec from '../../Layouts/TestimonialSec/TestimonialSec'
import FooterTop from '../../Layouts/FooterTop/FooterTop'
import FooterBtm from '../../Components/FooterBtm/FooterBtm'
import ServicesSec from '../../Layouts/ServicesSec/ServicesSec'

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSlider   />
      <PropertiesSec    />
      <ProgressSec />
      <ServicesSec />
      <TestimonialSec />
      <FooterTop />
      <FooterBtm />
    </div>
  )
}

export default HomePage
