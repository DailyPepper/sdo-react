
import React from "react";
import Main from "./components/Main/Main";
import Auto from "./pages/Auto";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Laboratory from "./pages/Laboratory";
import PrepodRedLab from "./pages/PrepodRedLab";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="" element = {<Main/>}></Route>
            <Route path="/login" element= {<Auto/>}></Route>
            <Route path="/Laboratory" element = {<Laboratory/>}></Route>
            <Route path="/editingLaboratoryPrep" element = {<PrepodRedLab/>}></Route>
  {/* Прописать все остальные route по тому же принципу */}
            </Routes>
      </Router>
    </div>
  );
}

export default App;
