import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "default",
            Price: 0.0
        };
        this.changeState = () => {
            this.setState({
                Name: "Default",
                Price: 0.0
            });
        }
    }
    
    componentWillMount() {
        console.log("Parent component loaded");
        this.setState({
            Name: "TV",
            Price: 30000
        });
    }

    componentDidMount() {
        console.log("Parent component mounted");
        console.log(this.state);
    }

    // changeState() {
    //     this.setState({
    //         Name: "Default",
    //         Price: 0.0
    //     });
    // }

    render() { 
        return ( 
            <div>
                <Child name={this.state.Name} price={this.state.Price} changeState={this.changeState}/>
            </div>
         );
    }
}
 
export default Parent;