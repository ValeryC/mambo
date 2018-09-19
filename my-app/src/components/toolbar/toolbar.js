import React from 'react'
import { Link } from 'react-router-dom'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js'
import './Toolbar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button" >
                <DrawerToggleButton click ={props.drawerClickHandler} />
            </div>   
            <div className="toolbar_logo"><Link to={"/"}>Mambo Salsa</Link></div>  
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                    <li><Link to={"/activites"}>Activites</Link></li>
                    <li><Link to={"/calendrier"}>Calendrier</Link></li>
                    <li><Link to={"/intervenants"}>Intervenants</Link></li>
                    <li><Link to={"/partenaires"}>Partenaires</Link></li>
                    <li><Link to={"/galerie"}>Galerie</Link></li>
                    <li><Link to={"/adhesion"}>Adhésion</Link></li>
                </ul>
            </div>
        </nav> 
    </header>  
    )
export default toolbar