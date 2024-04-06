import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
      <div class="container-fluid">
      <img src={logo} style={{maxWidth: "3.5%", maxHeight: "3.5%"}}/>
        <a class="navbar-brand mx-2" href="#"><strong>JAOGUMO</strong></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <Link to="/login"><button class="btn btn-outline-success mx-3" type="submit">Login</button></Link>
            <Link to="/signup"><button class="btn btn-outline-success" type="submit"> SignUp</button></Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
