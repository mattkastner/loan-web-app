import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import axios from "axios";

import "./ContactAgent.scss";
import userSvg from "../../assets/user.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import cross from "../../assets/cross.png";
import call from "../../assets/call.png";

class ContactAgent extends Component {
  constructor() {
    super();
  }

  state = {
    sendtoemail: null,
    name: "",
    phoneNum: "",
    email: "",
    textFeild: "",
    getfinanceInfo: false,
    afterResText: "",
  };

  componentDidMount() {
    let sendtoemail = localStorage.getItem("email");
    this.setState({ sendtoemail });
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, name, phoneNum, getfinanceInfo, textFeild } = this.state;

    axios
      .post("/api/sendmail", {
        email,
        name,
        phoneNum,
        getfinanceInfo,
        textFeild,
      })
      .then((result) => {
        this.setState({
          name: "",
          phoneNum: "",
          email: "",
          textFeild: "",
          getfinanceInfo: false,
        });
        this.setState({ afterResText: result.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const { email, name, phoneNum, getfinanceInfo, textFeild, afterResText } =
      this.state;
    return (
      <div className="container">
        <div className="crossDiv" onClick={() => this.props.history.push("/")}>
          <img src={cross} />
        </div>
        {afterResText != "" && <h1>{afterResText}</h1>}
        <h1 className="heading">Contact Agent</h1>
        <form onSubmit={this.onSubmit}>
          <div className="userDiv">
            <img src={userSvg} />
            <input
              className="Field"
              type="text"
              value={name}
              name="name"
              placeholder="Name"
              onChange={this.onChange}
              required
            />
          </div>
          <br />
          <div className="userDiv">
            <img src={phone} />
            <input
              className="Field"
              type="text"
              value={phoneNum}
              name="phoneNum"
              placeholder="Phone"
              onChange={this.onChange}
              required
            />
          </div>
          <br />
          <div className="userDiv">
            <img src={mail} />
            <input
              className="Field"
              type="text"
              value={email}
              name="email"
              placeholder="Email"
              onChange={this.onChange}
              required
            />
          </div>
          <br />
          <div className="userDiv">
            <textarea
              className="FieldTextArea"
              rows="3"
              cols="24"
              placeholder="Call me at your earliest convience, I would like to discuss officially applying for a loan."
              value={textFeild}
              name="textFeild"
              onChange={this.onChange}
              required
            ></textarea>
          </div>
          <br />
          <button className="btnAgent" type="submit">
            CONTACT AGENT
          </button>
          
          <br />
          <div className="checkboxDiv">
            <input
              type="checkbox"
              className="checkbox"
              checked={getfinanceInfo}
              name="getfinanceInfo"
              onChange={this.onChange}
            ></input>
            <h2 className="checkbox-info">I want financing information</h2>
          </div>
          <br />
          <span className="description-last">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation.
          </span>
        </form>
      </div>
    );
  }
}

export default ContactAgent;
