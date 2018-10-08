import React, { Component } from 'react'
import './style/Cour.css'
import Cours from '../datas/cours.json'
import Nadege from '../img/nadege_vignette.jpg'
import CellyAlix from '../img/cellyalix_vignette.jpg'
import Julien from '../img/julien_vignette.jpg'
import Alex from '../img/alex_vignette.jpg'
import Bliss from '../img/bliss_vignette.jpg'
import Temple from '../img/temple_vignette.jpg'

class Cour extends Component {
  state = {
    cours: [],
  }

  componentWillMount() {
    this.setState({ cours: Cours })
  }

  showCours = () => this.state.cours.map((cour, index) => {
    const horaires = cour.horaires.map(crenau => {
      return (
        <div>
          <span>{crenau}</span>
          <br />
        </div>
      )
    })

    const bgColor = (index % 2 === 0) ? '#bf4a04' : '#9a2424'

    const photoProf = () => {
      if (cour.nom === "Nadège Dora") return Nadege
      if (cour.nom === "Celly & Alix") return CellyAlix
      if (cour.nom === "Julien Rogaume") return Julien
      if (cour.nom === "Alex Lima") return Alex
    }

    const photoLieu = () => {
      if (cour.nomLieu === "Le Bliss") return Bliss
      if (cour.nomLieu === "Le Café du Temple") return Temple
    }

    return (
      <div className='cour' style={{backgroundColor: bgColor}}>
        <div className='cour-bloc-left'>
          <p>
            <span>{cour.nom}</span>
            <span>{cour.titre}</span>
          </p>
        <div className='cour-bloc-left-bg' style={{backgroundImage: `url(${photoProf()})`}}></div>
        </div>
        <div className='cour-bloc-center'>
          <p>{cour.jour}</p>
          <p>{horaires}</p>
        </div>
        <div className='cour-bloc-right'>
          <p>
            <span>{cour.nomLieu}</span>
            <span>{cour.adresseLieu}</span>
            <span>{cour.villeLieu}</span>
          </p>
          <div className='cour-bloc-right-bg' style={{backgroundImage: `url(${photoLieu()})`}}></div>
        </div>
      </div>
    )
  }
  )


  render() {
    return (
      <div>
        {this.showCours()}
      </div>
    )
  }
}

export default Cour