import React, { Component } from 'react'
import './style/Page.css'
import Navbar from './Navbar.js'
import Page from './Page.js'
import CalendrierContent from './CalendrierContent.js'
import bg2 from '../img/bgHome2.jpg'

class Calendrier extends Component {
  render() {
    return (
      <div className='page'>
      <Navbar />      
      <Page Content={CalendrierContent} background={bg2}/>
    </div>
    )
  }
}

export default Calendrier