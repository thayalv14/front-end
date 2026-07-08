function DashboardCards({employees}){


  const totalEmployees = employees.length;


  const totalDepartments = 
    [...new Set(
      employees.map(emp=>emp.department)
    )].length;


  const newEmployees =
    employees.slice(-5).length;


  const registeredEmails =
    employees.filter(
      emp=>emp.email
    ).length;



  return(

    <div className="dashboard-cards">


      <div className="card">

        <h3>👨‍💼 Total Employees</h3>

        <h1>{totalEmployees}</h1>

      </div>



      <div className="card">

        <h3>🏢 Total Departments</h3>

        <h1>{totalDepartments}</h1>

      </div>



      <div className="card">

        <h3>🆕 New Employees</h3>

        <h1>{newEmployees}</h1>

      </div>



      <div className="card">

        <h3>📧 Registered Emails</h3>

        <h1>{registeredEmails}</h1>

      </div>



    </div>

  );

}


export default DashboardCards;