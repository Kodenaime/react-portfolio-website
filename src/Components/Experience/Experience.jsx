import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">

      <h5>My Skills</h5>
      <h2>Experience</h2>

      <div className="container experience-container">

        <div className="experience-card">
          <h3>Front-End Skills</h3>
          <div className="experience-content">

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Professional</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Professional</small>
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
                <h4>React</h4>
                <small className="text-light">Professional</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience-card">
          <h3>Back-End Skills</h3>
          <div className="experience-content">

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Professional</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Professional</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Professional</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>REST APIs</h4>
                <small className="text-light">Professional</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>GraphQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>JWT Auth</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience-card">
          <h3>Other Skills</h3>
          <div className="experience-content">

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Git & GitHub</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>CI/CD</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>SEO</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Web Animations</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Responsive Design</h4>
                <small className="text-light">Professional</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Agile/Scrum</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>
        </div>

      </div>

    </section>

  )
}

export default Experience