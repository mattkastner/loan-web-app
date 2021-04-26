import React, { Component } from "react";
import "./CalculatorForm.scss";

import CalcSlider from "./CalcSlider";

export default class CalculatorForm extends Component {
  constructor() {
    super();
    this.state = {
      homePrice: 30000,
      zipCode: "84005",
      loanProgram: "30 years fixed",
    };
  }
  render() {
    return (
      <div className="calculator-form">
        <div className="calculator-form__input">
          <label>Home Price</label>
          <input className="" value={this.state.homePrice} />
        </div>
        <div className="calculator-form__input">
          <label>Zip Code</label>
          <input className="" value={this.state.zipCode} />
        </div>
        <div className="calculator-form__input">
          <label>Loan program</label>
          <input className="" value={this.state.loanProgram} />
          {/* <select>
            <option value={this.state.loanProgram}>{this.state.loanProgram}</option>
          </select> */}
        </div>
        <br />

        <div className="calculator-form__input">
          <label>Down payment</label>
          <CalcSlider max={90}></CalcSlider>
          <div className="range">
            <p>0%</p>
            <p>90%</p>
          </div>
        </div>
        <div className="calculator-form__input">
          <label>Interest rate</label>
          <CalcSlider max={1500} percentage={true}></CalcSlider>
          <div className="range">
            <p>0%</p>
            <p>15%</p>
          </div>
        </div>
        <div className="calculator-form__input">
          <label>Property taxes/year</label>
          <CalcSlider max={300} percentage={true}></CalcSlider>
          <div className="range">
            <p>0%</p>
            <p>3%</p>
          </div>
        </div>
      </div>

    );
  }
}
