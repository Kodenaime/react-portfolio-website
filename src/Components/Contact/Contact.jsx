import React from 'react'
import './contact.css'
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6436wtt', 'template_03g5tg6', form.current, 'ixOpuARCs9lBJOb0F')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()

  };


  return (
    <section id="contact">
      <h5>get in touch</h5>
      <h2>Contact</h2>

      <div className="container contact-container">

        <div className="contact-left">
          <article className="contact">
            <MdMarkEmailRead className='contact-icon'/>
            <h4>Email</h4>
            <h5>creativedannyk@gmail.com</h5>
            <a href="mailto:creativedannyk@gmail.com" target='_blank' rel="noreferrer">Send a messge</a>
          </article>
          <article className="contact">
            <FaLinkedin className='contact-icon'/>
            <h4>Linkedin</h4>
            <h5>Ekechukwu Daniel</h5>
            <a href="https://www.linkedin.com/in/daniel-ekechukwu-4ba26a244?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8b4zYDC1QlyEKWt5UcoexQ%3D%3D" target='_blank' rel="noreferrer">Send a messge</a>
          </article>
          <article className="contact">
            <FaSquareWhatsapp className='contact-icon'/>
            <h4>Whatsapp</h4>
            <h5>Ekechukwu Daniel</h5>
            <a href="https://wa.me/+2348068564195?" target='_blank' rel="noreferrer">Send a messge</a>
          </article>
        </div>
        
        <div className="container-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full name' required />
            <input type="email" name='email' placeholder='Your email' required />
            <textarea name="message" rows="10" placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send</button>
          </form>
        </div>

      </div>
      
    </section>
  )
}

export default Contact