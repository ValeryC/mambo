import React, { Component } from 'react'
import './style/Homepage.css'
import '../components/Carousel/Carousel.css'
import Navbar from './Navbar.js'
import Carousel from '../components/Carousel/Carousel.js'
import presentationAsso from '../datas/presentationAsso.json'

class Homepage extends Component {
  state = {
    presentationAsso : '',
  }

  componentDidMount() {
    this.setState({presentationAsso: presentationAsso})
  }

  render() {
    return (
      <div className='homepage'>
        <Navbar />
        <div className='homepage-carousel-size'>
          <Carousel />
        </div>
        <div className='homepage-presentation-container'>
          <div className='homepage-presentation-background'>
            <div className='homepage-presentation-image'></div>
          </div>
          <div className='homepage-presentation-content'>
            <div className='homepage-presentation-text'>
              <main>
                <p>{presentationAsso.part1}</p>
                <p>{presentationAsso.part2}</p>
              </main>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
