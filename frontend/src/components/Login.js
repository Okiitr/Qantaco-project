import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Login = ({ setToken, setIsRegistering }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/token/', {
                username,
                password,
            });
            setToken(response.data.access);
        } catch (error) {
            if (error.response && error.response.data) {
                const errorMessages = Object.values(error.response.data).flat().join('\n');
                alert(`Error logging inr:\n${errorMessages}`);
            } else {
                console.error('Error logging in:', error);
                
            }
           
        }
    };

    return (
        <div className="logincontainer">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <input type="text" placeholder="Username" value={username}  onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div class ="row">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class ="row">
                    <button class = "login-register" type="submit">Login</button>
                </div>
            </form>
            <button class = "login-register" onClick={() => setIsRegistering(true)}>Go to Register</button>
        </div>
    );
};

export default Login;
