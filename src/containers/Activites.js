import React, { Component } from 'react'
import './style/Page.css'
import Navbar from './Navbar.js'
import Page from './Page.js'
import ActivitesContent from '../components/ActivitesContent.js'
import bg1 from '../img/bgHome1.jpg'

class Activites extends Component {
  render() {
    return (
      <div className='page'>
      <Navbar />      
      <Page Content={ActivitesContent} background={bg1} categoryName='Cours'/>
    </div>
    )
  }
}

export default Activites