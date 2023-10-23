import Header from "./components/Header/Header";
import React from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="" element = {<Main/>}></Route>

{/* Прописать все остальные route по тому же принципу */}

          
        </Routes>
        <Footer/>  
      </Router>
      
    </div>
  );
}

export default App;
