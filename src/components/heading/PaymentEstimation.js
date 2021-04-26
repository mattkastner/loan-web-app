import React, { Component } from "react";
import "./PaymentEstimation.scss";
import eclipse1 from '../../assets/Ellipse 22.png';
import eclipse2 from '../../assets/Ellipse 23.png';
import eclipse3 from '../../assets/Ellipse 24.png';
import DonutChart from 'react-donut-chart';
import { Donut } from '../donut';

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
          <>
            <div className="donut-container">
              <Donut />
            </div>
            <div style={{ marginTop: '3px' }} className="text-light-grey ">
              <div><img src={eclipse1} />  <span>Insurance &nbsp;<br /><span >$100</span></span></div>
              <div><img src={eclipse2} /><span> Taxes &nbsp;<br /><span>$100</span></span></div>
              <div><img src={eclipse3} /> <span>P&I  &nbsp;<br /><span>$100</span></span></div>
            </div>
            <hr className="hr" />
            <div className="grid"><span id="amortization">Amortization</span><span>&nbsp;</span></div>
            <div className="grid"><span class="light-gray">Loan Amount</span><span id="table">$240,000</span></div>
            <div className="grid"><span class="light-gray">Down payment</span><span id="table">$60,000</span></div>
            <div className="grid"><span class="light-gray">Interest rate</span><span id="table">2.875%</span></div>
            <div className="grid"><span class="light-gray">Loan term</span><span id="table">30 years</span></div>
            <div className="grid  property-tax"><span class="light-gray">Property tax</span><span id="table">1.2%/year</span></div>
          </>
        ) : (
          <div className="marginTop5">
            <h5>Estimated Payment</h5>
            <h2>
              ${this.state.monthlyPayment}
              <span>/month</span>
            </h2>
          </div>
        )
        }
        <div className="btn-div">
          <button
            className="see-details"
            onClick={() => {
              this.setState({ seeDetail: !this.state.seeDetail })



            }}
          >
            {this.state.seeDetail ? "HIDE DETAILS" : "SEE DETAILS"}
          </button>
        </div>
      </div >
    );
  }
}

export default PaymentEstimation;
