import React from 'react'
import lieux from '../datas/lieux.json'
import Carousel from '../components/Carousel/Carousel.js'
import './style/lieux.css'

const LieuxContent = ({ title }) => {
  const evenPlace = lieu => {
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
        <div className='place-description-even'>
          {lieu.description}
        </div>
        <div/>
      </React.Fragment>
    )
  }

  const oddPlace = (lieu) => {
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
        <div className='place-description-odd'>
          {lieu.description}
        </div>
        <div/>
      </React.Fragment>
    )
  }

  return (
    <div className='page-content'>
      <div className='page-category-content'>
      <div className='page-category-content-title'><h1>{title}</h1></div>
        {lieux.map((lieu, index) => {
          if (index % 2 === 0) return evenPlace(lieu)
          else return oddPlace(lieu)
        })}
      </div>
    </div>
  )
}

export default LieuxContent