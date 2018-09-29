import React, { Component } from 'react'
import '../App.css'
import '../components/Carousel/Carousel.css'
import Navbar from './Navbar.js'
import Carousel from '../components/Carousel/Carousel.js'

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className='body'>
          Homepage
      </main>
        <div className='carousel-size'>
          <Carousel />
        </div>
      </div>
    )
  }
}

export default Homepage
