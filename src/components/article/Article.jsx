import React from 'react'
import './article.scss'

function Article({img,data,title,link}) {
  return (
    <div className="blog__item">
        <div className='blog__item-image'>
        <img className='blog__item-img' src={img} alt="photoBlog" />
        </div>
         <div className="blog__item-content">       
          <div className='blog__item-info'>
          <div className="blog__item-date">
             {data}
            </div>
            <div className="blog__item-title">
            {title}
            </div>
          </div>
           <a href="#" className="blog__item-link">{link}</a>    
           </div>              
       </div> 
  )
}

export default Article