import React from 'react'
import { Link } from 'react-router-dom'
import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link to={'/activites'}>Activites</Link></li>
        <li><Link to={'/calendrier'}>Calendrier</Link></li>
        <li><Link to={'/intervenants'}>Intervenants</Link></li>
        <li><Link to={'/lieux'}>Lieux</Link></li>
        <li><Link to={'/galerie'}>Galerie</Link></li>
        <li><Link to={'/adhesion'}>Adhésion</Link></li>
      </ul>
    </nav>)
}

export default sideDrawer