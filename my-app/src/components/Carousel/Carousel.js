import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import './Carousel.css'

export default () => (
  <div className='Carou'>
    <Carousel autoPlay>
      <div>
        <img src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg' alt='Carousel 1' />
        {/* <p className='legend'>Legend 1</p> */}
      </div>
      <div>
        <img src='http://lorempixel.com/output/cats-q-c-640-480-2.jpg' alt='Carousel 2' />
        {/* <p className='legend'>Legend 2</p> */}
      </div>
      <div>
        <img src='http://lorempixel.com/output/cats-q-c-640-480-3.jpg' alt='Carousel 3' />
        {/* <p className='legend'>Legend 3</p> */}
      </div>
      <div>
        <img src='http://lorempixel.com/output/cats-q-c-640-480-4.jpg' alt='Carousel 4' />
        {/* <p className='legend'>Legend 4</p> */}
      </div>
      <div>
        <img src='http://lorempixel.com/output/cats-q-c-640-480-5.jpg' alt='Carousel 5' />
        {/* <p className='legend'>Legend 5</p> */}
      </div>
    </Carousel>
  </div>
)
