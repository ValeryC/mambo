import React, { Component } from 'react'
import './style/Homepage.css'
import '../components/Carousel/Carousel.css'
import Navbar from './Navbar.js'
import Carousel from '../components/Carousel/Carousel.js'
import LinkToPagePart from '../components/LinkToPagePart.js'
import HomepagePresentationContent from '../components/HomepagePresentationContent.js'

class Homepage extends Component {

  // componentDidMount() {

  // }




  render() {

    // const targetDiv = document.getElementById('presentationAsso')
    // const linkToPagePart = () => {
    //   targetDiv.scrollIntoView({behavior: 'smooth'})
    // }

    return (
      <div className='homepage'>
        <Navbar />
        <div className='homepage-carousel-part'>
          <Carousel />
          {/* <a className='test' href='#presentationAsso'> */}
            {/* <div className='homepage-link-to-page-part'> */}
              <LinkToPagePart text="Découvrez l'association" anchor='#presentationAsso' classStyle='homepage-link-to-page-part'/>
            {/* </div> */}
          {/* </a> */}
        </div>
        <HomepagePresentationContent />
      </div>
    )
  }
}

export default Homepage
