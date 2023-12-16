import React from 'react'
import './Footer.css'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='Footer__wrapper'>
       <div className='Company__details'>
                <h2 className='h2__elements'>Company Logo</h2>
       </div>
       <div className='social__details'>
                <FaSquareFacebook size={30}/>
                <FaInstagram size={30}/>
                <IoLogoLinkedin size={30}/>
                <FaWhatsapp size={30}/>
       </div>
    </div>
  )
}

export default Footer