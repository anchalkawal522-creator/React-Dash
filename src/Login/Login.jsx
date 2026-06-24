import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("token", "token");
      localStorage.setItem("role", "admin")
      navigate("/dashboard");
    } 
    else if (email === "user@gmail.com" && password === "098765"){
     localStorage.setItem("token", "token")
     localStorage.setItem("role", "user")
      navigate("/dashboard");
   }
   else{
    alert("Invalid Creds")
   }
};

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;