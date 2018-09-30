import React, { Component } from 'react'
import presentationAssoGlobal from '../datas/presentationAsso.json'

class HomepagePresentationContent extends Component {
  state = {
    presentationAsso: '',
  }

  componentDidMount() {
    this.setState({ presentationAsso: presentationAssoGlobal }, () => {
      const presentationPart1 = document.getElementById('presentationPart1')
      presentationPart1.innerHTML = this.state.presentationAsso.part1
      const presentationPart2 = document.getElementById('presentationPart2')
      presentationPart2.innerHTML = this.state.presentationAsso.part2
    })

    window.onscroll = () => { stickBackground() }

    const backgroundPart = document.getElementById('background-part')
    const contentPart = document.getElementById('content-part')

    const stickBackground = () => {
      const add = () => {
        backgroundPart.classList.add('homepage-presentation-background-fixed')
        contentPart.classList.add('homepage-presentation-content-scroll')
      }
      const remove = () => {
        backgroundPart.classList.remove('homepage-presentation-background-fixed')
        contentPart.classList.remove('homepage-presentation-content-scroll')
      }
      window.pageYOffset >= window.innerHeight ? add() : remove()
    }
  }

  render() {

    return (
      <div id='presentationAsso' className='homepage-presentation-container'>
        <div id='background-part' className='homepage-presentation-background'>
          <div className='homepage-presentation-image'></div>
        </div>
        <div id='content-part' className='homepage-presentation-content'>
          <div className='homepage-presentation-text'>
            <main>
              <h1>Mambo Salsa</h1>
              <p id='presentationPart1'></p>
              <iframe width="100%" height="540" src="https://www.youtube.com/embed/3iq1_xZ0vTo" frameborder="0" allowfullscreen></iframe>
              <p id='presentationPart2'></p>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default HomepagePresentationContent