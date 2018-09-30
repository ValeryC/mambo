import React, { Component } from 'react'
import './style/Homepage.css'
import '../components/Carousel/Carousel.css'
import Navbar from './Navbar.js'
import Carousel from '../components/Carousel/Carousel.js'
import HomepagePresentationContent from '../components/HomepagePresentationContent.js'

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <Navbar />
        <div className='homepage-carousel-size'>
          <Carousel />
        </div>
        <HomepagePresentationContent />
      </div>
    )
  }
}

export default Homepage
