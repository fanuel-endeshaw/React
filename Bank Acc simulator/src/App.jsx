import  { useReducer } from "react";
function reducer(state, action) {
  if (action.type === "enable") {
    return { balance: 500, loan: 0, isDisabled: false, open: true };
  } else if (action.type === "deposit") {
    return {
      balance: state.balance + action.payload,
      loan: 0,
      isDisabled: false,
      open: true,
    };
  } else if (action.type === "withdraw") {
    return {
      balance: state.balance - action.payload,
      loan: 0,
      isDisabled: false,
      open: true,
    };
  } else if (action.type === "loan") {
    return {
      balance: state.balance + action.payload,
      loan: state.loan + action.payload,
      isDisabled: false,
      open: true,
    };
  } else if (action.type === "ploan") {
    return {
      balance: state.balance - action.payload,
      loan: state.loan - action.payload,
      isDisabled: false,
      open: true,
    };
  } else if (action.type === "close") {
    return {
      ...initial,
    };
  }
}
const initial = { isDisabled: true, open: false, balance: "", loan: "" };
const App = () => {
  const [count, dispatch] = useReducer(reducer, initial);
  const style = { margin: "5px 0" };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "darkgray"
      }}
    >
      <h1 style={{ marginBottom: "0" }}>useReducer Bank account</h1>
      <p style={style}>Balance:{count.balance}</p>
      <p style={style}>Loan:{count.loan}</p>

      <button
        disabled={count.open}
        onClick={() => dispatch({ type: "enable" })}
      >
        Open account
      </button>
      <button
        disabled={count.isDisabled}
        onClick={() => dispatch({ payload: 150, type: "deposit" })}
      >
        deposit 150
      </button>
      <button
        disabled={count.isDisabled}
        onClick={() => dispatch({ payload: 50, type: "withdraw" })}
      >
        withdraw 50
      </button>
      <button
        disabled={count.isDisabled}
        onClick={() => dispatch({ payload: 5000, type: "loan" })}
      >
        request a loan of 5000
      </button>
      <button
        disabled={count.isDisabled}
        onClick={() => dispatch({ payload: 5000, type: "ploan" })}
      >
        pay a loan
      </button>
      <button
        disabled={count.isDisabled}
        onClick={() => dispatch({ type: "close" })}
      >
        close account
      </button>
    </div>
  );
};
export default App;
