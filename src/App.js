import "./App.scss";
import CalculatorForm from "./components/calculator-form/CalculatorForm";
import PaymentEstimation from "./components/heading/PaymentEstimation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactAgent from "./components/contact-agent/ContactAgent";
import React, { Component } from "react";
import { ArrowLeft } from "react-feather";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="loan-app">
              {/* {this.state.isOpen ? (
                <div className="menu">
                  <div className="arrow">
                    <ArrowLeft color="gray" />
                  </div>
                </div>
              ) : null} */}
              <PaymentEstimation
                updateIsOpen={(value) => this.setState({ isOpen: value })}
              ></PaymentEstimation>
              {this.state.isOpen ? (
                <div></div>
              ) : (
                <CalculatorForm></CalculatorForm>
              )}
            </div>
          </Route>
          <Route path="/contact-agent" component={ContactAgent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
