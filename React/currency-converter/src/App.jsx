import { useEffect } from "react";
import { useState } from "react";

function App() {
  let [amount , setamount] = useState(0)
  let [fromcurrency , setfromcurrency] = useState("USD")
  let [tocurrency , settocurrency] = useState("USD")
  let [result , setresult] = useState("")
  const [currencies, setCurrencies] = useState([]);

  // Page load hote hi currencies laane ke liye
  async function fetchCurrencies() {
    try {
      const response = await fetch(
        "https://v6.exchangerate-api.com/v6/2c6554fefcfff0ac984b49d8/latest/USD"
      );

      const data = await response.json();

      // Sirf currency names nikal rahe hain
      setCurrencies(Object.keys(data.conversion_rates));

    } catch (error) {
      console.log(error);
    }
  }

  // Convert button click hone par chalega
  async function getExchangeRates() {
    try {

      // User ki selected FROM currency se latest rates lao
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/2c6554fefcfff0ac984b49d8/latest/${fromcurrency}`
      );

      const data = await response.json();

      // TO currency ka rate nikalo
      const rate = data.conversion_rates[tocurrency];

      // Final Amount
      setresult(rate * amount);

    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  }

  // Sirf page open hone par ek baar chalega
  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <>
      {/* Amount */}
      <input
        type="number"
        onChange={(e) => setamount(Number(e.target.value))}
      />

      {/* From Currency */}
      <select
        value={fromcurrency}
        onChange={(e) => setfromcurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <label> To </label>

      {/* To Currency */}
      <select
        value={tocurrency}
        onChange={(e) => settocurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <button onClick={getExchangeRates}>
        Convert
      </button>

      <h1>Result = {result}</h1>
    </>
  );
}

export default App;