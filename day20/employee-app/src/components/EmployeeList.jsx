function EmployeeList({ 
  employees, 
  onEdit, 
  onDelete, 
  onProfile 
}) {


  return (

    <div className="table-container">


      <table className="employee-table">


        <thead>

          <tr>

            <th>Employee ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Email</th>
            <th>Action</th>

          </tr>

        </thead>



        <tbody>


        {
          employees.length > 0 ?


          employees.map((emp)=>(


            <tr key={emp.id}>


              <td>{emp.empId}</td>


              <td>{emp.name}</td>


              <td>{emp.gender}</td>


              <td>₹ {emp.salary}</td>


              <td>{emp.department}</td>


              <td>{emp.email}</td>



              <td className="action-buttons">



                {/* View Profile Button */}

                <button

                  id="viewProfileBtn"

                  className="profile-btn"

                  onClick={()=>onProfile(emp)}

                >

                  👤 View Profile

                </button>





                {/* Edit Button */}

                <button

                  className="edit-btn"

                  onClick={()=>onEdit(emp)}

                >

                  ✏️

                </button>





                {/* Delete Button */}

                <button

                  className="delete-btn"

                  onClick={()=>onDelete(emp.id)}

                >

                  🗑️

                </button>



              </td>



            </tr>


          ))



          :


          <tr>

            <td colSpan="7">

              No Employees Found

            </td>

          </tr>


        }



        </tbody>


      </table>


    </div>


  )

}


export default EmployeeList;