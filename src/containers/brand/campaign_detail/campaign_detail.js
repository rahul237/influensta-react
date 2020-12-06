import React from 'react';
import './campaign_detail.css';
import Applicants from '../Applicants/Applicants'
import Recomm_influencers from '../recomm_influencers/recomm_influencers';
import Footer from '../../../components/Common/Footer/Footer';
import {Link} from 'react-router-dom';
 
const campaign_detail = (props) => {
    return (
    <div className="campaign_detail">
        <h1><Link to={{pathname: '/campaignName'}}>{props.campaignName}</Link></h1>
        <p>{props.campaignInfo}</p>
        <h3>Category: {props.campaignCategory}</h3>
        <Applicants />
        <Recomm_influencers />
        <Footer />
    </div>
    
    ) 
};

export default campaign_detail;