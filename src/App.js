import "./App.scss";
import CalculatorForm from "./components/calculator-form/CalculatorForm";
import PaymentEstimation from "./components/heading/PaymentEstimation";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactAgent from "./components/contact-agent/ContactAgent";
import menu from './assets/menu.svg';
function App() {
  return (
    <Router><Switch>
      <Route exact path="/">
        <div className="loan-app">
          <div className="menu"><img src={menu} alt="" /></div>
          <PaymentEstimation></PaymentEstimation>
          <CalculatorForm></CalculatorForm>
        </div>
      </Route>
      <Route path="/contact-agent" component={ContactAgent} />
    </Switch></Router>
  );
}

export default App;
