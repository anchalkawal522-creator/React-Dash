import "./header.css";
import { CiSun } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

function Header() {
  return (
    <div className="fixed-top">
<nav className="header navbar bg-white px-4 shadow-sm">
        <div className="container-fluid">

        <div className="search-box">
          <i className="bi bi-search"></i>

          <input
            type="text"
            placeholder="Search here..."
            className="border-0 bg-transparent"
          />

        </div>

        <div className="d-flex align-items-center gap-4">

          <button className="icon-btn">
            <i className="bi bi-sun"><CiSun /></i>
          </button>

          <button className="icon-btn position-relative">
            <i className="bi bi-bell"><IoIosNotifications /></i>          </button>

          <div className="profile d-flex align-items-center">
        <img
  src="https://img.magnific.com/premium-photo/girl-hat-background-field-selective-focus_847296-44269.jpg?semt=ais_hybrid&w=740&q=80"
  alt="Profile"
  className="rounded-circle"
  style={{ width: "40px", height: "45px", objectFit: "cover" }}
/>

            <div className="ms-2">
              <h6>Admin User</h6>
              <small>Super Admin</small>
            </div>

            <i className="bi bi-chevron-down ms-3"></i>
          </div>

        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;
