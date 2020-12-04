import React from 'react';
import './campaign_card.css';

const campaign_card = (props) => {
    return (
    <div className="campaign_card">

        <img src={props.img_url} ></img>
                This is campaign card
    </div>
    )
};

export default campaign_card;