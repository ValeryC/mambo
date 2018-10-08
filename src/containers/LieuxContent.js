import React, { Component } from 'react'
import lieux from '../datas/lieux.json'
import Carousel from '../components/Carousel/Carousel.js'
import './style/lieux.css'

class LieuxContent extends Component {
  evenPlace = lieu => {
    return (
      <React.Fragment>
        <div className='place-even'>
          <div className='place-infos-even'>
            <h2>{lieu.name}</h2>
            <p>{lieu.address}</p>
            <p>{lieu.postalCode}</p>
            <br/>
            <p>{lieu.phone}</p>
            <br/>
            <p>{lieu.website}</p>
            <br/>
            <br/>
            <p>{lieu.metro}</p>
            <p>{lieu.rer}</p>
            <br/>
            <br/>
          </div>
          <Carousel />
        </div>
        <div className='place-description'>
          {lieu.description}
        </div>
        <div/>
      </React.Fragment>
    )
  }

  oddPlace = (lieu) => {
    return (
      <React.Fragment>
        <div className='place-odd'>
          <div className='place-infos-odd'>
            <h2>{lieu.name}</h2>
            <p>{lieu.address}</p>
            <p>{lieu.postalCode}</p>
            <br/>
            <p>{lieu.phone}</p>
            <br/>
            <p>{lieu.website}</p>
            <br/>
            <br/>
            <p>{lieu.metro}</p>
            <p>{lieu.rer}</p>
            <br/>
            <br/>
          </div>
          <Carousel />
        </div>
        <div className='place-description'>
          {lieu.description}
        </div>
        <div/>
      </React.Fragment>
    )
  }

  componentDidMount () {
    lieux.forEach((place, index) => {
      document.getElementsByClassName('place-description')[index].innerHTML = place.description
    })
  }

  render () {
    return (
      <div className='page-content'>
        <div className='page-category-content'>
        <div className='page-category-content-title'>
          <h1>{this.title}</h1>
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