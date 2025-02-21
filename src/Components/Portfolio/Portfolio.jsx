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
import port10 from '../../assets/port10.png'
import port11 from '../../assets/port11.png'
import port12 from '../../assets/port12.png'
import port13 from '../../assets/port13.png'
import port14 from '../../assets/port14.png'
import port15 from '../../assets/port15.png'
import port16 from '../../assets/port16.png'
import port17 from '../../assets/port17.png'
import port18 from '../../assets/port18.png'


const data = [
  {
    id: 16,
    image: port17,
    title: 'An Animated Coffee Website',
    github: 'https://github.com/Kodenaime/kode-cafe',
    live: 'https://kode-cafe.vercel.app/'
  },
  {
    id: 7,
    image: dream,
    title: 'A website for a Visa Agency',
    github: 'https://github.com/Kodenaime/dream-alliance',
    live: 'https://yourdreamalliance.com/'
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
    id: 12,
    image: port12,
    title: 'A text to image generator with Tailwind css',
    github: 'https://github.com/Kodenaime/text-image/tree/master/client',
    live: 'https://text-to-image-bay.vercel.app/'
  },
  {
    id: 13,
    image: port13,
    title: 'A website for a furniture company',
    github: 'https://github.com/Kodenaime/furniture-website',
    live: 'https://furniture-website-seven-smoky.vercel.app/'
  },

  
  {
    id: 8,
    image: nft,
    title: 'A website for NFT Sales and Exchange',
    github: 'https://github.com/Kodenaime/nft-purchase',
    live: 'https://nft-purchase.vercel.app/'
  },
  {
    id: 9,
    image: interchain,
    title: 'A website for Cryptocurrency Exchange',
    github: 'https://github.com/Kodenaime/interchain',
    live: 'https://interchain-chi.vercel.app/'
  },
  {
    id: 14,
    image: port14,
    title: 'A website for a SEO agency',
    github: 'https://github.com/Kodenaime/gloss-app',
    live: 'https://gloss-app.vercel.app/'
  },
  {
    id: 1,
    image: kodechopz,
    title: 'A Restaurant Website',
    github: 'https://github.com/Kodenaime/kode-chops', 
    live: 'https://kode-chops-9z1cozxgw-daniels-projects-4a072c3b.vercel.app/'
  },
  {
    id: 10,
    image: port10,
    title: 'An Art Display page ',
    github: 'https://github.com/Kodenaime/art-page',
    live: 'https://art-page-zeta.vercel.app/'
  },
  {
    id: 11,
    image: port11,
    title: 'A Fullstack Blog using MERN Stack',
    github: 'https://github.com/Kodenaime/interchain',
    live: 'https://client-nine-brown.vercel.app/'
  },
  {
    id: 3,
    image: port3,
    title: 'Absu Blog- A functional blog',
    github: 'https://github.com/Kodenaime/Absu-Blog',
    live: 'https://kodenaime.github.io/Absu-Blog/'
  },
 
  {
    id: 15,
    image: port15,
    title: 'A Web 3 website for a token launch',
    github: 'https://github.com/Kodenaime/stage-airdrop',
    live: 'https://stage-airdrop.vercel.app/'
  },

  {
    id: 17,
    image: port16,
    title: 'An Entertainment Industry Landing Page',
    github: 'https://github.com/Kodenaime/zellers',
    live: 'https://zellers.netlify.app/'
  },
  {
    id: 4,
    image: amiirad,
    title: 'A Landing Page for a Clothing Brand',
    github: 'https://github.com/Kodenaime/amiirad-catalogue',
    live: 'https://amiradfashion.com/'
  },

  {
    id: 2,
    image: port2,
    title: 'Annas Closet A Display website',
    github: 'https://github.com/Kodenaime/Anna-s-Closet',
    live: 'https://kodenaime.github.io/Anna-s-Closet/'
  },
  {
    id: 18,
    image: port18,
    title: 'Live React Portfolio',
    github: 'https://github.com/Kodenaime/react-portfolio-website',
    live: 'https://daniels-website-ten.vercel.app/I'
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