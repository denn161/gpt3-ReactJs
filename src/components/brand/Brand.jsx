import React from 'react'
import { brands } from '../../assets'
import './brand.scss'

function Brand() {
  return (
   
       <div className='container'>
      <div className="brands">
        {brands.map((brand)=>
        <div className="brands__item">
          <img src={brand} alt="brand" className="brands__img"/>
          </div>        
        )}
      </div>

    </div>
    
  )
}

export default Brand