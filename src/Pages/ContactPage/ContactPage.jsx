import React from 'react'
import Header from '../../Components/Header/Header'
import ContactSec from '../../Layouts/ContactSec/ContactSec'
import FooterTop from '../../Layouts/FooterTop/FooterTop'
import FooterBtm from '../../Components/FooterBtm/FooterBtm'

const ContactPage = () => {
  return (
    <div>
        <Header />
      <div style={{marginTop: "clamp(30px, 7vw, 60px)"}}>
      <ContactSec  />
      </div>
      <FooterTop />
      <FooterBtm />
    </div>
  )
}

export default ContactPage
