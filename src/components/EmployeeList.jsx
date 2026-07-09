function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <table>

        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {employees.length > 0 ? (

            employees.map((employee) => (

              <tr key={employee.id}>

                {/* Show Employee ID. If employeeId is empty, show MockAPI id */}
                <td>{employee.employeeId || employee.id}</td>

                <td>{employee.name}</td>

                <td>{employee.department}</td>

                <td>{employee.email}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => onEdit(employee)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => onDelete(employee.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          ) : (

            <tr>
              <td colSpan="5">No Employees Found</td>
            </tr>

          )}

        </tbody>

      </table>
    </div>
  );
}

export default EmployeeList;