import React from 'react'
import './about.css'
import kode from '../../assets/kode.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="me-image">
            <img src={kode} alt="A portrait of me" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">

            <article className="about-card">
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>
            <article className="about-card">
              <FiUsers className='about-icon'/>
              <h5>clients</h5>
              <small>20+ satisfied clients</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className='about-icon'/>
              <h5>Experience</h5>
              <small>multiple completed projects</small>
            </article>
          </div>

          <p>I am an enthusiastic Front-end web developer, with two years of experience.
             I have experience with the core front-end technologies such as HTML, CSS, and JavaScript.
             I am also experienced with ReactJs, Tailwind Css, Git and Github and consuming API's.
             I am open to learning and new opportunities as a Front-end developer</p>

          <a href="#contact" className='btn btn-primary'>let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About