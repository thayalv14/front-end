function EmployeeList({ employees, onEdit, onDelete }) {

  return (
    <div className="table-container">

      <h2>Employee List</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>


        <tbody>

          {
            employees.length > 0 ? (

              employees.map((employee) => (

                <tr key={employee.id}>

                  {/* MockAPI ID */}
                  <td>
                    {employee.id}
                  </td>


                  <td>
                    {employee.name}
                  </td>


                  <td>
                    {employee.department}
                  </td>


                  <td>
                    {employee.email}
                  </td>


                  <td>

                    <button
                      className="edit-btn"
                      onClick={() => onEdit(employee)}
                    >
                      ✏ Edit
                    </button>


                    <button
                      className="delete-btn"
                      onClick={() => onDelete(employee.id)}
                    >
                      🗑 Delete
                    </button>


                  </td>


                </tr>

              ))

            ) : (

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
  );

}


export default EmployeeList;