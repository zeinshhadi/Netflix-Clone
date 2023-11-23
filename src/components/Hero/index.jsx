import React from 'react'
import GetStartedForm from '../GetStartedForm'
import './index.css'
import Navbar from '../Navbar'
const 
Hero = () => {
  return (
    <div className='hero  '>
       <div className="container">
       <Navbar showTranslate={true} />
       </div>
      <div className=' center d-flex column h-100'>
     
       
        <div className="hero-content text-center text-white">
            <h1 className=' primary-title '>Unlimited movies, TV shows, and more</h1>
            <h5 className='hero-sub-title'>Watch anywhere. Cancel anytime.</h5>
        </div>

        <GetStartedForm className='input-bg'/>
      </div>
       
    </div>
  )
}

export default Hero