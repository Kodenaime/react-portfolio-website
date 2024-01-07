import React from 'react'
import './portfolio.css'
import port1 from '../../assets/port1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
import port4 from '../../assets/port4.png'
import port5 from '../../assets/port5.png'
import port6 from '../../assets/port6.png'


const data = [

  {
    id: 1,
    image: port1,
    title: 'A Portfolio Website',
    github: '/Kodenaime/My-Portfolio',
    demo: 'https://resonant-boba-a968b2.netlify.app/'
  },
  {
    id: 2,
    image: port2,
    title: 'Annas Closet A Display website',
    github: 'https://github.com/Kodenaime/Anna-s-Closet',
    demo: 'https://kodenaime.github.io/Anna-s-Closet/'
  },
  {
    id: 3,
    image: port3,
    title: 'Absu Blog- A functional blog',
    github: 'https://github.com/Kodenaime/Absu-Blog',
    demo: 'https://kodenaime.github.io/Absu-Blog/'
  },
  {
    id: 4,
    image: port4,
    title: 'A react portfolio',
    github: 'https://github.com/Kodenaime/React-portfolio.git',
    demo: 'https://kodenaime.github.io/React-portfolio/'
  },
  {
    id: 5,
    image: port5,
    title: 'A school management system',
    github: 'https://github.com/Kodenaime/Pub-Class.git',
    demo: 'https://kodenaime.github.io/Pub-Class/'
  },
  {
    id: 6,
    image: port6,
    title: 'A website for a digital agency',
    github: 'https://github.com/Kodenaime/digital-agency-.git',
    demo: 'https://kodenaime.github.io/digital-agency-/'
  },

]



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some of my Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">

       
        {
          data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className="portfolio">
                    <div className="portfolio-image">
                    <img src={image} alt={title} />
                    </div>
                    <h3>{ title }</h3>
                    <div className="portfolio-cta">
                    <a href={ github } className='btn' target='_blank'>Github</a>
                    <a href={ demo } className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>               
                </article>
              )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio