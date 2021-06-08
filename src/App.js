import "./App.scss";
import CalculatorCombo from "./components/CalculatorCombo";
import ContactAgent from "./components/contact-agent/ContactAgent";

import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
// import { ArrowLeft } from "react-feather";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/contact-agent" component={ContactAgent} />
          <Route exact path="/" component={CalculatorCombo}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
