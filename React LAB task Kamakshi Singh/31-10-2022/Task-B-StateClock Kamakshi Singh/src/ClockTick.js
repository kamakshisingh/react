import React, { Component } from 'react';

class ClockTick extends Component {
    constructor(props) {
        super(props);
        let curTime = new Date().toLocaleTimeString();
        this.state = {
            Time: curTime,
            Name: "DTA"
        }
    }
    
    componentDidMount() {
        setInterval(this.incTime, 1000);
    }

    incTime = () => {
        let curTime = new Date().toLocaleTimeString();
        this.setState({
            Time: curTime,
            Name: "DELOITTE"
        });
    }
    
    render() { 
        return ( 
            <div>
                <h1>ClockTick</h1>
                <p>Time: {this.state.Time}</p>
                <p>Name: {this.state.Name}</p>
            </div>
         );
    }
}
 
export default ClockTick;