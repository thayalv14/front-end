import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EmployeeListPage from "./pages/EmployeeListPage";
import Departments from "./pages/Departments";
import Reports from "./pages/Reports";

import Navbar from "./components/Navbar";

import "./App.css";


function App() {


  return (

    <BrowserRouter>


      <Navbar />


      <Routes>


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/employees"
          element={<EmployeeListPage />}
        />


        <Route
          path="/departments"
          element={<Departments />}
        />


        <Route
          path="/reports"
          element={<Reports />}
        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;