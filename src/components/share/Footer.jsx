import React from 'react'
import './styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
        <p className='footer__title'>Website developed by Bryan</p>
        <div className='footer__socialmedia'>
            <a href="https://www.linkedin.com/in/bryan-breener-quispe-valeriano-bb055b141/"><i className='bx bxl-linkedin-square' ></i></a>
            <a href="https://github.com/bryanbreener1"><i className='bx bxl-github' ></i></a>
        </div>
    </div>
  )
}

export default Footer