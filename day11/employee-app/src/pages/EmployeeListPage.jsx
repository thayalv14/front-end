import { useState, useEffect } from "react";

import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import SearchBar from "../components/SearchBar";

import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/employeeService";

function EmployeeListPage() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async (employee) => {
    try {
      await addEmployee(employee);
      loadEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  const handleUpdate = async (id, employee) => {
    try {
      await updateEmployee(id, employee);
      alert("Employee Updated Successfully");
      loadEmployees();
      setEditingEmployee(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {
      await deleteEmployee(id);
      alert("Employee Deleted Successfully");
      loadEmployees();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h1>Employee Management</h1>

      <EmployeeForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingEmployee={editingEmployee}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <EmployeeList
        employees={filteredEmployees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default EmployeeListPage;