import { useNavigate } from "react-router-dom";
import "./logout.css";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token", "token");
    localStorage.removeItem("role", "user");
    localStorage.removeItem("role", "admin");
    navigate("/Login.jsx");
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <h1>Logout</h1>
        <p>Are you sure you want to logout?</p>

        <div className="logout-buttons">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>

          <button className="cancel-btn" onClick={() => navigate("/src/pages/Dashboard/Dashboard.jsx")}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;