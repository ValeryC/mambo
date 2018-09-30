import React, { Component } from 'react'
import './style/Page.css'
import Navbar from './Navbar.js'
import Page from './Page.js'
import GalerieContent from '../components/GalerieContent.js'
import bg2 from '../img/bgHome2.jpg'

class Galerie extends Component {
  render() {
    return (
      <div className='page'>
        <Navbar />
        <Page Content={GalerieContent} background={bg2} />
      </div>
    )
  }
}

export default Galerie
