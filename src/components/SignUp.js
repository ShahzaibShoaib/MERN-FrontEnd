import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import signup from '../img/signup.jpg';
import googleIcon from '../img/google-icon.png';
import axios from 'axios';

function SignUp() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/auth/signup', formData);
            // Handle successful signup, e.g., redirect to login page
            navigate('/login');
        } catch (error) {
            // Handle signup error
            console.error('Signup failed:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="heading">SignUp Form</h1>
            <div className="form_container">
                <div className="left">
                    <img className="img" src={signup} alt="signup" />
                </div>
                <div className="right">
                    <h2 className="from_heading">SignUp</h2>
                    <input
                        type="text"
                        className="input"
                        placeholder="First Name"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="input"
                        placeholder="Last Name"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="">Pick a Role: </option>
                        <option value="owner">Owner</option>
                        <option value="user">User</option>
                    </select>
                    <button type="button" className="button" onClick={handleSubmit}>SignUp</button>
                    <p className="text">or</p>
                    <button className="google-button">
                        <img src={googleIcon} alt="google icon" />
                        <span>SignIn with Google</span>
                    </button>
                    <p className="text">
                        Already Have Account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
