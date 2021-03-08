import React, { Component } from "react";
import "./PaymentEstimation.scss";
import "donutty";

class PaymentEstimation extends Component {
  constructor() {
    super();
    this.state = {
      monthlyPayment: 0,
      seeDetail: false,
    };
  }
  render() {
    return (
      <div
        className={
          this.state.seeDetail
            ? "payment-estimation payment-estimation--extend"
            : "payment-estimation"
        }
      >
        {this.state.seeDetail ? (
            <div className="donut-container">
              <div
                className="donut-layer"
                data-donutty
                data-bg="rgba(70, 130, 180, 0.15)"
                data-radius="44"
                data-thickness="16"
                data-min="0"
                data-max="1650"
                data-value="1650"
                data-color="#F17270"
              ></div>
              <div
                className="donut-layer"
                data-donutty
                data-bg="rgba(0,0,0,0.0)"
                data-radius="44"
                data-thickness="16"
                data-min="0"
                data-max="1650"
                data-value="1480"
                data-color="#39E0F0"
              ></div>
              <div
                className="donut-layer"
                data-donutty
                data-bg="rgba(0,0,0,0.0)"
                data-radius="44"
                data-thickness="16"
                data-min="0"
                data-max="1650"
                data-value="1210"
                data-color="#364CEF"
              ></div>
            </div>
        ) : (
          <div>
            <h5>Estimated Payment</h5>
            <h2>
              ${this.state.monthlyPayment}
              <span>/month</span>
            </h2>
          </div>
        )}
        <button
          className="see-details"
          onClick={() => this.setState({ seeDetail: !this.state.seeDetail })}
        >
          {this.state.seeDetail ? "HIDE DETAILS" : "SEE DETAILS"}
        </button>
      </div>
    );
  }
}

export default PaymentEstimation;
