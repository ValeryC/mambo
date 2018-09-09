import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Activites</a></li>
            <li><a href="/">Calendrier</a></li>
            <li><a href="/">Intervenants</a></li>
            <li><a href="/">Galerie</a></li>
            <li><a href="/">Adhésion</a></li>
        </ul>
    </nav>
)

export default sideDrawer