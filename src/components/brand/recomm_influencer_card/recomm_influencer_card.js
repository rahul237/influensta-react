import React from 'react';
import './recomm_influencer_card.css';

const recomm_influencer_card = (props) => {
    return (
    <div className="recomm_influencer_card">

        <img src={props.img_url} ></img>
                This is a recommended influencer card
    </div>
    )
};

export default recomm_influencer_card;