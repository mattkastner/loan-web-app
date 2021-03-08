import "./App.scss";
import CalculatorForm from "./components/calculator-form/CalculatorForm";
import PaymentEstimation from "./components/heading/PaymentEstimation";


function App() {
  return (
    <div className="loan-app">
      <PaymentEstimation></PaymentEstimation>
      <CalculatorForm></CalculatorForm>
    </div>
  );
}

export default App;
