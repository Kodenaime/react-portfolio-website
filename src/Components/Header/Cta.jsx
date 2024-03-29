import React from 'react'
import CV from '../../assets/CV.pdf'


const Cta = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn-primary'>Contact Me</a>
    </div>
  )
}

export default Cta