import React from 'react'
import Header from '../../Components/Header/Header'
import AboutSec from '../../Layouts/AboutSec/AboutSec'
import TestimonialSec from '../../Layouts/TestimonialSec/TestimonialSec'
import FooterTop from '../../Layouts/FooterTop/FooterTop'
import FooterBtm from '../../Components/FooterBtm/FooterBtm'

const About = () => {
  return (
    <div>
      <Header />
      <div style={{marginTop: "clamp(30px, 7vw, 60px)"}}>
      <AboutSec  />
      </div>
      <TestimonialSec />
      <FooterTop />
        <FooterBtm />
    </div>
  )
}

export default About
