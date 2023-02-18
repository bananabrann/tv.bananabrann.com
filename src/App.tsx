import React from "react";
import Footer from "./components/Footer/Footer";
import Logo from "./components/Logo/Logo";
import styles from "./App.module.css";
import "./App.css";

const SITE_VERSION = "1.0.0";

function App() {
  return (
    <div className="App">
      <header className={styles.header}>
        <Logo />
      </header>

      <Footer siteVersion={SITE_VERSION} />
    </div>
  );
}

export default App;
