import React from 'react'
import Footer from './Footer'
import './About.css'

const About = () => {
  return (
    <>
      <div className="about-container">
        <p className='about-paragraph'>
          You can visite my portfolio for<br></br> extra details or to contact me by<br></br> clicking the icon on the left<br></br> of the navigation bar.<br></br>
          <br></br>This web-site is a collection of projects<br></br> and use of technologies, libraries<br></br> and frameworks I have been working on<br></br>practicing API requests to create a <br></br>searchable web apps,<br></br> with a UI that makes HTTP calls to a<br></br> MySQL-backed REST API <br></br>written in Node.js, and displays results <br></br>to the user in real-time.<br></br><br></br>  you can find the sources by<br></br> visiting my github account<br></br>
        </p>
        <Footer/>
      </div>
    </>
  )
}
export default About