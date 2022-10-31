import React from 'react';
import Screen from './Screen';
import MyContext from "./MyContext";

function Theatre() {
    return ( 
        <MyContext.Consumer>
            {(prop) => (
                <div>
                    <h2>Theatre Name: {prop.mall.theatre}</h2>
                    <h3>Screen Name</h3>
                    {Object.keys(prop.mall.screens).map((sid) => (
                        <Screen
                            key={sid}
                            name={prop.mall.screens[sid].name}
                            time=""
                        />
                    ))} 
                    <h3>Show Times</h3>
                    {Object.keys(prop.mall.shows).map((sid) => (
                        <Screen
                            key={sid}
                            time={prop.mall.shows[sid].time}
                        />
                    ))} 
                </div>
            )}
        </MyContext.Consumer>
     );
}

export default Theatre;