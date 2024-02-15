import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../components/Main/Main';
import Auto from '../../pages/Auto/Auto';
import Laboratory from '../../pages/Laboratory/Laboratory';
import PrepodRedLab from '../../pages/PrepodRedLab/PrepodRedLab';
import Registration from '../../pages/Registration/Registration';
import { useAuth } from '../../components/AuthContext';

const MainRouter = () => {
  const { userRole } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Auto />} />
      {userRole === 'teacher' && (
        <>
          <Route path="Laboratory" element={<Laboratory />} />
          <Route
            path="editingLaboratoryPrep"
            element={<PrepodRedLab />}
          />
        </>
      )}
      <Route path="Registration" element={<Registration />} />
      <Route from="/" to="/login" />
    </Routes>
  );
};

export default MainRouter;
