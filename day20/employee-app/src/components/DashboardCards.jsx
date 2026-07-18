import {
  FaUsers,
  FaBuilding,
  FaUserCheck,
  FaLaptopCode
} from "react-icons/fa";


function DashboardCards({ employees }) {


  const totalEmployees = employees.length;


  const totalDepartments = [
    ...new Set(
      employees.map((emp) => emp.department)
    )
  ].length;



  const activeEmployees = employees.filter(
    (emp) => emp.email
  ).length;



  return (

    <div className="dashboard-cards">


      <div className="card">

        <FaUsers className="card-icon"/>

        <h3>Total Employees</h3>

        <h1>
          {totalEmployees}
        </h1>

      </div>



      <div className="card">

        <FaBuilding className="card-icon"/>

        <h3>Total Departments</h3>

        <h1>
          {totalDepartments}
        </h1>

      </div>



      <div className="card">

        <FaUserCheck className="card-icon"/>

        <h3>Active Employees</h3>

        <h1>
          {activeEmployees}
        </h1>

      </div>




      <div className="card">

        <FaLaptopCode className="card-icon"/>

        <h3>Company</h3>

        <h1>
          EMS
        </h1>

      </div>


    </div>

  );

}


export default DashboardCards;