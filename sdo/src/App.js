import Header from "./components/Header/Header";
import React from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Auto from "./pages/Auto";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Laboratory from "./pages/Laboratory";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path="" element = {<Main/>}></Route>
            <Route path="/login" element= {<Auto/>}></Route>
            <Route path="/Laboratory" element = {<Laboratory/>}></Route>
  {/* Прописать все остальные route по тому же принципу */}
            </Routes>
        <Footer/>  
      </Router>
    </div>
  );
}

export default App;
