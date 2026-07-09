function DashboardCards({ employees }) {
  const totalEmployees = employees.length;

  const totalDepartments = [
    ...new Set(employees.map((emp) => emp.department))
  ].length;

  const newEmployees = employees.slice(-5).length;

  const emailRegistered = employees.filter(
    (emp) => emp.email !== ""
  ).length;

  return (
    <div className="dashboard-cards">

      <div className="card blue">
        <h3>👨‍💼 Total Employees</h3>
        <h1>{totalEmployees}</h1>
      </div>

      <div className="card green">
        <h3>🏢 Departments</h3>
        <h1>{totalDepartments}</h1>
      </div>

      <div className="card orange">
        <h3>🆕 New Employees</h3>
        <h1>{newEmployees}</h1>
      </div>

      <div className="card purple">
        <h3>📧 Email Registered</h3>
        <h1>{emailRegistered}</h1>
      </div>

    </div>
  );
}

export default DashboardCards;