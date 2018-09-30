import React, { Component } from 'react'
import './style/Page.css'
import Navbar from './Navbar.js'
import Page from './Page.js'
import PartenairesContent from '../components/PartenairesContent.js'
import bg1 from '../img/bgHome1.jpg'

class Partenaires extends Component {
  render() {
    return (
      <div className='page'>
      <Navbar />      
      <Page Content={PartenairesContent} background={bg1}/>
    </div>
    )
  }
}

export default Partenaires