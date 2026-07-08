import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";


function Reports(){


const [employees,setEmployees]=useState([]);



const loadReport = async()=>{

const data = await getEmployees();

setEmployees(data);

};



useEffect(()=>{

loadReport();

},[]);



const totalEmployees = employees.length;


const departments = [
...new Set(
employees.map(emp=>emp.department)
)
].length;



const emails = employees.filter(
emp=>emp.email
).length;



return(


<div className="page-container">


<h1>
📊 Employee Reports
</h1>



<div className="report-box">


<h3>
Total Employees :
{totalEmployees}
</h3>



<h3>
Total Departments :
{departments}
</h3>



<h3>
Registered Emails :
{emails}
</h3>



<h3>
Recently Added :
{
employees.slice(-5).length
}
</h3>



</div>


</div>


);


}


export default Reports;