import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./LenderRates.scss";

class LenderRates extends Component {
  constructor() {
    super();
    this.state = {
      toggleOnFHA: false,
      toggleOnVA: false,
      lenders: [
        {
          id: 1,
          companyImage:
            "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
          repImage:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          rate: 3.75,
          rateType: "",
          payment: 975,
          NMLS: "478246",
        },
        {
          id: 2,
          companyImage:
            "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
          repImage:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          rate: 3.75,
          rateType: "",
          payment: 975,
          NMLS: "478246",
        },
        {
          id: 3,
          companyImage:
            "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
          repImage:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          rate: 3.75,
          rateType: "",
          payment: 975,
          NMLS: "478246",
        },
        {
          id: 4,
          companyImage:
            "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
          repImage:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          rate: 3.75,
          rateType: "",
          payment: 975,
          NMLS: "478246",
        },
      ],
    };
  }
  render() {
    let lenders = this.state.lenders.map((lender) => {
      return (
        <div key={lender.id}>
          <div className="lender">
            <div className="mortgage-company">
              <img
                className="company-logo"
                src={lender.companyImage}
                alt="company"
              />
              <img
                className="honcho-profile"
                src={lender.repImage}
                alt="company-representative"
              />
              <div className="nmls">NMLS#: {lender.NMLS}</div>
            </div>
            <div className="company-rate-container">
              <div className="company-rate">
                Rate
                <div className="rate-num">{lender.rate}%</div>
                <div className="rate-lock">30 day rate lock</div>
              </div>
              <div className="rate-payment">
                Payment
                <div className="payment">${lender.payment}/mo.</div>
              </div>
              <button
                onClick={() => this.props.history.push("/contact-agent")}
                className="rate-button"
              >
                Use Rate
              </button>
            </div>
          </div>
          <hr></hr>
        </div>
      );
    });

    return (
      <div className="lender-rates-container">
        <div className="header-info">
          <h4>*Update your estimate with a local lenders’ estimated rate:</h4>
          <div className="toggles">
            <div className={this.state.toggleOnFHA ? "toggle-on" : "toggle"}>
              <p>{this.state.toggleOnFHA ? "FHA On" : "FHA Off"}</p>

              <div
                onClick={() =>
                  this.setState({ toggleOnFHA: !this.state.toggleOnFHA })
                }
                className={
                  this.state.toggleOnFHA ? "toggle-on__dot" : "toggle__dot"
                }
              ></div>
            </div>
            <div
              className={
                this.state.toggleOnVA
                  ? "toggle-on toggle-margin"
                  : "toggle toggle-margin"
              }
            >
              <p>{this.state.toggleOnVA ? "VA On" : "VA Off"}</p>
              <div
                onClick={() =>
                  this.setState({ toggleOnVA: !this.state.toggleOnVA })
                }
                className={
                  this.state.toggleOnVA ? "toggle-on__dot" : "toggle__dot"
                }
              ></div>
            </div>
          </div>
        </div>

        <hr></hr>
        {lenders}
      </div>
    );
  }
}
export default withRouter(LenderRates);
