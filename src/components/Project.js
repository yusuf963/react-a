import React from 'react'
import { HashRouter } from 'react-router-dom'


//import subComponent
import Quote from './Quote'

//import styles
import './Project.css'

const SubNav = () => {
  return (
    <>
      <div className="overlay overlay-slide-left" id="overlay">
        <nav>
          <ul>
            <li className="nav-1 slide-out-1"><a href="#home">Home</a></li>
            <li className="nav-2 slide-out-2"><a href="#about">About</a></li>
            <li className="nav-3 slide-out-3"><a href="#skills">Skills</a></li>
            <li className="nav-4 slide-out-4"><a href="#projects">Projects</a></li>
            <li className="nav-5 slide-out-5"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* <div className="menu-bars" id="menu-bars">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div> */}

      <section className="home">
        {/* <a href="https://yusuf-portfolio.netlify.app/">M.Y Design</a> */}
      </section>
      <section className="about"><Quote /></section>
      <section style={{ maxHeight: '100wh' }} className="skills"><h1></h1></section>
      <section className="projects"><h1></h1></section>
      <section className="contact"><h1></h1></section>
    </>

  )
}

const Projects = () => {
  return (

    <SubNav />

  )
}

export default Projects