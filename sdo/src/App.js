import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Auto from "./pages/Auto";
import Laboratory from "./pages/Laboratory";
import PrepodRedLab from "./pages/PrepodRedLab";




function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Auto />} />
          <Route path="/Laboratory" element={<Laboratory />} />
          <Route path="/editingLaboratoryPrep" element={<PrepodRedLab />} />
          {/* Прописать все остальные route по тому же принципу */}
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
