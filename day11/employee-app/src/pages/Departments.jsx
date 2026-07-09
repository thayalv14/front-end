import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

function Departments() {

  const [employees, setEmployees] = useState([]);
  const [selectedDept, setSelectedDept] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const departments = [...new Set(employees.map(emp => emp.department))];

  const deptEmployees = employees.filter(
    emp => emp.department === selectedDept
  );

  return (
    <div className="page-container">

      <h1>🏢 Departments</h1>

      {!selectedDept ? (

        <div className="dashboard-cards">

          {departments.map((dept) => (

            <div
              key={dept}
              className="card"
              onClick={() => setSelectedDept(dept)}
              style={{ cursor: "pointer" }}
            >

              <h2>{dept}</h2>

              <p>
                Employees :
                {
                  employees.filter(
                    emp => emp.department === dept
                  ).length
                }
              </p>

            </div>

          ))}

        </div>

      ) : (

        <div className="table-container">

          <button
            className="back-btn"
            onClick={() => setSelectedDept(null)}
          >
            ← Back
          </button>

          <h2 style={{ margin: "20px 0" }}>
            {selectedDept} Department
          </h2>

          <table>

            <thead>

              <tr>

                <th>Employee ID</th>
                <th>Name</th>
                <th>Email</th>

              </tr>

            </thead>

            <tbody>

              {deptEmployees.map((emp) => (

                <tr key={emp.id}>

                  <td>{emp.employeeId}</td>

                  <td>{emp.name}</td>

                  <td>{emp.email}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );

}

export default Departments;