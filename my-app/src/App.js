import React, { Component } from 'react'
import { BrowserRouter, Route, Switch  }from 'react-router-dom'
import './App.css'  
import Homepage from './containers/Homepage.js'

class App extends Component {

  render() {
  
    return (
      <div>
         <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Homepage}/>
              {/* <Route exact path="/activites" component={Activites}/>
              <Route exact path="/calendrier" component={Calendrier}/>
              <Route exact path="/intervenants" component={Intervenants}/>
              <Route exact path="/partenaires" component={Partenaires}/>
              <Route exact path="/galerie" component={Galerie}/>
              <Route exact path="/adhesion" component={Adhesion}/> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
