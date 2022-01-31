import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const fetchGraphql = () => {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: "{ quoteOfTheDay, random }"})
    })
      .then(r => r.json())
      .then(data => console.log('data returned:', data));
  }

  useEffect(() => {
    fetchGraphql()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
