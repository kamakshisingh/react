import React, { Component } from 'react';

class Child extends Component {    
    componentWillMount() {
        console.log("Child component will mount");
    }

    componentDidMount() {
        console.log("Child component did mount");
        this.props.changeState();
    }

    render() { 
        return ( 
            <div>
                <ul>
                    <li>Name: {this.props.name}</li>
                    <li>Price: {this.props.price}</li>
                </ul>
            </div>
         );
    }
}
 
export default Child;