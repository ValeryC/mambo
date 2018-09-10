import React from 'react'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js'
import './Toolbar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button" >
                <DrawerToggleButton click ={props.drawerClickHandler} />
            </div>   
            <div className="toolbar_logo"><a href="/">Mambo Salsa</a></div>  
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">Activites</a></li>
                    <li><a href="/">Calendrier</a></li>
                    <li><a href="/">Intervenants</a></li>
                    <li><a href="/">Galerie</a></li>
                    <li><a href="/">Adhésion</a></li>
                </ul>
            </div>
        </nav> 
    </header>  
    )
export default toolbar