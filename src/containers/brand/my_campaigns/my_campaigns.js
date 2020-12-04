
import React from 'react';
import './my_campaigns.css';
const my_campaigns = (props) => {
    return (
    <p className="my_campaigns">
        <p>These are all my campaigns</p>
        {props.children}
    </p>
    ) 
};

export default my_campaigns;