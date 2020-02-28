import React, {useState, useEffect} from "react";

import {currencyToString} from "../utils/helpers";

export const Converter = ({ setResult }) => {
  const [srcCurrency, setSrcCurrency] = useState("EUR");
  const [destCurrency, setDestCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState([false, false]);

  const onSubmit = e => {
    e.preventDefault();
    setResult(currencyToString(amount * 2, destCurrency));
  };

  useEffect(() => {
    setResult(currencyToString(amount * 2, destCurrency));
    // TODO if both currencies and number are valid autoupdate 
  })

  useEffect(() => {
    const curr = ["EUR", "USD", "CZK", "GBP"].filter(
      curr => curr === srcCurrency
    );
    if (curr.length === 1) {
        // SRC CURRENCY is OK
      setError(prev => [false, ...prev.slice(1, 2)]);
    } else {
      setError(prev => [true, ...prev.slice(1, 2)]);
    }
    
  }, [srcCurrency]);

  useEffect(() => {
    const curr = ["EUR", "USD", "CZK", "GBP"].filter(
      curr => curr === destCurrency
    );
    if (curr.length === 1) {
        // DEST CURRENCY is OK
      setError(prev => [...prev.slice(0,1),false]);
    } else {
      setError(prev => [...prev.slice(0,1),true]);
    }
  }, [destCurrency]);


  return (
    <form onSubmit={onSubmit}>
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
        <input
          type="number"
          step=".01"
          value={amount}
          onChange={e => setAmount(e.target.value)}

        />
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

      <datalist id="currencies">
        <option value="EUR" />
        <option value="USD" />
        <option value="CZK" />
        <option value="GBP" />
      </datalist>
      <button type="submit">Convert</button>
    </form>
  );
};
