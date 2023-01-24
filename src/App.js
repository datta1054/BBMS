import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import UserLogin from "./components/user/userLogin";
import UserRegister from "./components/user/userRegister";
import EmployeeLogin from "./components/employee/employeeLogin";
import EmployeRegister from "./components/employee/employeeRegister";
import UserDashboard from "./components/user/UserDashboard";
import EmpDashboard from "./components/employee/EmpDarshboard";
import UpdateStock from "./components/bloodbank/UpdateStock";
import UpdateHealth from "./components/bloodbank/UpdateHealth";
import Donate from "./components/layout/Donate";
import Search from "./components/bloodbank/Search";
import HandleRequest from "./components/bloodbank/HandleRequest";
import RequestClass from "./components/bloodbank/RequestClass";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login/usr" element={<UserLogin />} />
        <Route path="/login/emp" element={<EmployeeLogin />} />
        <Route path="/reg/usr" element={<UserRegister />} />
        <Route path="/reg/emp" element={<EmployeRegister />} />
        <Route path="/login/usr/dash" element={<UserDashboard />} />
        <Route path="/login/emp/dash" element={<EmpDashboard />} />
        <Route path="/login/emp/ub" element={<UpdateStock />} />
        <Route path="/login/emp/uh" element={<UpdateHealth />} />
        <Route path="/home/search/blood" element={<Search />} />
        <Route path="/request" element={<RequestClass />} />
        <Route path="/login/emp/hr/" element={<HandleRequest />} />
        {/* <Route exact path="/login/usr/dash/req" component={Request}/> */}
      </Routes>
    </div>
  );
}

export default App;
