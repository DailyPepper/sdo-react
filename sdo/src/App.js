import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Auto from './pages/Auto/Auto';
import Laboratory from './pages/Laboratory/Laboratory';
import PrepodRedLab from './pages/PrepodRedLab/PrepodRedLab';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Auto />} />
          <Route path="/Laboratory" element={<Laboratory />} />
          <Route path="/editingLaboratoryPrep" element={<PrepodRedLab />} />
          <Route path="/Registration" element={<Registration/>}/>
        </Routes> 
      </Router>
    </div>
  );  
}

export default App;
