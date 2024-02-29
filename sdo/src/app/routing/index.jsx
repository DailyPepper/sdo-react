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

const MainRouter = () => {
  const userRole = 'teacher';

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Auto />} />

      {userRole === 'teacher' && (
        <>
          <Route path="/Laboratory" element={<Laboratory />} />
          <Route path="/editingLaboratoryPrep" element={<PrepodRedLab />} />
          <Route path="/LaboratoryAdd" element={<LaboratoryAdd/>} />
          <Route path="/PersonalTeacher" element={<PersonalTeacher/>} />
        </>
      )}

      {userRole === 'stud' && (
        <>
          <Route path="/StudLaboratory" element={<StudLaboratory />} />
        </>
      )}

      <Route path="registration" element={<Registration />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default MainRouter;
