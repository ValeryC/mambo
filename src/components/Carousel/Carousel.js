import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import './Carousel.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import bgHome1 from '../../img/bgHome1.jpg'
import bgHome2 from '../../img/bgHome2.jpg'
import bgHome3 from '../../img/bgHome3.jpg'
import bliss1 from '../../img/bliss_1.jpg'
import temple1 from '../../img/temple_1.jpg'

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

const CarouselBackground = () => {
  return (
    <div className='carousel-global'>
      <Carousel {...options}>
        <div>
          <img src={bgHome1} alt='Carousel 1' className='carousel-img-home' />
        </div>
        <div>
          <img src={bgHome2} alt='Carousel 2' className='carousel-img-home' />
        </div>
        <div>
          <img src={bgHome3} alt='Carousel 3' className='carousel-img-home' />
        </div>
      </Carousel>
    </div>
  )
}

const CarouselPlace1 = () => {
  return (
    <div className='carousel-place'>
      <Carousel {...options}>
        <div>
          <img src={bliss1} alt='Le Bliss exterieur' className='carousel-img-place' />
        </div>
        <div>
          <img src={bliss1} alt='Carousel 2' className='carousel-img-place' />
        </div>
        <div>
          <img src={bliss1} alt='Carousel 3' className='carousel-img-place' />
        </div>
      </Carousel>
    </div>
  )
}

const CarouselPlace2 = () => {
  return (
    <div className='carousel-place'>
      <Carousel {...options}>
        <div>
          <img src={temple1} alt='Café du Temple extérieur' className='carousel-img-place' />
        </div>
        <div>
          <img src={temple1} alt='Carousel 2' className='carousel-img-place' />
        </div>
        <div>
          <img src={temple1} alt='Carousel 3' className='carousel-img-place' />
        </div>
      </Carousel>
    </div>
  )
}

export { CarouselBackground, CarouselPlace1, CarouselPlace2 }