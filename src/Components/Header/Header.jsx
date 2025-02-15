import React from 'react'
import './header.css'
import Cta from './Cta'
import dan from '../../assets/dan.jpg'
import dan1 from '../../assets/dan1.jpg'
import dan2 from '../../assets/dan2.jpeg'
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
          <img src={dan2} alt="" />
        </div>

        <a href="#contact" className="scroll">Scroll Down</a>

        <Socials />

      </div>
    </header>
  )
}

export default Header