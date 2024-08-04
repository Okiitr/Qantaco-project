import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Register = ({ setIsRegistering }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/register/", {
        username,
        password,
      });
      alert("Registration successful! You can now log in.");
      setIsRegistering(false); // Switch back to login form after registration
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div  className="logincontainer">
      <h2>Register User</h2>
        <form onSubmit={handleRegister}>
            <div>
                <input type="text" placeholder="Username"  value={username}  onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div class ="row">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div class ="row">
                <button class = "login-register" type="submit">Register User</button>
            </div>
        </form>
        <button class = "login-register" onClick={() => setIsRegistering(false)}>Go to Login</button>
    </div>
  );
};

export default Register;
