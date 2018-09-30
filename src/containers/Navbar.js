import React, { Component } from 'react'
import '../App.css'
import Toolbar from '../components/Toolbar/Toolbar.js'
import SideDrawer from '../components/SideDrawer/SideDrawer.js'
import Backdrop from '../components/Backdrop/Backdrop.js'

class Navbar extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let sideDrawer
    let backdrop

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    )
  }
}

export default Navbar
