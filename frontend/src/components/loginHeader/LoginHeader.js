import React from 'react'
import logo from "../../screens/Index/image/Logo.png"
import { Link } from 'react-router-dom'

function LoginHeader() {
  return (
    <header class="header_area">
      <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">

              <a class="navbar-brand logo_h" href="index.html"><img src={logo} alt=""/></a>
              
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>

              <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                  <ul class="nav navbar-nav menu_nav ml-auto">
                      <li class="nav-item"><a class="nav-link"><Link to="/">Home</Link></a></li> 
                      <li class="nav-item"><a class="nav-link"><Link to="/aboutus">About Us</Link></a></li>
                      <li class="nav-item"><a class="nav-link"><Link to="/contact">Contact</Link></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>
                      <li class="nav-item"><a class="nav-link"></a></li>

                  </ul>
              </div> 
          </nav>
      </div>
  </header>

  )
}

export default LoginHeader