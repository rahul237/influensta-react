import React from 'react';
import './campaign_card.css';
import Category from '../../Common/Category/Category';

const campaign_card = (props) => {
    return (
    
    <div className="campaign_card">
        <div>
            <img src={props.img_url} className="imgClass"></img>
        </div>
        <div className = "Content"> 
            <h2>Campaign Name</h2> 
            <div><p> Campaign description.....  ............  ..........lorem ipsum....  ............  ........  .......... Nutom is thsi and that Nutom is thsi and that </p></div>
            <div className="btnClass"><button> Add to Campaign </button> </div>
            <div className="categoryClass">
                <Category categoryName = "Fashion" />
                <Category categoryName = "Tech" />
            </div>
        </div>
    </div>
    )
};

export default campaign_card;