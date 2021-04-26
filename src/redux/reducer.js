//create the initial state
const initialState = {
  homePrice: 0,
  zipCode: "",
  years: 30,
  downPayment: 0,
  interestRate: 1,
  taxes: 0,
  monthlyPayment: 0,
};

//action types
const UPDATE_LOAN = "UPDATE_LOAN";
const CLEAR = "CLEAR";

export function updateLoan(data) {
  return {
    type: UPDATE_LOAN,
    payload: data,
  };
}

export function clearUser() {
  return {
    type: CLEAR,
  };
}

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOAN:
      return { ...state, ...action.payload };
    case CLEAR:
      return { ...state, monthlyPayment: 0 };
    default:
      // default point;
      return state;
  }
}
