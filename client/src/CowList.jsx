import React from 'react';
import CowListEntry from './CowListEntry.jsx';

var CowList = (props) => (
    <div>
        <div> 
            {props.cows.map(cow => <CowListEntry cow={cow} key={props.cows.indexOf(cow)}/>)}
        </div>
    </div>
)

export default CowList;