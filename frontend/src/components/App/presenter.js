import React from "react";
import styles from "./styles.scss";
import Footer from "../Footer";
import LandingPage from "../LandingPage";

function App(props) {
  return (
    <div className="app">
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
