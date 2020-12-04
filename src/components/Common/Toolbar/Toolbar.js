import React from 'react';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className="Toolbar">
        <div> Menu </div>
        <div> LOGO </div>
        <nav> 
            <NavigationItems brandName={props.brandName}/>
        </nav>
    </header>
);

export default toolbar