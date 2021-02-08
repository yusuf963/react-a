import React from 'react'
import Footer from './Footer'
import './About.css'

const About = () => {
  return (
    <>
      <div className="about-container">
        <p className='about-paragraph'>
          You can visite my portfolio for<br></br> extra details or to contact me by<br></br> clicking the icon on the left<br></br> of the navigation bar.<br></br>
          <br></br>This web-site is a collection of projects<br></br> and use of technologies, libraries<br></br> and frameworks I have been working on<br></br> you can find the sources by<br></br> visiting my github account<br></br>
        </p>
        <Footer/>
      </div>
    </>
  )
}
export default About