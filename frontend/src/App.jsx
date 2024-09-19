import React from 'react'
import { Routes, Route } from "react-router-dom";
import Landingpage from './pages/landing_page';
import LoginPage from './pages/login_page';
import UniversitySearch from './pages/university_search';
import ScholarshipsPage from './pages/scholarships_page';
import RegisterPage from './pages/register_page';

const App = () => {
  return (
    <Routes>
       <Route path = "/" element={<LoginPage />}></Route>
        <Route path = "/register" element={<RegisterPage />}></Route>
        <Route path = "/landing-page" element={<Landingpage />}></Route>
        <Route path = "/university-search" element={<UniversitySearch />}></Route>
        <Route path = "/scholarships" element={<ScholarshipsPage />}></Route>
    </Routes>
   
  )
}

export default App
