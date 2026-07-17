import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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


  const navigate = useNavigate();


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


    } catch(error){

      console.log(error);

      alert("❌ Failed to Load Employees");

    }

  };





  // Add Employee

  const handleAdd = async(employee)=>{


    try{


      await addEmployee(employee);


      alert("✅ Employee Added Successfully");


      loadEmployees();


    }catch(error){


      console.log(error);

      alert("❌ Failed to Add Employee");


    }


  };






  // Edit

  const handleEdit=(employee)=>{


    setEditingEmployee(employee);


  };







  // Update

  const handleUpdate=async(employee)=>{


    try{


      await updateEmployee(employee.id,employee);


      alert("✅ Employee Updated Successfully");


      setEditingEmployee(null);


      loadEmployees();



    }catch(error){


      console.log(error);

      alert("❌ Failed to Update Employee");


    }


  };







  // Delete

  const handleDelete=async(id)=>{


    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );


    if(!confirmDelete) return;



    try{


      await deleteEmployee(id);


      alert("🗑️ Employee Deleted Successfully");


      loadEmployees();



    }catch(error){


      console.log(error);

      alert("❌ Failed to Delete Employee");


    }


  };







  // Profile View ⭐

  const handleProfile=(employee)=>{


    localStorage.setItem(

      "profileEmployee",

      JSON.stringify(employee)

    );


    navigate("/myprofile");


  };







  const filteredEmployees = employees.filter((emp)=>

    emp.name?.toLowerCase()
    .includes(search.toLowerCase())

  );






  return(


    <div className="page-container">


      <h1>
        Employee Management
      </h1>





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


        onProfile={handleProfile}


      />



    </div>


  );


}


export default EmployeeListPage;