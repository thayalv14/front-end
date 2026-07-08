import { useEffect, useState } from "react";
import DashboardCards from "../components/DashboardCards";
import { getEmployees } from "../services/employeeService";


function Home(){

  const [employees,setEmployees] = useState([]);


  const loadEmployees = async()=>{

    try{

      const data = await getEmployees();

      setEmployees(data);

    }
    catch(error){

      console.log(error);

    }

  };


  useEffect(()=>{

    loadEmployees();

  },[]);



  return(

    <div className="home-container">

      <h1>
        Welcome to Employee Management System
      </h1>


      <p>
        Manage employees easily and efficiently
      </p>


      <DashboardCards
        employees={employees}
      />


    </div>

  );

}


export default Home;