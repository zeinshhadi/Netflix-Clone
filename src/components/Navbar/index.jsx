import React from 'react'
import logo from "../../images/Netflix_Logo_PMS.png"
import './index.css'
import Button from '../Button'
const Navbar = () => {
  return (
    <div className={`d-flex space-between text-white  navbar`}>
       <div className='img-container'>
       <img src={logo}  className='logo' alt="" />
       </div>
       <div>
        <Button  text='Sign In'/>
       </div>

    </div>
  )
}

export default Navbar