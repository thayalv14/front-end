import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";
import DashboardCards from "../components/DashboardCards";


function Home() {

  const [employees, setEmployees] = useState([]);


  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");



  useEffect(() => {

    loadEmployees();

  }, []);



  const loadEmployees = async () => {

    try {

      const data = await getEmployees();

      setEmployees(data);

    } catch(error) {

      console.log(error);

    }

  };



  return (

    <div className="home-container">


      <div className="dashboard-header">


        <h1>
          🏢 ABC Tech
        </h1>


        <h2>

          {
            role === "admin"
            ? "Welcome Admin 👋"
            : `Welcome ${username} 👋`
          }

        </h2>


        <p>
          Employee Management System Dashboard
        </p>


      </div>



      {/* Dashboard Cards */}

      <DashboardCards employees={employees}/>



    </div>

  );

}


export default Home;