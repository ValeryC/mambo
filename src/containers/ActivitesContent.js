import React from 'react'
import { Link } from 'react-router-dom'
import Cour from '../components/Cour.js'

const ActivitesContent = ({ title }) => {
  return (
    <div className='page-content'>
      <div className='page-category-content'>
      <div className='page-category-content-title'><h1>{title}</h1></div>
      <p style={{padding: '0 2em 2em 2em'}}>
        A compter du 8 Janvier 2018, nous nous retrouvons 4 fois par semaine, tous les lundis, mardis, mercredis et dimanches. A chacun de ces rendez-vous, nous proposons 2 cours, avec du temps entre et après les cours pour pouvoir pratiquer ou boire un verre dans une ambiance conviviale.
        <br/>
        <br/>
        Vous n’avez jamais fait de Salsa/Bachata ? Pas d’inquiétude ! Nous accueillons avec plaisir les débutants !
        <br/>
        <br/>
        Plus d’infos sur la page  
        <Link to='/adhesion'>
          <span className='page-category-content-link'> Adhésion</span>
        </Link>.
        <br/>
      </p>
      <Cour />
      </div>
    </div>
  )
}

export default ActivitesContent