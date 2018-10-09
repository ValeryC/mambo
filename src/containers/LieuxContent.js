import React, { Component } from 'react'
import lieux from '../datas/lieux.json'
import { CarouselPlace1, CarouselPlace2 } from '../components/Carousel/Carousel.js'
import './style/Lieux.css'

class LieuxContent extends Component {
  evenPlace = lieu => {
    return (
      <React.Fragment>
        <div className='place-even'>
          <div className='place-infos' style={{ backgroundColor: '#bf4a04' }}>
            <h2 className='place-name'>{lieu.name}</h2>
            <p>{lieu.address}</p>
            <p>{lieu.postalCode}</p>
            <br />
            <p>{lieu.phone}</p>
            <br />
            <p><a href={`http://${lieu.website}`} target='_blank'>{lieu.website}</a></p>
            <br />
            <br />
            <p>{lieu.metro}</p>
            <p>{lieu.rer}</p>
          </div>
          <CarouselPlace1 />
        </div>
        {/* <div className='place-description'> */}
        <p className='place-description' style={{ padding: '0 2em 3em 2em' }}>{lieu.description}</p>
        {/* </div> */}
        <div />
      </React.Fragment>
    )
  }

  oddPlace = lieu => {
    return (
      <React.Fragment>
        <div className='place-odd'>
          <div className='place-infos' style={{ backgroundColor: '#9a2424' }}>
            <h2 className='place-name'>{lieu.name}</h2>
            <p>{lieu.address}</p>
            <p>{lieu.postalCode}</p>
            <br />
            <p>{lieu.phone}</p>
            <br />
            <p><a href={`http://${lieu.website}`} target='_blank'>{lieu.website}</a></p>
            <br />
            <br />
            <p>{lieu.metro}</p>
            <p>{lieu.rer}</p>
          </div>
          <CarouselPlace2 />
        </div>
        <p className='place-description' style={{ padding: '0 2em 3.5em 2em' }}>
          {lieu.description}</p>
        <div />
      </React.Fragment>
    )
  }

  componentDidMount() {
    lieux.forEach((place, index) => {
      document.getElementsByClassName('place-description')[index]
        .innerHTML = place.description
      // document.getElementsByClassName('carousel-place')[index]
      //   .style.width = '75%'
      document.getElementsByClassName('carousel')[index].style.height = '30em'
    })
  }

  render() {
    return (
      <div className='page-content'>
        <div className='page-category-content'>
          <div className='page-category-content-title'>
            <h1>{this.props.title}</h1>
          </div>
          {lieux.map((lieu, index) => {
            if (index % 2 === 0) return this.evenPlace(lieu)
            else return this.oddPlace(lieu)
          })}
        </div>
      </div>
    )
  }
}

export default LieuxContent