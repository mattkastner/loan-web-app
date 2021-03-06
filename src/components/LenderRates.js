import React from "react";
import "./LenderRates.scss";

export default function LenderRates() {
  return (
    <div className="lender-rates-container">
      <h4 className="header-4">
        Update your estimate with a local lenders’ estimated rate:
      </h4>
      <div className="toggle-buttons">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <hr></hr>

      <div className="lenders">
        <div className="mortgage-company">
          <img
            className="company-logo"
            src="./images/mortgage-logo.jpg"
            alt="mortgage-logo"
          />
          <img
            className="honcho-profile"
            src="./images/profile-2.jpg"
            alt="company-honcho"
          />
          <div className="nmls">NMLS:123456</div>
        </div>
        <div className="company-rate">
          Rate
          <div className="rate-num">2.875%</div>
          <div className="rate-lock">30 day rate lock</div>
        </div>
        <div className="rate-payment">
          Payment
          <div className="payment">$996/mo.</div>
          {/* <div className="rate-payment">/mo.</div> */}
        </div>
        <button className="rate-button">Use Rate</button>
      </div>
      <hr></hr>
      <div className="lenders">
        <div className="mortgage-company">
          <img
            className="company-logo"
            src="./images/mortgage-logo.jpg"
            alt="mortgage-logo"
          />
          <img
            className="honcho-profile"
            src="./images/profile-1.jpg"
            alt="company-honcho"
          />
          <div className="nmls">NMLS:123456</div>
        </div>
        <div className="company-rate">
          Rate
          <div className="rate-num">2.875%</div>
          <div className="rate-lock">30 day rate lock</div>
        </div>
        <div className="rate-payment">
          Payment
          <div className="payment">$996/mo.</div>
          {/* <div className="rate-payment">/mo.</div> */}
        </div>
        <button className="rate-button">Use Rate</button>
      </div>
      <hr></hr>
      <div className="lenders">
        <div className="mortgage-company">
          <img
            className="company-logo"
            src="./images/mortgage-logo.jpg"
            alt="mortgage-logo"
          />
          <img
            className="honcho-profile"
            src="./images/profile-3.jpg"
            alt="company-honcho"
          />
          <div className="nmls">NMLS:123456</div>
        </div>
        <div className="company-rate">
          Rate
          <div className="rate-num">2.875%</div>
          <div className="rate-lock">30 day rate lock</div>
        </div>
        <div className="rate-payment">
          Payment
          <div className="payment">$996/mo.</div>
          {/* <div className="rate-payment">/mo.</div> */}
        </div>
        <button className="rate-button">Use Rate</button>
      </div>
      <hr></hr>
      <div className="lenders">
        <div className="mortgage-company">
          <img
            className="company-logo"
            src="./images/mortgage-logo.jpg"
            alt="mortgage-logo"
          />
          <img
            className="honcho-profile"
            src="./images/profile-5.jpg"
            alt="company-honcho"
          />
          <div className="nmls">NMLS:123456</div>
        </div>
        <div className="company-rate">
          Rate
          <div className="rate-num">2.875%</div>
          <div className="rate-lock">30 day rate lock</div>
        </div>
        <div className="rate-payment">
          Payment
          <div className="payment">$996/mo.</div>
          {/* <div className="rate-payment">/mo.</div> */}
        </div>
        <button className="rate-button">Use Rate</button>
      </div>
      <div className="or">- OR -</div>
      <h4 className="header-4">
        Get No-Haggle Bids, With Our Price Transparency
      </h4>
      <div className="competing-button-container">
        <button className="competing-button">GET COMPETING OFFERS</button>
      </div>
    </div>
  );
}
