import React from "react";
import Car from "./Car";
import MyContext from "./MyContext";

const Cars = () => (
  <MyContext.Consumer>
    {(props) => (
      <div>
        <h3>Cars</h3>
        {Object.keys(props.cars).map((carid) => (
          <Car
            key={carid}
            name={props.cars[carid].name}
            price={props.cars[carid].price}
            incPrice={() => props.incPrice(carid)}
            decPrice={() => props.decPrice(carid)}
          />
        ))}
      </div>
    )}
  </MyContext.Consumer>
);

export default Cars;
