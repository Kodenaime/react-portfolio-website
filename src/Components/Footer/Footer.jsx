import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>

      <a href="#" className='logo'>KODE</a>

      <ul className="footer-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/daniel-ekechukwu-4ba26a244?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8b4zYDC1QlyEKWt5UcoexQ%3D%3D"><FaLinkedin /></a>
        <a href="https://twitter.com/kode456"><FaXTwitter /></a>
        <a href="https://medium.com/@creativedannyk"><FaMedium /></a>
      </div>

      <div className="copyright">
        <small>&#169; Ekechukwu Daniel. All rights reserved. </small>
      </div>

    </footer>
  )
}

export default Footer