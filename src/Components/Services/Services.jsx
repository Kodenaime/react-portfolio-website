import React from 'react'
import './services.css'
import{BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service-container">


        <article className="service">
          <div className="head">
            <h3>Website Management</h3>
          </div>
            <ul className="list">
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>  
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>             
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li> 
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li> 
            </ul>
          
        </article>
        <article className="service">
          <div className="head">
            <h3>Website Development</h3>
          </div>
            <ul className="list">
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>  
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>             
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li> 
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li> 
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li> 
            </ul>
          
        </article>


        <article className="service">
          <div className="head">
            <h3>Content Creation</h3>
          </div>
            <ul className="list">
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>  
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>             
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li> 
              <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li> 
            </ul>
          
        </article>



      </div>

    </section>
  )
}

export default Services