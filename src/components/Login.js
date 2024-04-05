import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
import login from '../img/login.jpg'
import googleIcon from '../img/google-icon.png'

function Login() {

	return (
		<div className="container">
			<h1 className="heading">Login Form</h1>
			<div className="form_container">
				<div className="left">
					<img className="img" src={login} alt="login" />
				</div>
				<div className="right">
					<h2 className="from_heading">Login</h2>
					<input type="text" className="input" placeholder="Email" />
					<input type="text" className="input" placeholder="Password" />
					<Link to="/"><button className="button">Login</button></Link>
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