import React from 'react'
import './header.css'
import Cta from './Cta'
import boy from '../../assets/boy.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I am</h5>
        <h1>Ekechukwu Daniel</h1>
        <h5 className="text-light">
          A FullStack Developer
        </h5>
        <Cta />

        <div className="me">
          <img src={boy} alt="" />
        </div>

        <a href="#contact" className="scroll">Scroll Down</a>

        <Socials />

      </div>
    </header>
  )
}

export default Header