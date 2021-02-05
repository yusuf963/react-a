import React from 'react'
import { Link } from 'react-router-dom'
import image from '../asset/logo.png'
import './Nav.css'

const Nav = () => {
  return (
    <header className="header">
      <>
        <img className='logo-nav' src={image} alt='logo' />
        <ul>
          <div className='my-container'>
            <a className='my-design' href="https://yusuf-portfolio.netlify.app/" target="_blank" rel="noreferrer">M.Y Design</a>
          </div>

          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/project">Projects</Link>
          <Link className='link' to="/map">Map</Link>
          <Link className='link' to="/country">Country API</Link>
          <Link className='link' to="/tvshow">Tv Show API</Link>
          <Link className='link' to="/about">About</Link>
        </ul>
      </>
    </header>
  )
}

export default Nav
