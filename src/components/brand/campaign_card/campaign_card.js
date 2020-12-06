import React from 'react';
import './campaign_card.css';
import Category from '../../Common/Category/Category';
import {Link} from 'react-router-dom';

const campaign_card = (props) => {
    return (
    
    <div className="campaign_card">
        <div>
            <img src={props.img_url} className="imgClass"></img>
        </div>
        <div className = "Content"> 
        <Link to={{pathname: '/campaignName'}}><h2>Campaign Name</h2> </Link>
            <div><p> Campaign description.....  ............  ..........lorem ipsum....  ............  ........  .......... Nutom is thsi and that Nutom is thsi and that </p></div>
            <div className="btnClass"><Link to={{pathname: '/campaignName'}}><button> View Details </button></Link> </div>
            <div className="categoryClass">
                <Category categoryName = "Fashion" />
                <Category categoryName = "Tech" />
            </div>
        </div>
    </div>
    )
};

export default campaign_card;