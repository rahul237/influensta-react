import React from 'react';

const brand = (props) => {
    return (
    <p>
        I'm a brand called {props.name} and {props.age} years old
        {props.children}

    </p>
    ) 
}

export default brand;