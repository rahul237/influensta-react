import React from 'react';
import './Toolbar.css';

const toolbar = (props) => (
    <header className="Toolbar">
        <div> Menu </div>
        <div> LOGO </div>
        <nav> 
            <ul>
                <li>Welcome {props.brandName}</li>
                <li>Notification icon</li>
                <li> Contact Us </li>
            </ul>
        </nav>
    </header>
);

export default toolbar