import React from 'react';

function Screen(props) {
    return ( 
        <div>
            {props.name}
            {props.time!=="" ? <p>{props.time}&nbsp;PM</p>: ""}
        </div>
     );
}

export default Screen;