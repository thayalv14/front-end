import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaChartBar,
  FaUserCircle,
  FaSignOutAlt,
  FaBullhorn,
  FaCalendarCheck
} from "react-icons/fa";


function Navbar() {


  const navigate = useNavigate();


  const role = localStorage.getItem("role");

  const username = localStorage.getItem("username");



  const logout = () => {

    localStorage.clear();

    navigate("/");

  };



  return (

    <nav className="navbar">


      {/* Company Logo */}

      <div className="nav-logo">

        <h2>
          ABC Technology
        </h2>

        <span>
          Employee Portal
        </span>

      </div>





      {/* Navigation Links */}

      <div className="nav-links">


        <NavLink to="/home">

          <FaHome />

          Home

        </NavLink>





        {/* Admin Menu */}

        {role === "admin" && (

          <>


            <NavLink to="/employees">

              <FaUsers />

              Employees

            </NavLink>



            <NavLink to="/departments">

              <FaBuilding />

              Departments

            </NavLink>



            <NavLink to="/reports">

              <FaChartBar />

              Reports

            </NavLink>


          </>

        )}







        {/* Employee Menu */}

        {role === "employee" && (

          <>


            <NavLink to="/attendance">

              <FaCalendarCheck />

              Attendance

            </NavLink>




            <NavLink to="/announcements">

              <FaBullhorn />

              Announcements

            </NavLink>



          </>

        )}



      </div>







      {/* User Section */}

      <div className="nav-profile">


        <FaUserCircle />



        <span>

          {username || "User"}

        </span>





        {/* Employee Only Profile */}

        {role === "employee" && (

          <NavLink to="/myprofile">

            Profile

          </NavLink>

        )}






        <button onClick={logout}>


          <FaSignOutAlt />


          Logout


        </button>



      </div>



    </nav>

  );

}



export default Navbar;