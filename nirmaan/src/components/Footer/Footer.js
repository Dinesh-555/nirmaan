import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

import Vector from '../../Assets/Vector.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_one'>
            <div className='footer_left'>
                <div style={{display : 'flex'}}>
                    <a href='/' > <FontAwesomeIcon icon = {faEnvelope} /></a>
                    <p>nirmaan@smail.iitm.ac.in</p>
                </div>
                <div style={{display : 'flex'}}>
                    <a href='/' > <FontAwesomeIcon icon = {faLocationDot} /></a>
                    <p>Indian Institute of Technology Madras, Chennai - 600036</p>
                </div>
            </div>
            <div className = 'footer_right'>
                <a href='https://www.youtube.com/@nirmaaniitm4437' target='_blank'> <FontAwesomeIcon icon={faYoutube} /></a>
                <a href='https://twitter.com/Nirmaan_IITM' target='_blank'><FontAwesomeIcon icon= {faTwitter}/> </a>
                <a href='https://www.linkedin.com/company/nirmaan-iitm/about/' target='_blank' ><FontAwesomeIcon icon={faLinkedinIn} href='https://www.linkedin.com/company/nirmaan-iitm/about/' target='_blank'/> </a>
                <a href='https://www.instagram.com/nirmaan_iitm/' target='_blank'><FontAwesomeIcon icon={faInstagram} /> </a>
                <a href='/' ><img src={Vector} height = {30} width = {35} alt = '' /></a>
                <a href='https://www.facebook.com/nirmaan.iitm/' target='_blank'><FontAwesomeIcon icon= {faFacebookF}/> </a>
            </div>
        </div>
        <div className='footer_two'>
            <p> © 2023 IIT Madras - All rights reserved </p>
        </div>
    </div>
  )
}
