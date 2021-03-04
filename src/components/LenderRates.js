import React from "react";
import "./LenderRates.scss";

export default function LenderRates() {
  return (
    <div>
      <div className="lenders">
        <div className="mortgage-company">
          <img
            className="company-logo"
            src="./images/american-logo.png"
            alt="american-logo"
          />
          <img
            className="honcho-profile"
            src="./images/profile-2.jpg"
            alt="company-honcho"
          />
          <span className="nmls">NMLS:123456</span>
        </div>
        <div className="company-rate">
          Rate
          <span>2.875%</span>
          <span>30 day rate lock</span>
        </div>
        <div className="rate-payment">
          Payment
          <span>$996/mo.</span>
        </div>
        <button className="rate-button">Use Rate</button>
      </div>
      <hr></hr>
      <div className="lenders">
        <div className="mortgage-company">
          <img
            className="company-logo"
            src="./images/american-logo.png"
            alt="american-logo"
          />
          <img
            className="honcho-profile"
            src="./images/profile-2.jpg"
            alt="company-honcho"
          />
          <span className="nmls">NMLS:123456</span>
        </div>
        <div className="company-rate">
          Rate
          <span>2.875%</span>
          <span>30 day rate lock</span>
        </div>
        <div className="rate-payment">
          Payment
          <span>$996/mo.</span>
        </div>
        <button className="rate-button">Use Rate</button>
      </div>

      <div className="lenders">
        <div className="mortgage-company">
          <img
            className="company-logo"
            src="./images/american-logo.png"
            alt="american-logo"
          />
          <img
            className="honcho-profile"
            src="./images/profile-2.jpg"
            alt="company-honcho"
          />
          <span className="nmls">NMLS:123456</span>
        </div>
        <div className="company-rate">
          Rate
          <span>2.875%</span>
          <span>30 day rate lock</span>
        </div>
        <div className="rate-payment">
          Payment
          <span>$996/mo.</span>
        </div>
        <button className="rate-button">Use Rate</button>
      </div>

      <div className="lenders">
        <div className="mortgage-company">
          <img
            className="company-logo"
            src="./images/american-logo.png"
            alt="american-logo"
          />
          <img
            className="honcho-profile"
            src="./images/profile-2.jpg"
            alt="company-honcho"
          />
          <span className="nmls">NMLS:123456</span>
        </div>
        <div className="company-rate">
          Rate
          <span>2.875%</span>
          <span>30 day rate lock</span>
        </div>
        <div className="rate-payment">
          Payment
          <span>$996/mo.</span>
        </div>
        <button className="rate-button">Use Rate</button>
      </div>
    </div>
  );
}
