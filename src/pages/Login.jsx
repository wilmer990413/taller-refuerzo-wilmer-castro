import React, { useState } from 'react';
import { useAuth } from '../data/AuthContext';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/users?username=${username}&password=${password}`);
            if (response.data.length > 0) {
                login(response.data[0]);
                alert("Credenciales Correctas");
                navigate('/taller-refuerzo-wilmer-castro/miTodoList');
            } else {
                throw new Error('Credenciales incorrectas');
            }
        } catch (error) {
            throw new Error('Error al intentar iniciar sesión');
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
            <p>
                username: wilmercala<br/>password: 123
            </p>
        </div>
    );
};

export default Login;