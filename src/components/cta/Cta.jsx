import React from 'react'
import './cta.scss'

function Cta() {
  return (
    <div className='container'>
      <div className="cta">
        <div className="cta__content">
        <p className='cta__subtitle'>Request Early Access to Get Started</p>
        <p className='cta__title'>Register today & start exploring the endless possiblities.</p>
        </div>
         <div className='cta__button'><button className='cta__btn'>Get Started</button></div>
      </div>
    </div>
  )
}

export default Cta