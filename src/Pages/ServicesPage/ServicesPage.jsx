import React from 'react'
import Header from '../../Components/Header/Header'
import ServicesSec from '../../Layouts/ServicesSec/ServicesSec'
import FooterTop from '../../Layouts/FooterTop/FooterTop'
import FooterBtm from '../../Components/FooterBtm/FooterBtm'

const ServicesPage = () => {
  return (
    <div>
      <Header />
      <div style={{marginTop: "clamp(20px)"}}>
      <ServicesSec  />
      </div>
      <FooterTop />
      <FooterBtm />
    </div>
  )
}

export default ServicesPage
