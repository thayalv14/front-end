import { useState, useEffect } from "react";

function EmployeeForm({ onAdd, onUpdate, editingEmployee }) {

  const [employee, setEmployee] = useState({
    employeeId: "",
    name: "",
    department: "",
    email: "",
  });

  useEffect(() => {
    if (editingEmployee) {
      setEmployee({
        employeeId: editingEmployee.employeeId || "",
        name: editingEmployee.name || "",
        department: editingEmployee.department || "",
        email: editingEmployee.email || "",
      });
    } else {
      setEmployee({
        employeeId: "",
        name: "",
        department: "",
        email: "",
      });
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      employee.employeeId.trim() === "" ||
      employee.name.trim() === "" ||
      employee.department.trim() === "" ||
      employee.email.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingEmployee) {
      onUpdate(editingEmployee.id, employee);
    } else {
      onAdd(employee);
    }

    setEmployee({
      employeeId: "",
      name: "",
      department: "",
      email: "",
    });
  };

  return (
    <div className="form-container">

      <h2>
        {editingEmployee ? "Update Employee" : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={employee.employeeId}
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Employee Email"
          value={employee.email}
          onChange={handleChange}
        />

        <button type="submit">
          {editingEmployee ? "Update Employee" : "Add Employee"}
        </button>

      </form>

    </div>
  );
}

export default EmployeeForm;