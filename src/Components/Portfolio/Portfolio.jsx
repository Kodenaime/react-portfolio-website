import React from 'react'
import './portfolio.css'
import kodechopz from '../../assets/kodechopz.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
import amiirad from '../../assets/amiirad.png'
import kola from '../../assets/kola.png'
import port6 from '../../assets/port6.png'
import dream from '../../assets/dream.png'
import interchain from '../../assets/interchain.png'
import nft from '../../assets/nft.png'


const data = [

  {
    id: 1,
    image: kodechopz,
    title: 'A Restaurant Website',
    github: 'https://github.com/Kodenaime/kode-chops', 
    live: 'https://kode-chops-9z1cozxgw-daniels-projects-4a072c3b.vercel.app/'
  },
  {
    id: 2,
    image: port2,
    title: 'Annas Closet A Display website',
    github: 'https://github.com/Kodenaime/Anna-s-Closet',
    live: 'https://kodenaime.github.io/Anna-s-Closet/'
  },
  {
    id: 3,
    image: port3,
    title: 'Absu Blog- A functional blog',
    github: 'https://github.com/Kodenaime/Absu-Blog',
    live: 'https://kodenaime.github.io/Absu-Blog/'
  },
  {
    id: 4,
    image: amiirad,
    title: 'A Landing Page for a Clothing Brand',
    github: 'https://github.com/Kodenaime/amiirad-catalogue',
    live: 'https://amiradfashion.com/'
  },
  {
    id: 5,
    image: kola,
    title: 'An Accounting Agency Website',
    github: 'https://github.com/Kodenaime/Kolabamiwuye',
    live: 'https://kolabamiwuye.com/'
  },
  {
    id: 6,
    image: port6,
    title: 'A website for a digital agency',
    github: 'https://github.com/Kodenaime/digital-agency-.git',
    live: 'https://kodenaime.github.io/digital-agency-/'
  },
  {
    id: 7,
    image: dream,
    title: 'A website for a Visa Agency',
    github: 'https://github.com/Kodenaime/dream-alliance',
    live: 'https://yourdreamalliance.com/'
  },
  {
    id: 8,
    image: nft,
    title: 'A website for a digital agency',
    github: 'https://github.com/Kodenaime/nft-purchase',
    live: 'https://nft-purchase.vercel.app/'
  },
  {
    id: 9,
    image: interchain,
    title: 'A website for a digital agency',
    github: 'https://github.com/Kodenaime/interchain',
    live: 'https://interchain-chi.vercel.app/'
  },

]



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some of my Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">

       
        {
          data.map(({id, image, title, github, live}) => {
              return (
                <article key={id} className="portfolio">
                    <div className="portfolio-image">
                    <img src={image} alt={title} />
                    </div>
                    <h3>{ title }</h3>
                    <div className="portfolio-cta">
                    <a href={ github } className='btn' target='_blank'>Github</a>
                    <a href={ live } className='btn btn-primary' target='_blank'>Live link</a>
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