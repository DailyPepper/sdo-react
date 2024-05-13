import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from '../../components/Main/Main';
import Auto from '../../pages/Auto/Auto';
import Laboratory from '../../pages/Laboratory/Laboratory';
import PrepodRedLab from '../../pages/PrepodRedLab/PrepodRedLab';
import Registration from '../../pages/Registration/Registration';
import StudLaboratory from '../../pages/Laboratory/StudLaboratory';
import LaboratoryAdd from '../../pages/LaboratoryAdd/index'
import PersonalTeacher from '../../pages/Personal/PersonalTeacher';
import PersonalStud from '../../pages/Personal/PersonalStud'
import MainTeacher from '../../components/Main/mainTeacher';
import MainStud from '../../components/Main/mainStud';
import LabaStud from '../../pages/LabaStud/index';
import Attempts from '../../pages/Attempts/index'
import ScrollToTop from '../../components/ScrollToTop'
const MainRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<Auto />} />
          <Route path="/Laboratory" element={<Laboratory />} />
          <Route path="/editingLaboratoryPrep" element={<PrepodRedLab />} />
          <Route path="/LaboratoryAdd" element={<LaboratoryAdd/>} />
          <Route path="/PersonalTeacher" element={<PersonalTeacher/>} />
          <Route path="/StudLaboratory" element={<StudLaboratory />} />
          <Route path="/PersonalStud" element={<PersonalStud />} />
          <Route path="/mainStud" element={<MainStud />} />
          <Route path="/mainTeacher" element={<MainTeacher />} />
          <Route path="registration" element={<Registration />} />
          <Route path="/labaStud/:id" element={<LabaStud />} />
          <Route path="/attempts" element={<Attempts />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<Navigate to="/login" />} />
      </Routes>  
    </>

  );
};

export default MainRouter;
