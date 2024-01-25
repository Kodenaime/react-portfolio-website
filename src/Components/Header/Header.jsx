import React from 'react'
import './header.css'
import Cta from './Cta'
import home1 from '../../assets/home1.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I am</h5>
        <h1>Ekechukwu Daniel</h1>
        <h5 className="text-light">
          A Front-End Developer
        </h5>
        <Cta />

        <div className="me">
          <img src={home1} alt="" />
        </div>

        <a href="#contact" className="scroll">Scroll Down</a>

        <Socials />

      </div>
    </header>
  )
}

export default Header