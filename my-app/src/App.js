import React, { Component } from 'react'
import './App.css'  
import Toolbar from './components/Toolbar/Toolbar.js'
import SideDrawer from './components/SideDrawer/SideDrawer.js'
import Backdrop from './components/Backdrop/Backdrop.js'
import Carousel from "./components/Carousel/Carousel.js";
import "./components/Carousel/Carousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
  
  state = {
    sideDrawerOpen : false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen:!prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen:false})
  }

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style ={{height:'100%'}} >
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}      
      <main className="body">
        <p>This is the main page</p>
      </main>
      <div className="Carrousel-size">
      <Carousel />
      </div>
  
  
    </div>
    );
  }
}

export default App;
