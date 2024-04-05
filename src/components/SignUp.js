import React from 'react'
import { Link } from "react-router-dom";
import './SignUp.css'
import signup from '../img/signup.jpg'
import googleIcon from '../img/google-icon.png'

function SignUp() {

  return (
    <div className="container">
			<h1 className="heading">SignUp Form</h1>
			<div className="form_container">
				<div className="left">
					<img className="img" src={signup} alt="signup" />
				</div>
				<div className="right">
					<h2 className="from_heading">SignUp</h2>
          <input type="text" className="input" placeholder="First Name" />
					<input type="text" className="input" placeholder="Last Name" />
					<input type="text" className="input" placeholder="Email" />
					<input type="text" className="input" placeholder="Password" />
          <input type="text" className="input" placeholder="Role" />
					<Link to= "/login"><button className="button">SignUp</button></Link>
					<p className="text">or</p>
					<button className="google-button">
					<img src={googleIcon} alt="google icon" />
						<span>SignIn with Google</span>
					</button>
					<p className="text">
						Already Have Account ? <Link to="/login">Login</Link>
					</p>
				</div>
			</div>
		</div>
  )
}

export default SignUp
