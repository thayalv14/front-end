import React from "react";

import {
  FaUserCircle,
  FaIdBadge,
  FaBuilding,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";


function MyProfile() {

  const employee = {

    empId: "EMP101",
    name: "Thayal Nayaki",
    gender: "Female",
    department: "IT",
    salary: "45000",
    email: "thayal@gmail.com",
    phone: "9876543210"

  };


  return (

    <div className="myprofile-wrapper">


      <div className="myprofile-card">


        <div className="myprofile-header">


          <FaUserCircle className="myprofile-icon"/>


          <div>

            <h2 data-testid="profile-name">
              {employee.name}
            </h2>


            <p data-testid="profile-department">
              {employee.department} Department
            </p>


          </div>


        </div>



        <div className="myprofile-details">


          <div className="myprofile-item">

            <FaIdBadge/>

            <p>
              <b>Employee ID</b>
              <br/>
              <span data-testid="employee-id">
                {employee.empId}
              </span>
            </p>

          </div>



          <div className="myprofile-item">

            <FaUserCircle/>

            <p>
              <b>Name</b>
              <br/>
              <span>
                {employee.name}
              </span>
            </p>

          </div>




          <div className="myprofile-item">

            ⚧️

            <p>
              <b>Gender</b>
              <br/>
              <span>
                {employee.gender}
              </span>
            </p>

          </div>




          <div className="myprofile-item">

            <FaBuilding/>

            <p>
              <b>Department</b>
              <br/>
              <span>
                {employee.department}
              </span>
            </p>

          </div>




          <div className="myprofile-item">

            💰

            <p>
              <b>Salary</b>
              <br/>
              ₹ <span>{employee.salary}</span>
            </p>

          </div>




          <div className="myprofile-item">

            <FaEnvelope/>

            <p>
              <b>Email</b>
              <br/>
              <span>
                {employee.email}
              </span>
            </p>

          </div>




          <div className="myprofile-item">

            <FaPhone/>

            <p>
              <b>Phone</b>
              <br/>
              <span>
                {employee.phone}
              </span>
            </p>

          </div>



        </div>


      </div>


    </div>

  );

}


export default MyProfile;