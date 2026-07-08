import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";


function Departments() {

  const [employees, setEmployees] = useState([]);
  const [selectedDept, setSelectedDept] = useState(null);


  const loadEmployees = async () => {

    try {

      const data = await getEmployees();

      setEmployees(data);

    } catch(error) {

      console.log(error);

    }

  };


  useEffect(() => {

    loadEmployees();

  }, []);



  const departments = [
    ...new Set(
      employees.map(emp => emp.department)
    )
  ];



  const deptEmployees = employees.filter(
    emp => emp.department === selectedDept
  );



  return (

    <div className="page-container">


      <h1>
        🏢 Departments
      </h1>



      {
        !selectedDept ?


        (

          <div>


            <h2>
              All Departments
            </h2>


            <div
              style={{
                display:"grid",
                gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
                gap:"25px",
                marginTop:"30px"
              }}
            >


            {
              departments.map((dept)=>(


                <div

                  key={dept}

                  onClick={() => setSelectedDept(dept)}

                  style={{

                    background:"white",

                    padding:"30px",

                    borderRadius:"18px",

                    cursor:"pointer",

                    boxShadow:
                    "0 8px 20px rgba(0,0,0,0.12)"

                  }}

                >

                  <h2>
                    🏢 {dept}
                  </h2>


                  <p>

                    👥 Employees :

                    {
                      employees.filter(
                        emp => emp.department === dept
                      ).length
                    }

                  </p>


                </div>


              ))
            }


            </div>


          </div>


        )


        :


        (

          <div className="table-container">


            <button
              onClick={() => setSelectedDept(null)}
            >

              ⬅ Back

            </button>



            <h2>

              {selectedDept} Department

            </h2>



            <table>


              <thead>

                <tr>

                  <th>ID</th>

                  <th>Name</th>

                  <th>Email</th>

                </tr>

              </thead>


              <tbody>


              {
                deptEmployees.map(emp => (

                  <tr key={emp.id}>

                    <td>{emp.id}</td>

                    <td>{emp.name}</td>

                    <td>{emp.email}</td>

                  </tr>

                ))
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