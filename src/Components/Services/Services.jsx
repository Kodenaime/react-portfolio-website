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
                <p><b>Updates:</b> Identifying and fixing issues, and applying updates to keep websites running smoothly.</p>
              </li>  
              <li>
                <BiCheck className="list-icon"/>
                <p><b>SEO (Search Engine Optimization):</b> Optimizing content for search engines to improve visibility.</p>
              </li>             
              <li>
                <BiCheck className="list-icon"/>
                <p><b>Product Reviews:</b> Creating content to review and promote products or services.</p>
              </li> 
              {/* <li>
                <BiCheck className="list-icon"/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>  */}
            </ul>
          
        </article>
        <article className="service">
          <div className="head">
            <h3>Website Development</h3>
          </div>
            <ul className="list">
              <li>
                <BiCheck className="list-icon"/>
                <p><b>Development:</b> Creating the user interface and user experience on the client side.</p>
              </li>  
              <li>
                <BiCheck className="list-icon"/>
                <p><b>Responsive Design:</b> Ensuring websites are optimized for various devices and screen sizes.</p>
              </li>             
              <li>
                <BiCheck className="list-icon"/>
                <p><b>Custom Web Development:</b> Building tailored web applications to meet specific business requirements.</p>
              </li> 
              <li>
                <BiCheck className="list-icon"/>
                <p><b>Web Api Integration:</b> Integrating third-party APIs and services into web applications.</p>
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
                <p><b>Article Writing:</b> Creating written content for websites, blogs, or publications.</p>
              </li>
              <li>
                <BiCheck className="list-icon"/>
                <p><b>Content Posting:</b> Planning and scheduling posts on social media platforms.</p>
              </li>  
              <li>
                <BiCheck className="list-icon"/>
                <p><b>Community Engagement:</b> Interacting with the audience through comments, messages, and discussions.</p>
              </li>             
              <li>
                <BiCheck className="list-icon"/>
                <p><b>Social Media Strategy:</b> Developing a strategy to grow and engage the audience on various platforms.</p>
              </li> 
               
            </ul>
          
        </article>



      </div>

    </section>
  )
}

export default Services