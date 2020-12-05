import React from 'react';
import "./Category.css"

const category = (props) => {
    return(
        <div class="Category">
            <h4>{props.categoryName}</h4>
        </div>
    )
};

export default category