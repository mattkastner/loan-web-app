import React, { Component } from "react";
import CircularProgressBar from "./CircularProgressBar";
import { connect } from "react-redux";

class Donut extends Component {
  constructor() {
    super();
  }

  render() {
    let {
      monthlyPayment,
      homePrice,
      downPayment,
      taxes,
      interestRate,
    } = this.props;
    let principle = this.props.monthlyPayment;
    let pmi = ((this.props.homePrice - this.props.downPayment) * 0.01) / 12;
    let taxesAmount = ((this.props.taxes / 100) * this.props.homePrice) / 12;
    let totalMonthly = principle + pmi + taxesAmount;

    return (
      <div style={{ marginTop: "1%" }}>
        <CircularProgressBar
          strokeWidth="16"
          sqSize="140"
          circle1={(principle / totalMonthly) * 100}
          circle2={(pmi / totalMonthly) * 100}
          interest={interestRate}
          total={totalMonthly}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

//we are curring the Auth component
export default connect(mapStateToProps, {})(Donut);
