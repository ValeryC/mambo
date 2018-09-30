import React, { Component } from 'react'
import './style/Page.css'
import Navbar from './Navbar.js'
import Page from './Page.js'
import AdhesionContent from '../components/AdhesionContent.js'
import bg3 from '../img/bgHome3.jpg'

class Adhesion extends Component {
  render() {
    return (
      <div className='page'>
      <Navbar />      
      <Page Content={AdhesionContent} background={bg3}/>
    </div>
    )
  }
}

export default Adhesion