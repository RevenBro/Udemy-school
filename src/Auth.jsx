import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import AddTeachers from './pages/Auth/AddTeachers/AddTeachers';
import SingleTeachers from './pages/Auth/SingleTeachers/SingleTeachers';

import Dashboard from "./pages/Auth/Dashboard/Dashboard";
import Teachers from "./pages/Auth/Teachers/Teachers";
import Students from "./pages/Auth/Students/Students";
import Billing from "./pages/Auth/Billing/Billing";
import Settings from "./pages/Auth/Settings/Settings";
import Exams from "./pages/Auth/Exams/Exams";
import Features from "./pages/Auth/Features/Features";

function Auth({token}) {
  const [teachers, setTeachers] = useState(JSON.parse(window.localStorage.getItem("teacher")) || []) 
  return (
    <div className="flex">
      <nav className="w-[18%]">
        <Navbar />
      </nav>
      <div className="w-[82%] overflow-y-auto h-[100vh]">
        <Routes>
          <Route path="/" element={<Dashboard token={token}/>} />
          <Route path="/teachers" element={<Teachers teachers={teachers} setTeachers={setTeachers}/>} />
          <Route path="/add" element={<AddTeachers teachers={teachers} setTeachers={setTeachers}/>}/>
          <Route path="single-page/:id" element={<SingleTeachers teachers={teachers}/>}/>
          <Route path="/students" element={<Students />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </div>
  );
}

export default Auth;
