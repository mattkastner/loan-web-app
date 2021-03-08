import React, { Component } from "react";
import "./CalculatorForm.scss";

import ReactSlider from "react-slider";
import TempCalc from "./tempCalc";

export default class CalculatorForm extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <input></input>
        <input></input>
        <input></input>
        {/* <ReactSlider
          className="horizontal-slider"
          thumbClassName="calculator-thumb"
          trackClassName="calculator-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
         */}
         <TempCalc></TempCalc>
      </div>
    );
  }
}
