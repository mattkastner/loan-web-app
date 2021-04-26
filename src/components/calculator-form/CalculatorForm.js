import React, { Component } from "react";
import "./CalculatorForm.scss";
import { updateLoan } from "../../redux/reducer";
import CalcSlider from "./CalcSlider";
import { connect } from "react-redux";

import LoanCalc from "loan-calc";

import moment from "moment";
class CalculatorForm extends Component {
  constructor() {
    super();
    this.state = {
      homePrice: "",
      zipCode: "",
      years: 30,
      downPayment: 0,
      interestRate: 1,
      taxes: 0,
    };
  }

  updateLoan = async (value, type) => {
    if (["homePrice", "years", "interestRate", "downPayment"].includes(type)) {
      value = +value;
    }
    this.setState({
      [`${type}`]: value,
    });

    await this.props.updateLoan({ [type]: value });

    if (this.props.homePrice > 0) {
      let monthlyPayment = LoanCalc.paymentCalc({
        amount:
          this.props.homePrice - this.props.downPayment * this.props.homePrice,
        rate: +this.props.interestRate,
        termMonths: +this.props.years * 12,
      });
      // returns 1581.59

      let totalInterest = LoanCalc.totalInterest({
        amount:
          this.props.homePrice - this.props.downPayment * this.props.homePrice,
        rate: +this.props.interestRate,
        termMonths: +this.props.years * 12,
      });
      await this.props.updateLoan({ monthlyPayment, totalInterest });
    }

    let { taxes } = this.props;
    this.setState({
      taxes,
    });
  };

  componentDidMount() {
    this.setState({
      homePrice: this.props.homePrice,
      zipCode: this.props.zipCode,
      years: this.props.years,
      downPayment: this.props.downPayment,
      interestRate: this.props.interestRate,
      taxes: this.props.taxes,
    });
  }

  render() {
    let {
      homePrice,
      zipCode,
      years,
      downPayment,
      interestRate,
      taxes,
    } = this.props;
    return (
      <div className="calculator-form">
        <div className="calculator-form__input">
          <label>Home Price</label>
          <input
            type="number"
            placeholder="0"
            onChange={(e) => this.updateLoan(e.target.value, "homePrice")}
            value={homePrice}
          />
        </div>
        <div className="calculator-form__input">
          <label>Zip Code</label>
          <input
            placeholder="i.e. 84005"
            type="text"
            onChange={(e) => this.updateLoan(e.target.value, "zipCode")}
            value={zipCode}
          />
        </div>
        <div className="calculator-form__input">
          <label>Loan program</label>
          <select
            ref={(ref) => {
              this._select = ref;
            }}
            value={years}
            onChange={(e) => this.updateLoan(e.target.value, "years")}
          >
            <option value={15}>15 years fixed</option>
            <option value={30}>30 years fixed</option>
          </select>
        </div>
        <br />

        <div className="calculator-form__input">
          <label>
            Down payment:
            <span>
              {downPayment * homePrice > 0
                ? "$" + Math.trunc(downPayment * homePrice)
                : "*Enter a home price*"}
            </span>
          </label>
          <CalcSlider
            sliderUpdate={(value) => this.updateLoan(value, "downPayment")}
            startValue={downPayment * 100}
            type="downPayment"
            min={0}
            max={90}
          ></CalcSlider>
          <div className="range">
            <p>0%</p>
            <p>90%</p>
          </div>
        </div>
        <div className="calculator-form__input">
          <label>
            Interest rate <span>{interestRate + "%"}</span>
          </label>
          <CalcSlider
            sliderUpdate={(value) => this.updateLoan(value, "interestRate")}
            min={100}
            max={800}
            startValue={interestRate * 100}
            type="insterestRate"
            percentage={true}
          ></CalcSlider>
          <div className="range">
            <p>1%</p>
            <p>8%</p>
          </div>
        </div>
        <div className="calculator-form__input">
          <label>Property taxes/year <span>{taxes + "%"}</span></label>
          <CalcSlider
            sliderUpdate={(value) => this.updateLoan(value, "taxes")}
            min={0}
            max={300}
            type="taxes"
            startValue={taxes * 100}
            percentage={true}
          ></CalcSlider>
          <div className="range">
            <p>0%</p>
            <p>3%</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

//we are curring the Auth component
export default connect(mapStateToProps, { updateLoan })(CalculatorForm);
