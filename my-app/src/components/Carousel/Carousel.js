import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import './Carousel.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import bgHome1 from '../../img/bgHome1.jpg'
import bgHome2 from '../../img/bgHome2.jpg'
import bgHome3 from '../../img/bgHome3.jpg'

const CarouselBackground = () => {

  const options = {
    speed: 400,
    wrap: false,
    showIndicators: false,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    stopOnHover: false,
    transitionTime: 1000,
    interval: 5000
  }

  return (
    <div className='carousel-global'>
      <Carousel {...options}>
        <div>
          <img src={bgHome1} alt='Carousel 1' />
          {/* <p className='legend'>Legend 1</p> */}
        </div>
        <div>
          <img src={bgHome2} alt='Carousel 2' />
          {/* <p className='legend'>Legend 2</p> */}
        </div>
        <div>
          <img src={bgHome3} alt='Carousel 3' />
          {/* <p className='legend'>Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselBackground