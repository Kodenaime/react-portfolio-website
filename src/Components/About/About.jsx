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
              <small>3+ years working</small>
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

          <p>Highly motivated and detail-oriented Front-end Web Developer with over 3 years of experience in crafting responsive
            , user-centric interfaces. Proficient in a range of front-end technologies, including HTML, CSS, JavaScript, ReactJs
            , and Tailwind CSS. Skilled in version control with Git and GitHub, as well as consuming APIs to drive 
            dynamic web applications.
             Dedicated to staying up-to-date with 
            industry trends and best practices, with a passion for continuous learning and growth.</p>

          <a href="#contact" className='btn btn-primary'>let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About