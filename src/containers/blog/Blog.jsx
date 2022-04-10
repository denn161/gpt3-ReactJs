import React from 'react'
import './blog.scss'
import Article from '../../components/article/Article'
import blog1 from  '../../assets/blog-1.png'
import blog2 from  '../../assets/blog-2.png'
import blog3 from  '../../assets/blog-3.png'
import blog4 from  '../../assets/blog-4.png'
import blog5 from  '../../assets/blog-5.png'

const blogs=[blog1,blog2,blog3,blog4,blog5]

function Blog() {
  return (
   <section className='section__blog' id='blog'>
      <div className='container'>
     <h2 className='blog__title title gradient__text'>
       A lot is happening,<br/> 
       We are blogging about it.
     </h2>
         <div className="blog">        
      
         <Article img={blog1} data='Sep 26, 2021'
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
            link={'Read Full Article'}/>          
      
          <Article img={blog2} data='Sep 26, 2021'
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
            link={'Read Full Article'}/>  
              <Article img={blog3} data='Sep 26, 2021'
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
            link={'Read Full Article'}/>     
              <Article img={blog4} data='Sep 26, 2021'
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
            link={'Read Full Article'}/>     
              <Article img={blog5} data='Sep 26, 2021'
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
            link={'Read Full Article'}/>            
       
       
     </div>


    </div>
   </section>
  )
}

export default Blog