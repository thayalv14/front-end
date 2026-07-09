import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

function Home() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    loadEmployees();

  }, []);

  const loadEmployees = async () => {

    try {

      const data = await getEmployees();

      setEmployees(data);

    } catch (error) {

      console.log(error);

    }

  };

  // Total Employees
  const totalEmployees = employees.length;

  // Total Departments
  const totalDepartments = [
    ...new Set(employees.map(emp => emp.department))
  ].length;

  // Total Emails
  const totalEmails = employees.filter(
    emp => emp.email !== ""
  ).length;

  // New Employees (same count for now)
  const newEmployees = employees.length;

  return (

    <div className="home-container">

      <h1>Employee Management Dashboard</h1>

      <p>
        Welcome to Employee Management System
      </p>

      <div className="dashboard-cards">

        <div className="card">

          <h3>Total Employees</h3>

          <h1>{totalEmployees}</h1>

        </div>

        <div className="card">

          <h3>Departments</h3>

          <h1>{totalDepartments}</h1>

        </div>

        <div className="card">

          <h3>Registered Emails</h3>

          <h1>{totalEmails}</h1>

        </div>

        <div className="card">

          <h3>New Employees</h3>

          <h1>{newEmployees}</h1>

        </div>

      </div>

    </div>

  );

}

export default Home;