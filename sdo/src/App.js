import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import MainRouter from "./app/routing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <MainRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
