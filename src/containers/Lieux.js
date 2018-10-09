import React, { Component } from 'react'
import './style/Page.css'
import Navbar from './Navbar'
import Page from './Page'
import LieuxContent from './LieuxContent.js'
import bg1 from '../img/bgHome1.jpg'

class Lieux extends Component {
  render() {
    return (
      <div className='page'>
        <Navbar />
        <Page Content={LieuxContent} background={bg1} categoryName='Lieux'/>
      </div>
    )
  }
}

export default Lieux