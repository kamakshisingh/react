import React from 'react';

function Car(props) {
    return ( 
        <div>
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <button onClick={props.incPrice}>Inc</button>
            <button onClick={props.decPrice}>Dec</button>
        </div>
     );
}

export default Car;