import React, { Component } from 'react'

class HomepageActu extends Component {
  componentDidMount() {
    window.onscroll = () => { stickBackground() }

    const backgroundPart = document.getElementById('background-part')
    const contentPart = document.getElementById('content-part')

    const stickBackground = () => {
      const add = () => {
        backgroundPart.classList.add('homepage-actu-background-fixed')
        contentPart.classList.add('homepage-actu-content-scroll')
      }
      const remove = () => {
        backgroundPart.classList.remove('homepage-actu-background-fixed')
        contentPart.classList.remove('homepage-actu-content-scroll')
      }
      window.pageYOffset >= window.innerHeight ? add() : remove()
    }
  }

  render() {

    return (
      <div id='actuAsso' className='homepage-actu-container'>
        <div id='background-part' className='homepage-actu-background'>
          <div className='homepage-actu-image'></div>
        </div>
        <div id='content-part' className='homepage-actu-content'>
          <div className='homepage-actu-text'>
            <p>Blabla</p>
          </div>
        </div>
      </div>
    )
  }
}

export default HomepageActu