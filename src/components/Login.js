import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import login from '../img/login.jpg'
import googleIcon from '../img/google-icon.png'
import axios from "axios";

function Login() {

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const loginSubmit = async (e) => {
        try {
          e.preventDefault();
          const res = await axios({
            url: "http://localhost:3000/auth/login",
            method: "post",
            data: data,
          });
          window.alert(res.data.msg);
          if (res.data.token) {
            // Redirect to homepage on successful login
            navigate('/');
          }
        } catch (error) {
          window.alert("Invalid credentials");
          console.error(error);
        }
      };

    return (
        <div className="container">
            <h1 className="heading">Login Form</h1>
            <div className="form_container">
                <div className="left">
                    <img className="img" src={login} alt="login" />
                </div>
                <div className="right">
                
                    <h2 className="from_heading">Login</h2>
                    <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                    />
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                    />
                    <select
                        name="role"
                        onChange={handleChange}
                        value={data.role}
                    >
                        <option value="">Pick a Role: </option>
                        <option value="owner">Owner</option>
                        <option value="user">User</option>
                    </select>
                    <button className="button" onClick={loginSubmit}>Login</button>
                    <p className="text">or</p>
                    <button className="google-button">
                        <img src={googleIcon} alt="google icon" />
                        <span>SignIn with Google</span>
                    </button>
                    <p className="text">
                        New Here? <Link to="/signup">SignUp</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Login;
