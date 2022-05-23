import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Navbar />
        <div className="content">
            {/* { content for each page } */}
            { children }
        </div>
        <footer>
            <p>Tampere, Finland</p>
        </footer>
    </div>
  )
}
