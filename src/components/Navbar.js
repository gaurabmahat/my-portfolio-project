import { Link } from 'gatsby'
import React from 'react'
import * as styles from "../styles/navbar.module.css"

export default function Navbar() {
  return (
    <nav>
        <h1 className={styles.text}>Gaurab Mahat</h1>
        <div className='links'>
            <Link to="/"><span className={styles.navText}>Home</span></Link>
            <Link to="/aboutMe"><span className={styles.navText}>About Me</span></Link>
            <Link to="/contact"><span className={styles.navText}>Contact</span></Link>
        </div>
    </nav>
  )
}
