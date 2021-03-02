import React, { Component } from "react";

class PaymentEstimation extends Component {
  constructor() {
    super();
    this.state({
      monthlyPayment: 0,
    });
  }
  render() {
    return (
      <div>
        <h5>Estimated Payment</h5>
        <h2>{this.state.monthlyPayment}<span>/month</span></h2>
        <button>SEE DETAILS</button>
      </div>
    );
  }
}


export default PaymentEstimation