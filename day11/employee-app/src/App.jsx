import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import EmployeeListPage from "./pages/EmployeeListPage";
import Departments from "./pages/Departments";
import Reports from "./pages/Reports";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add" element={<EmployeeListPage />} />

        <Route path="/employees" element={<EmployeeListPage />} />

        <Route path="/departments" element={<Departments />} />

        <Route path="/reports" element={<Reports />} />
      </Routes>
    </>
  );
}

export default App;