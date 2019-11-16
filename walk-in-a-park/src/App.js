import React, { useState } from 'react';
import SearchLocation from './components/SearchLocation';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const updateSearch = e => {
    setInput(e.target.value);
  };
  return (
    <div className="App" >
      <h1>walkinapark</h1>
      <div className="App-header">


        <SearchLocation input={input}
          onChange={updateSearch} /></div>
      <div className="backGround"></div>

    </div>
  );
}

export default App;
