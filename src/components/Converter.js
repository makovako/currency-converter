import React, { useState, useEffect } from "react";
import axios from "axios";
import { currencyToString } from "../utils/helpers";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

export const Converter = ({ setResult, loading, setLoading }) => {
  const [srcCurrency, setSrcCurrency] = useState("");
  const [destCurrency, setDestCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState([false, false]);
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [rates, setRates] = useState(null);

  useEffect(() => {
    // if there is no error in input and we have rates, convert
    if (error.every(x => !x) && !isNaN(amount) && amount >= 0 && rates) {
      setResult(currencyToString(amount * rates[destCurrency], destCurrency));
    } else {
      setResult(0);
    }
  }, [error, amount, rates]);

  /**
   * Get all available currencies on component mount
   */
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(BASE_URL);
      setAllCurrencies([res.data.base, ...Object.keys(res.data.rates)]);
      setSrcCurrency("EUR");
      setDestCurrency("USD");
      setTimeout(() => setLoading(false), 500);
    };
    fetchData();
  }, []);

  /**
   * On source currency change
   * Update rates if currency is valid
   * Update color if currency is correct
   */
  useEffect(() => {
    const fetchCurrency = async curr => {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}?base=${curr}`);
      setTimeout(() => setLoading(false), 500);
      setRates(res.data.rates);
    };

    const curr = allCurrencies.filter(curr => curr === srcCurrency);
    if (curr.length === 1) {
      // SRC CURRENCY is OK
      setError(prev => [false, ...prev.slice(1, 2)]);
      // Fetch new rates for currency
      fetchCurrency(curr);
    } else {
      setError(prev => [true, ...prev.slice(1, 2)]);
    }
  }, [srcCurrency]);

  /**
   * On destination currency change
   * Update color if currency is correct
   */
  useEffect(() => {
    const curr = allCurrencies.filter(curr => curr === destCurrency);
    if (curr.length === 1) {
      // DEST CURRENCY is OK
      setError(prev => [...prev.slice(0, 1), false]);
    } else {
      setError(prev => [...prev.slice(0, 1), true]);
    }
  }, [destCurrency]);

  return (
    <form>
      <div className="form-control">
        <label htmlFor="source-currency">Source currency</label>
        <input
          value={srcCurrency}
          onChange={e => setSrcCurrency(e.target.value)}
          list="currencies"
          className={error[0] ? "red" : "green"}
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount</label>
        <div className="amount-group">
          <div className="arrow" onClick={() => setAmount(parseFloat(amount) + 1.0)}>+</div>
          <input
            type="number"
            step="any"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            min="0"
          />
          <div className="arrow" onClick={() => setAmount(parseFloat(amount) - 1.0)}>-</div>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="dest-currency">Destination currency</label>
        <input
          value={destCurrency}
          onChange={e => setDestCurrency(e.target.value)}
          list="currencies"
          className={error[1] ? "red" : "green"}
        />
      </div>
      {allCurrencies.length > 0 && (
        <datalist id="currencies">
          {allCurrencies.map(curr => (
            <option key={curr} value={curr} />
          ))}
        </datalist>
      )}
    </form>
  );
};
