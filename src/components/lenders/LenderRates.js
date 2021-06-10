import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./LenderRates.scss";
const Loader = () => (
  <div class="divLoader">
    <svg class="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path
        stroke="none"
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#51CACC"
        transform="rotate(179.719 50 51)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 51;360 50 51"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
  </div>
);
class LenderRates extends Component {
  constructor() {
    super();
    this.state = {
      toggleOnFHA: false,
      toggleOnVA: false,
      allData: [],
      lenders: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/getdata")
      .then((res) => {
        console.log(res);
        let ldata = res.data;
        this.setState({ lenders: ldata, allData: ldata });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  handleClick = (toggleType) => {
    const ldata = this.state.allData;
    if (toggleType == "fha") {
      if (this.state.toggleOnFHA) {
        this.setState({ toggleOnFHA: false, lenders: ldata });
      } else {
        let lendersData = ldata.filter(
          (ld) => ld.LoanType.toLowerCase() == "fha"
        );
        this.setState({
          toggleOnFHA: true,
          toggleOnVA: false,
          lenders: lendersData,
        });
      }
    } else if (toggleType == "va") {
      if (this.state.toggleOnVA) {
        this.setState({ toggleOnVA: false, lenders: ldata });
      } else {
        let lendersData = ldata.filter(
          (ld) => ld.LoanType.toLowerCase() == "va"
        );

        this.setState({
          toggleOnVA: true,
          toggleOnFHA: false,
          lenders: lendersData,
        });
      }
    }
    let lendersData = ldata.filter((ld) => ld.LoanType.toLowerCase() == "fha");
    // console.log(ldata)
  };
  render() {
    let lenders =
      this.state.allData.length > 0 ? (
        this.state.lenders.map((lender) => {
          return (
            <div key={lender.id}>
              <div className="lender">
                <div className="mortgage-company">
                  <img
                    className="company-logo"
                    src={
                      lender.CompanyImage == ""
                        ? "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
                        : lender.CompanyImage
                    }
                    alt="company"
                  />
                  <img
                    className="honcho-profile"
                    src={
                      lender.Profile == ""
                        ? "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        : lender.Profile
                    }
                    alt="company-representative"
                  />
                  <div className="nmls">NMLS#: {lender.NMLS}</div>
                </div>
                <div className="company-rate-container">
                  <div className="company-rate">
                    Rate
                    <div className="rate-num">{lender.Rate}%</div>
                    <div className="rate-lock">30 day rate lock</div>
                  </div>
                  <div className="rate-payment">
                    Payment
                    <div className="payment">${lender.Payment}/mo.</div>
                  </div>
                  <button
                    onClick={() => {
                      localStorage.setItem("email", lender.email);
                      this.props.history.push(`/contact-agent`);
                    }}
                    className="rate-button"
                  >
                    Use Rate
                  </button>
                </div>
              </div>
              <hr></hr>
            </div>
          );
        })
      ) : (
        <Loader />
      );

    return (
      <div className="lender-rates-container">
        <div className="header-info">
          <h4>*Update your estimate with a local lenders’ estimated rate:</h4>
          <div className="toggles">
            <div className={this.state.toggleOnFHA ? "toggle-on" : "toggle"}>
              <p>{this.state.toggleOnFHA ? "FHA On" : "FHA Off"}</p>

              <div
                onClick={this.handleClick.bind(this, "fha")}
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
                onClick={this.handleClick.bind(this, "va")}
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
