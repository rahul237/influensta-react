import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Hello {props.brandName}</NavigationItem>
        <NavigationItem link="/" >Notif Icon</NavigationItem>
        <NavigationItem link="/" >Contact Us</NavigationItem>
        <NavigationItem link="/brand_login">Login</NavigationItem>

    </ul>

);

export default navigationItems;