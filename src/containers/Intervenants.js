import React, { Component } from 'react'
import './style/Page.css'
import Navbar from './Navbar.js'
import Page from './Page.js'
import IntervenantsContent from './IntervenantsContent.js'
import bg3 from '../img/bgHome3.jpg'

class Intervenants extends Component {
  render() {
    return (
      <div className='page'>
      <Navbar />      
      <Page Content={IntervenantsContent} background={bg3} categoryName='Intervenants'/>
    </div>
    )
  }
}

export default Intervenants