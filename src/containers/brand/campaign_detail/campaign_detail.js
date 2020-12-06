import React from 'react';
import './campaign_detail.css';
import Applicants from '../Applicants/Applicants'
import Recomm_influencers from '../recomm_influencers/recomm_influencers';
import Footer from '../../../components/Common/Footer/Footer';
import {Link} from 'react-router-dom';
 
const campaign_detail = (props) => {
    return (
    <div className="campaign_detail">
        <h1><Link to={{pathname: '/campaignName'}}> Campaign Name {props.campaignName}</Link></h1>
        <div className="Info">
            <div className="ImgClass">
                <img src="https://images.unsplash.com/photo-1586016499740-fb13cc4e4b66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHRodW1ibmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="ImgClass"/>
            </div>
            <p> Campaign Description {props.campaignInfo}</p>
            
            <h3>Category: {props.campaignCategory}</h3>
        </div>
        <div>
        <Applicants />
        </div>

        <Recomm_influencers />
        
        <Footer />
    </div>
    
    ) 
};

export default campaign_detail;