import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import { FaMedium } from "react-icons/fa6";
 
const Socials = () => {
  return (
    <div className="socials">
        <a href="https://www.linkedin.com/in/daniel-ekechukwu-4ba26a244?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8b4zYDC1QlyEKWt5UcoexQ%3D%3D"target='blank'> <BsLinkedin /> </a>
        <a href="https://github.com/Kodenaime"target='blank'> <FaGithub /> </a>
        <a href="https://twitter.com/kode456"target='blank'> <FiTwitter /> </a>
        <a href="https://medium.com/@creativedannyk"target='blank'> <FaMedium /> </a>
    </div>
  )
}

export default Socials