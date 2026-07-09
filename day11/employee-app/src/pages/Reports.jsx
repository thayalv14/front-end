import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

function Reports() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const totalEmployees = employees.length;

  const totalDepartments = [
    ...new Set(employees.map((emp) => emp.department))
  ].length;

  const totalEmails = employees.filter(
    (emp) => emp.email !== ""
  ).length;

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
          <h1>{totalDepartments}</h1>
        </div>

        <div className="card">
          <h3>Registered Emails</h3>
          <h1>{totalEmails}</h1>
        </div>

      </div>

      <div
        className="table-container"
        style={{ marginTop: "30px" }}
      >

        <h2>Department Wise Employee Count</h2>

        <table>

          <thead>

            <tr>

              <th>Department</th>

              <th>No. of Employees</th>

            </tr>

          </thead>

          <tbody>

            {[...new Set(employees.map(emp => emp.department))]
              .map((dept) => (

                <tr key={dept}>

                  <td>{dept}</td>

                  <td>
                    {
                      employees.filter(
                        emp => emp.department === dept
                      ).length
                    }
                  </td>

                </tr>

              ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Reports;