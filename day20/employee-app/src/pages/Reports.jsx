import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

function Reports() {
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

  const totalEmployees = employees.length;

  const departments = {};

  employees.forEach((emp) => {
    departments[emp.department] =
      (departments[emp.department] || 0) + 1;
  });

  return (
    <div className="page-container">

      <h1>📊 Employee Reports</h1>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Total Employees</h3>
          <h1>{totalEmployees}</h1>
        </div>

        <div className="card">
          <h3>Total Departments</h3>
          <h1>{Object.keys(departments).length}</h1>
        </div>

      </div>

      <div className="report-box">

        <h2>🏢 Department Wise Report</h2>

        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>No. of Employees</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(departments).map(([dept, count]) => (
              <tr key={dept}>
                <td>{dept}</td>
                <td>{count}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Reports;