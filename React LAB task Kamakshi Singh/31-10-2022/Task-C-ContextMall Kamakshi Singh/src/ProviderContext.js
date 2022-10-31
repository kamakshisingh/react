import React, { Component } from "react";
import MyContext from "./MyContext";

class ProviderContext extends Component {
  state = {
    mall: {
    theatre: "INOX",
    screens: {
        screen0: {name: "Tiger"},
        screen1: {name: "Cheetah"},
        screen2: {name: "Lion"}
    },
    shows: {
        show0: {time: 9},
        show1: {time: 1},
        show2: {time: 5}
    }
  }
  };
  render() {
    return (
      <MyContext.Provider
        value={{mall: this.state.mall}}
      >{this.props.children}
      </MyContext.Provider>
    );
  }
}

// class ProviderContext extends Component {
//   state = {
//     cars: {
//       car0: { name: "Honda Amaze", price: 4.5 },
//       car1: { name: "Hyundai Creta", price: 5.7 },
//       car2: { name: "Hindustan Ambassador", price: 7.2 },
//     },
//     theatre: "INOX"
//   };
//   render() {
//     return (
//       <MyContext.Provider
//         value={{
//           cars: this.state.cars,
//           incPrice: (carid) => {
//             const carscopy = Object.assign({}, this.state.cars);
//             carscopy[carid].price = carscopy[carid].price + 1;
//             this.setState({ carscopy });
//           },
//           decPrice: (carid) => {
//             const carscopy = Object.assign({}, this.state.cars);
//             carscopy[carid].price = carscopy[carid].price - 1;
//             this.setState({ carscopy });
//           },
//         }}
//       >{this.props.children}</MyContext.Provider>
//     );
//   }
// }

export default ProviderContext;
