import { useEffect, useState } from "react";


function Departments() {


  const [employees, setEmployees] = useState([]);

  const [selectedDept, setSelectedDept] = useState("");



  const departments = [

    {
      name:"IT",
      icon:"💻",
      color:"blue"
    },

    {
      name:"HR",
      icon:"👥",
      color:"green"
    },

    {
      name:"Finance",
      icon:"💰",
      color:"yellow"
    },

    {
      name:"Marketing",
      icon:"📢",
      color:"pink"
    },

    {
      name:"Sales",
      icon:"🛒",
      color:"purple"
    }

  ];



  useEffect(()=>{

    fetchEmployees();

  },[]);




  const fetchEmployees = async()=>{

    try{


      const response = await fetch(

        "https://6a4b3685f5eab0bb6b625712.mockapi.io/Empolyees"

      );


      const data = await response.json();


      setEmployees(data);


    }

    catch(error){

      console.log(error);

    }

  };






  const departmentCount = (department)=>{


    return employees.filter(

      (emp)=>

      emp.department === department

    ).length;


  };





  const filteredEmployees = employees.filter(

    (emp)=>

    emp.department === selectedDept

  );






  return (


    <div className="department-page">



      <div className="department-title">


        <h1>

          🏢 Departments

        </h1>


        <p>

          Manage employees department wise

        </p>


      </div>






      <div className="dept-container">


        {

          departments.map((dept)=>(


            <button

              key={dept.name}


              className={`dept-card ${dept.color} ${
                
                selectedDept===dept.name

                ?

                "selected"

                :

                ""

              }`}


              onClick={()=>setSelectedDept(dept.name)}

            >



              <div className="dept-icon">

                {dept.icon}

              </div>



              <h2>

                {dept.name}

              </h2>



              <span>

                {departmentCount(dept.name)}

                {" "}Employees

              </span>



            </button>



          ))

        }


      </div>







      {

        selectedDept && (


          <div className="department-table">



            <h2>

              {selectedDept} Department Employees

            </h2>




            <table>


              <thead>

                <tr>

                  <th>Employee ID</th>

                  <th>Name</th>

                  <th>Gender</th>

                  <th>Salary</th>

                  <th>Email</th>

                </tr>


              </thead>





              <tbody>



              {


              filteredEmployees.length > 0 ?


              filteredEmployees.map((emp)=>(


                <tr key={emp.id}>


                  <td>{emp.empId}</td>

                  <td>{emp.name}</td>

                  <td>{emp.gender}</td>

                  <td>₹ {emp.salary}</td>

                  <td>{emp.email}</td>


                </tr>



              ))



              :



              (

                <tr>

                  <td colSpan="5">

                    No Employees Found

                  </td>

                </tr>

              )


              }



              </tbody>


            </table>


          </div>


        )


      }




    </div>


  );

}



export default Departments;