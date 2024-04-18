import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import login from '../img/login.jpg'
import googleIcon from '../img/google-icon.png'
import axios from "axios";

function Login() {

	const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', formData);
            // Handle successful login, e.g., redirect to homepage
            navigate('/');
        } catch (error) {
            // Handle login error
            console.error('Login failed:', error);
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
					<Link to="/"><button className="button" onSubmit={handleSubmit}>Login</button></Link>
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