import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <h1>Gaurab Mahat</h1>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </nav>
  )
}
