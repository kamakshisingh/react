import React, { Component } from 'react';
import ProviderContext from './ProviderContext';
import Theatre from './Theatre';

class Mall extends Component {
    render() { 
        return (
            <ProviderContext>
                <Theatre />
            </ProviderContext>
        );
    }
}
 
export default Mall;