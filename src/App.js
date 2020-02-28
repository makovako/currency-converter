import React, {useState} from 'react';

import {Header} from './components/Header'
import {Converter} from './components/Converter'
import {Result} from './components/Result'


function App() {
  const [result, setResult] = useState("");

  
  return (
    <div className="App">
      <Header />
      <Converter
        setResult={setResult}

      />
      <Result result={result} />
    </div>
  );
}

export default App;
