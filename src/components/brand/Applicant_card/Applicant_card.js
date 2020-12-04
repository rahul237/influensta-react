import React from 'react';
import './Applicant_card.css';

const Applicant_card = (props) => {
    return (
    <div className="Applicant_card">

        <img src={props.img_url} ></img>
                This is an Applicant card
        <button>Accept</button>
        <button>Reject</button>
    </div>
    )
};

export default Applicant_card;