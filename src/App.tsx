import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";

const SITE_VERSION = "1.0.0";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1>Hello</h1>
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

      <Footer siteVersion={SITE_VERSION} />
    </div>
  );
}

export default App;
