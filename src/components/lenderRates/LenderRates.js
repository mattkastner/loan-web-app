import React from "react";
import "./LenderRates.scss";

export default function LenderRates() {
  return (
    <div className="lender-rates-container">
      <div className="header-4">
        Update your estimate with a local lenders’ estimated rate:
      </div>
      <div className="toggle-buttons">
        <label class="switch">
          <input type="checkbox" id="togBtn" />
          <div class="slider round">
            <span class="on">ON</span>
            <span class="off">OFF</span>
          </div>
        </label>
      </div>
      <div className="toggle-buttons">
      <label class="switch">
 <input type="checkbox" id="togBtn"/>
 <div class="slider round">
  <span class="on">ON</span>
  <span class="off">OFF</span>
 </div>
</label>
      </div>
      <hr></hr>

      <div className="lenders">
        <div className="mortgage-company">
          <div className="mortgage-company-placeholder"></div>
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
        <div className="company-rate-container">
          <div className="company-rate">
            Rate
            <div className="rate-num">2.875%</div>
            <div className="rate-lock">30 day rate lock</div>
          </div>
          <div className="rate-payment">
            Payment
            <div className="payment">$996/mo.</div>
          </div>
          <button className="rate-button">Use Rate</button>
        </div>
      </div>
      <hr></hr>

      <div className="or">- OR -</div>
      <div className="header-4">
        Get No-Haggle Bids, With Our Price Transparency
      </div>
      <div className="competing-button-container">
        <button className="competing-button">GET COMPETING OFFERS</button>
      </div>
    </div>
  );
}
