import React from 'react'

const SeactionsHeading = ({title , Color , maxWidth , margin=0}) => {
  return (
    <div className='section-heading'>
        <h1 className='fw-bold' style={{color: Color, maxWidth: maxWidth, margin:margin}}>{title}</h1>
    </div>
  )
}

export default SeactionsHeading
