import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import * as styles from '../styles/layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {/* { content for each page } */}
        {children}
      </div>
      <footer className={styles.footerComponents}>
        <div>
          <p>LOCATION <br /> Tampere, Finland</p>
        </div>
        <div className={styles.icons}>
          <a href="mailto:gaurab.mahat.work@gmail.com" target="_blank" rel="noopener noreferrer" alt="gmail">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
          <a href="https://github.com/gaurabmahat" target="_blank" rel="noopener noreferrer" alt="github">
            <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/gaurab-mahat-937299191/" target="_blank" rel="noopener noreferrer" alt="linkedIn">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </div>
      </footer>
    </div>
  )
}
