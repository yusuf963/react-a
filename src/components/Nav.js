import React from 'react'
import { Link } from 'react-router-dom'
import image from '../asset/logo.png'
import './Nav.css'

const Nav = () => {
  return (
    <header className="header">
      <>
        <Link to="/"><img src={image} style={{ width: '70px', height: '50px' }} alt='logo' /></Link>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/project">Projects</Link>
          <Link to="/map">Map</Link>
          <Link to="/about">About</Link>
        </ul>
      </>
    </header>
  )
}

export default Nav
