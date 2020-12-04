import React from 'react';
import './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems'

const SideDrawer = (props) => {
    
    return(
        <div className="SideDrawer"> Menu
            <div> LOGO </div>
            <nav> 
                <NavigationItems brandName={props.brandName}/>
            </nav>
        </div>
    );
}

export default SideDrawer;