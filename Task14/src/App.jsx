import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState("");

  const convertCurrency = async () => {
    if (amount === "") {
      setResult("Please enter amount");
      return;
    }

    try {
      const response = await fetch("https://open.er-api.com/v6/latest/" + fromCurrency);
      const data = await response.json();
      const rate = data.rates[toCurrency];

      if (!rate) {
        setResult("Rate not found");
        return;
      }

      const total = Number(amount) * rate;
      setResult(total + " " + toCurrency);
    } catch {
      setResult("API error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Currency Converter</h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div style={{ marginTop: "10px" }}>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>

        <span style={{ margin: "0 8px" }}>to</span>

        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      <button style={{ marginTop: "12px" }} onClick={convertCurrency}>
        Convert
      </button>

      <p>{result}</p>
    </div>
  );
}

export default App;
