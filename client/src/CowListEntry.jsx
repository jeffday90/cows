import React from 'react';

var CowListEntry = (props) => (
    <div style={{textAlign: 'center'}}>
        <h3>HERE'S ONE OF OUR COWS:</h3>
        <div>name: {props.cow.name}</div>
        <div>description: {props.cow.description}</div>
    </div>
);

export default CowListEntry;