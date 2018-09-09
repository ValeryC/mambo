import React, { Component } from 'react'
import './App.css'  
import Toolbar from './components/Toolbar/Toolbar.js'
import SideDrawer from './components/SideDrawer/SideDrawer.js'
import Backdrop from './components/Backdrop/Backdrop.js'

class App extends Component {
  
  state = {
    sideDrawerOpen : false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen:!prevState.sideDrawerOpen}
    })
  }

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop />
    }
    return (
      <div style ={{height:'100%'}} >
      <Toolbar />
      {sideDrawer}
      {backdrop}      
      <main className="body">
        <p>This is the main page</p>
      </main>
    </div>
    );
  }
}

export default App;
