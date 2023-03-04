import React from 'react'
import Info from './Info.js'
import About from './About.js'
import Interests from './Interests.js'
import Footer from './Footer.js'
export default function App() {
    return (
        <div className='main-container'>
          <Info />
          <About />
          <Interests />
          <Footer />
        </div>
    )
}