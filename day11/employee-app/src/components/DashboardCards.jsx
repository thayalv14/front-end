function DashboardCards({ employees }) {

  const totalEmployees = employees.length;

  const totalDepartments = [
    ...new Set(employees.map((emp) => emp.department))
  ].length;

  return (
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
        <h3>Active Employees</h3>
        <h1>{totalEmployees}</h1>
      </div>

      <div className="card">
        <h3>Company</h3>
        <h1>EMS</h1>
      </div>

    </div>
  );
}

export default DashboardCards;