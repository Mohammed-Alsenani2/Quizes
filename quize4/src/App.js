import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header name="From Header" />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
