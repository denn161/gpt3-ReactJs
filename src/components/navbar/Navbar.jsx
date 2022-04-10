import React,{useState} from 'react'

import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import './navbar.scss'
import logo  from './img/GPT-3.svg'



const Menu =()=>(
  <>
               <li className='navbar__links-item'><a className='navbar__links-link' href="#">Home</a></li>
              <li className='navbar__links-item'><a className='navbar__links-link' href="#">What is GPT?</a></li>
              <li className='navbar__links-item'><a className='navbar__links-link' href="#">Open AI</a></li>
              <li className='navbar__links-item'><a className='navbar__links-link' href="#">Case Studies</a></li>
              <li className='navbar__links-item'><a className='navbar__links-link' href="#">Library</a></li> 
  
  
  </>
)

function Navbar() {

  const [toggleMenu,setToggleMenu]=useState(false)  
  return (
    <nav>
    <div className="container">
        <div className="navbar">
            <div className="navbar__logo"><a href="#"><img src={logo} alt="logo"/></a> </div>        
              <ul className="navbar__links" >
               <Menu/>
              <div className='navbar__btns'>
               <a className='navbar__btn' href="#">Sign in</a>  
               <a className='navbar__btn btn' href="#">Sign up</a>   
             </div> 
           </ul> 
           <div className='navbar__menu'>
             {toggleMenu?
             (<RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>)
             :(<RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/> )            
            
            }
         
      </div>                    
        </div>        
    
    </div>
    {toggleMenu&&(
                  <ul className="menu__links scale-up-center" >
                  <Menu/>
                  <div className='navbar__btns'>
                   <a className='navbar__btn' href="#">Sign in</a>  
                   <a className='navbar__btn btn' href="#">Sign up</a>   
                 </div>              
               </ul>    
           )}       
</nav>


    // <div className='navbar'>
    //   <div className='container'>      
    //     <div className='navbar__links'>     
    //     <div className='navbar__logo'><img src={logo} alt="logo"/></div>         
    //       <nav>
    //          <ul className='navbar__links-list'>
    //            <li className='navbar__links-item'><a className='navbar__links-link' href="#">Home</a></li>
    //            <li className='navbar__links-item'><a className='navbar__links-link' href="#">What is GPT?</a></li>
    //            <li className='navbar__links-item'><a className='navbar__links-link' href="#">Open AI</a></li>
    //            <li className='navbar__links-item'><a className='navbar__links-link' href="#">Case Studies</a></li>
    //            <li className='navbar__links-item'><a className='navbar__links-link' href="#">Library</a></li>                            
    //          </ul>
    //        </nav>
    //        <div className='navbar__btns'>
    //          <a href="#" className='navbar__btn'>Sign in</a>
    //          <a href="#" className='navbar__btn btn'>Sign up</a>
    //        </div>        
    //     </div>
    //   </div>
    // </div>
  )
}

export default Navbar