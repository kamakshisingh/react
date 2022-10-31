import React, { Component } from "react";
import CarList from "./CarList";
import ProviderContext from './ProviderContext';

class MainComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.incPrice = this.incPrice.bind(this);
//     this.decPrice = this.decPrice.bind(this);
//   }
  render() {
    return (
      <ProviderContext>
        <div>
          <h1>Welcome to the world of Cars</h1>
          <CarList />
        </div>
      </ProviderContext>
    );
  }
}

export default MainComponent;
