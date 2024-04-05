import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">JAOGUMO</a>
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
            <Link to="/login"><button class="btn btn-outline-primary mx-3" type="submit">Login</button></Link>
            <Link to="/signup"><button class="btn btn-outline-primary" type="submit"> SignUp</button></Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
