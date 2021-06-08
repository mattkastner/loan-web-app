import React, { Component } from "react";
import PaymentEstimation from "./heading/PaymentEstimation";
import LenderRates from "./lenders/LenderRates";
import CalculatorForm from "./calculator-form/CalculatorForm";

export default class CalculatoCombo extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <div className="loan-app">
        <PaymentEstimation
          updateIsOpen={(value) => this.setState({ isOpen: value })}
        ></PaymentEstimation>
        {this.state.isOpen ? (
          <LenderRates></LenderRates>
        ) : (
          <CalculatorForm></CalculatorForm>
        )}
      </div>
    );
  }
}
