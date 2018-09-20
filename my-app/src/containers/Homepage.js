import React, { Component } from 'react'
import '../App.css'
import '../components/Carousel/Carousel.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Navbar from './Navbar.js'
import Carousel from '../components/Carousel/Carousel'

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="body">
          Homepage
      </main>
        <div className="Carrousel-size">
          <Carousel />
        </div>
      </div>
    )
  }
}

export default Homepage
