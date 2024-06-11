import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthticationCommon from '../Authtication/AuthticationCommon/AuthticationCommon';
import LogInPage from '../Authtication/LogInPage/LogInPage';
import RegistraionPage from '../Authtication/RegistraionPage/RegistraionPage';
const CommonMain = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<AuthticationCommon />}>
            <Route path="" element={<LogInPage />} />
            <Route path="register" element={<RegistraionPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
export default CommonMain