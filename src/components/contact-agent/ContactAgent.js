import React from "react";
import "./ContactAgent.scss";
import userSvg from "../../assets/user.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import cross from "../../assets/cross.png";
import call from "../../assets/call.png";

const ContactAgent = () => {
  return (
    <div className="container">
      <div className="crossDiv">
        <img src={cross} />
      </div>
      <h1 className="heading">Contact Agent</h1>
      <div className="userDiv">
        <img src={userSvg} />
        <input class="Field" type="text" placeholder="Name" />
      </div>
      <br />
      <div className="userDiv">
        <img src={phone} />
        <input class="Field" type="text" placeholder="Phone" />
      </div>
      <br />
      <div className="userDiv">
        <img src={mail} />
        <input class="Field" type="text" placeholder="Email" />
      </div>
      <br />
      <div className="userDiv">
        <textarea
          class="FieldTextArea"
          rows="3"
          cols="24"
          placeholder="Call me at your earliest convience, I would like to discuss officially applying for a loan."
        ></textarea>
      </div>
      <br />
      <button className="btnAgent">CONTACT AGENT</button>
      <br />
      <div className="checkboxDiv">
        <input type="checkbox" className="checkbox"></input>
        <h2 className="checkbox-info">I want financing information</h2>
      </div>
      <br />
      <span className="description-last">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation.
      </span>
    </div>
  );
};

export default ContactAgent;
