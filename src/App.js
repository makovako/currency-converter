import React, { useState } from "react";

import { Header } from "./components/Header";
import { Converter } from "./components/Converter";
import { Result } from "./components/Result";
import { Loading } from "./components/Loading";

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <Header />
      <Converter
        setResult={setResult}
        loading={loading}
        setLoading={setLoading}
      />
      <Result result={result} />
      {loading && <Loading />}
    </div>
  );
}

export default App;
