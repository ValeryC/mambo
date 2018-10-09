import React, { Component } from 'react'
import './style/Homepage.css'
import '../components/Carousel/Carousel.css'
import Navbar from './Navbar.js'
import { CarouselBackground } from '../components/Carousel/Carousel.js'
import LinkToPagePart from '../components/LinkToPagePart.js'
import HomepagePresentationContent from '../components/HomepagePresentationContent.js'
import HomepageActu from '../components/HomepageActu.js'
import Footer from './Footer.js'

class Homepage extends Component {
render() {
    return (
      <div className='homepage'>
        <Navbar />
        <div className='homepage-carousel-part'>
          <CarouselBackground />
          <LinkToPagePart text="Découvrez l'association" anchor='#presentationAsso' classStyle='homepage-link-to-page-part'/>
        </div>
        <div  className='homepage-presentation-container'>
          <HomepagePresentationContent />
          {/* <LinkToPagePart text="Actualités" anchor='#actuAsso' classStyle='homepage-link-to-page-part'/> */}
        <Footer />
        </div>
        {/* <HomepageActu /> */}
      </div>
    )
  }
}

export default Homepage
