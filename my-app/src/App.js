import React, { Component } from 'react'
import './App.css'  
import Toolbar from './components/Toolbar/Toolbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Toolbar />
      <main className="body">
        <p>This is the main page</p>
      </main>
      </div>
    );
  }
}

export default App;
