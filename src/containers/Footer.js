import React, { Component } from 'react'
import './style/Footer.css'
import Newsletter from '../components/Newsletter.js'
import Contact from '../components/Contact.js'


class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-container'>
          <Newsletter />
          <Contact />
        </div>
      </div>
    )
  }
}

export default Footer