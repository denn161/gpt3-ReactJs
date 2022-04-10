import React,{useState} from 'react'
import './passibility.scss'
import passImg from '../../assets/passibility.png'

function Passibility() {

  const [activeLink,setActiveLink]=useState(false)
  const [defaultColor,setDefaultColor]=useState(true)

  return (
     <section className='section__passibilities' id='passibilities'>
          <div className='container'>
           <div className="passibilities">
             <div className="passibilities__item">
               <img src={passImg} alt="passImg" />
             </div>
             <div className="passibilities__item">
               <a className='passibilities__link' onClick={(e)=>{               
                 e.preventDefault()   
                 e.stopPropagation()          
                 setActiveLink(true)
                 setDefaultColor(false)
                 
               }} style={{color:activeLink?"#71E5FF":"#FF8A71"}} href="#">Request Early Access to Get Started</a>
               <h3 className='passibilities__title gradient__text section__title'>
               The possibilities are beyond your imagination
               </h3>
               <div className="passibilities__text">
               Yet bed any for travelling assistance indulgence unpleasing.
                Not thoughts all exercise blessing. Indulgence
                way everything joy alteration boisterous the attachment.
                 Party we years to order allow asked of.
               </div>
               <a className='passibilities__link' href="#" onClick={(e)=>{
                  e.preventDefault()
                  e.stopPropagation()
                  setDefaultColor(true)
                  setActiveLink(false)
                  
               }}
                style={{color:!defaultColor?"#FF8A71":"#71E5FF"}}>Request Early Access to Get Started</a>
             </div>
           </div>
            </div>
     </section>
  )
}

export default Passibility