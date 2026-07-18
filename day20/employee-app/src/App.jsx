import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Home from "./pages/Home";
import EmployeeListPage from "./pages/EmployeeListPage";
import Departments from "./pages/Departments";
import Reports from "./pages/Reports";
import MyProfile from "./pages/MyProfile";
import MyAttendance from "./pages/MyAttendance";
import Announcements from "./pages/Announcements";

import "./App.css";

function App() {

  const location = useLocation();

  return (
    <>

      {/* Hide Navbar on Login Page */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route path="/home" element={<Home />} />

        {/* Admin Pages */}
        <Route path="/employees" element={<EmployeeListPage />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/reports" element={<Reports />} />

        {/* Employee Pages */}
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/attendance" element={<MyAttendance />} />
        <Route path="/announcements" element={<Announcements />} />

        {/* Invalid URL */}
        <Route path="*" element={<Login />} />

      </Routes>

    </>
  );
}

export default App;