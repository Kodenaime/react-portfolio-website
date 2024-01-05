import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">

      <h5>My Skills</h5>
      <h2>Experience</h2>

      <div className="container experience-container">

        <div className="left">
          <h3>Front-End Skills</h3>
          <div className="experience">

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Html</h4>
                <small className="text-light">Experienced</small>
              </div>
             
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            

          </div>
        </div>

        <div className="right">
            <h3>Other Skills</h3>
            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Git & Github</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Content Creation</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Website Management</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Project Management</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
        </div>
      </div>

      

    </section>

  )
}

export default Experience