import React, { Component } from "react";
import "./PaymentEstimation.scss";
import eclipse1 from "../../assets/Ellipse 22.png";
import eclipse2 from "../../assets/Ellipse 23.png";
import eclipse3 from "../../assets/Ellipse 24.png";
import Donut from "../donut/Donut";
import { connect } from "react-redux";

class PaymentEstimation extends Component {
  constructor() {
    super();
    this.state = {
      seeDetail: false,
    };
  }
  render() {
    let principle = this.props.monthlyPayment;
    let pmi = ((this.props.homePrice - this.props.downPayment) * 0.01) / 12;
    let taxesAmount = ((this.props.taxes / 100) * this.props.homePrice) / 12;
    let totalMonthly = principle + pmi + taxesAmount;

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
            <div style={{ marginTop: "3px" }} className="text-light-grey ">
              <div>
                <img src={eclipse1} />{" "}
                <span>
                  Principal &nbsp;
                  <br />
                  <span>${Math.trunc(principle)}</span>
                </span>
              </div>
              <div>
                <img src={eclipse2} />
                <span>
                  {" "}
                  Taxes &nbsp;
                  <br />
                  <span>${Math.trunc(taxesAmount)}</span>
                </span>
              </div>
              <div>
                <img src={eclipse3} />{" "}
                <span>
                  P&I &nbsp;
                  <br />
                  <span>${Math.trunc(pmi)}</span>
                </span>
              </div>
            </div>
            <hr className="hr" />
            <div className="grid">
              <span id="amortization">Amortization</span>
              <span>&nbsp;</span>
            </div>
            <div className="grid">
              <span class="light-gray">Loan Amount</span>
              <span id="table">${Math.trunc(this.props.homePrice)}</span>
            </div>
            <div className="grid">
              <span class="light-gray">Down payment</span>
              <span id="table">
                ${Math.trunc(this.props.downPayment * this.props.homePrice)}
              </span>
            </div>
            <div className="grid">
              <span class="light-gray">Interest rate</span>
              <span id="table">{this.props.interestRate.toFixed(2)}%</span>
            </div>
            <div className="grid">
              <span class="light-gray">Loan term</span>
              <span id="table">{this.props.years} years</span>
            </div>
            <div className="grid  property-tax">
              <span class="light-gray">Property tax</span>
              <span id="table">${Math.trunc(taxesAmount * 12)}/year</span>
            </div>
          </>
        ) : (
          <div className="marginTop5">
            <h5>Estimated Payment</h5>
            <h2>
              ${Math.trunc(totalMonthly)}
              <span>/month</span>
            </h2>
          </div>
        )}
        <div className="btn-div">
          <button
            className="see-details"
            onClick={async () => {
              await this.setState({ seeDetail: !this.state.seeDetail });
              this.props.updateIsOpen(this.state.seeDetail);
            }}
          >
            {this.state.seeDetail ? "HIDE DETAILS" : "SEE DETAILS"}
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

//we are curring the Auth component
export default connect(mapStateToProps, {})(PaymentEstimation);
