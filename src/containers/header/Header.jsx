import React from 'react'
import './header.scss'
import {subscribers} from '../../assets'
import headerBg from '../../assets/header-bg-1.png'

function Header() {
  return (
    <div className='container'>
      <div className="header" id='home'>
        <div className="header__item">
          <h1 className='header__title gradient__text title'>Let’s Build Something
              amazing with GPT-3
             OpenAI
              </h1>
              <div className="header__text">
              Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
               Indulgence way everything joy alteration boisterous the attachment.
                Party we years to order allow asked of.
              </div>
              <form className='header__form'>
                <input className='header__input' type="email" name="email" placeholder='Your Email Address'/>
                <button type='submit' className='header__item-btn'>Get Started</button>
              </form >
              <div className='header__subscribers'>
                <div className="header__subscribers-images">
                 {subscribers.map((img,i)=>
                   <img src={img} alt='subscriber' className='header__subscribers-img' key={i}/>
                 )}
                 <div className='header__subscribers-counter header__subscribers-img'>1.6k+</div>
                </div>
                <div className="header__subscribers-text">
                1,600 people requested access a visit in last 24 hours
                </div>

              </div>
        </div>
        <div className="header__images">
          <img className='header__img' src={headerBg} alt="images" />
        </div>
      </div>
    </div>
  )
}

export default Header