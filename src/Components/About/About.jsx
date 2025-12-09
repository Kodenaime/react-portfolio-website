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

          <p className='about-text'>Results-driven Full-Stack MERN Developer with over 3 years of professional experience in designing, developing, and deploying scalable web applications. Strong expertise in MongoDB, Express.js, React, and Node.js, with proficiency in PostgreSQL (Neon) for modern database solutions. Experienced in building RESTful and GraphQL APIs, implementing authentication systems, and optimising application performance. Proven track record of delivering end-to-end solutions independently and collaboratively, working effectively with cross-functional teams and clients. Detail-oriented professional committed to writing clean, maintainable code and staying current with industry best practices. Passionate about leveraging the MERN stack to create robust, user-centric applications that drive business value.</p>

          <a href="#contact" className='btn btn-primary'>let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About