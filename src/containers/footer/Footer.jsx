import React from 'react'
import './footer.scss'
import logo from '../../assets/logo.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__top">
          <h3 className='footer__top-title title gradient__text'>
          Do you want to step in to the future before others
          </h3>
          <button className='footer__top-btn'>Request Early Access</button>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-logo">
          <div className='footer__logo'>
              <img src={logo} alt="logo" />
            </div>
            <div className='footer__contact'>
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </div>
          </div>
          <div className="footer__bottom-links">
            <ul className="footer__links">
              <div className='footer__links-title'>
                Links
              </div>
              <li className='footer__links-item'><a className='footer__links-link' href="#">Overons</a></li>
              <li className='footer__links-item'><a className='footer__links-link' href="#">Social Media</a></li>
              <li className='footer__links-item'><a className='footer__links-link' href="#">Counters</a></li>
              <li className='footer__links-item'><a className='footer__links-link' href="#">Contact</a></li>
            </ul>
            <ul className="footer__links">
              <div className='footer__links-title'>
              Company
              </div>
              <li className='footer__links-item'><a className='footer__links-link' href="#">Terms & Conditions</a></li>
              <li className='footer__links-item'><a className='footer__links-link' href="#">Privacy Policy</a></li>
              <li className='footer__links-item'><a className='footer__links-link' href="#">Contact</a></li>
            </ul>
            <ul className="footer__links">
              <div className='footer__links-title'>
              Get in touch
              </div>
              <li className='footer__links-item'><a className='footer__links-link' href="#">Crechterwoord K12 182 DK Alknjkcb</a></li>
              <li className='footer__links-item'><a className='footer__links-link' href="#">085-132567</a></li>
              <li className='footer__links-item'><a className='footer__links-link' href="#">info@payme.net</a></li>
            </ul>
            
          </div>
        </div>
        <div className="footer__copy">
        &copy;&nbsp;2021 GPT-3. All rights reserved.
        </div>
      </div>

    </footer>
  )
}

export default Footer