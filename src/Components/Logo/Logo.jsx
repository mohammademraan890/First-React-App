import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
const Logo = ({ firstColor, secondColor }) => {
  return (
    <div>
        <Link to="#" className="logo fw-medium"> <span style={{color:firstColor}}>Lab</span><span style={{color:secondColor}}>sky</span></Link>
    </div>
  )
}

export default Logo
