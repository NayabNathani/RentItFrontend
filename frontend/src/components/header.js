import React from 'react'
import logo from "../screens/Index/image/Logo.png"
import { Link } from 'react-router-dom'

function Header() {
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
                      <li class="nav-item active"><a class="nav-link"><Link to="/">Home</Link></a></li> 
                      <li class="nav-item"><a class="nav-link"><Link to="/aboutus">About Us</Link></a></li>
                      <li class="nav-item"><a class="nav-link"><Link to="/contact">Contact</Link></a></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>

                                            {/* <li class="nav-item"><a class="nav-link" href="contact.html">Login</a></li> */}
                      <li class="nav-item submenu dropdown">
                      <li class="nav-item"></li>
                          <a href="#" class="nav-link dropdown-toggle"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login/Signup</a>
                          <ul class="dropdown-menu">
                              <li class="nav-item"><a class="nav-link"><Link to="/host-sign-login">as Host</Link></a></li>
                              <li class="nav-item"><a class="nav-link"><Link to="/cus-sign-login">as Customer</Link></a></li>
                              <li class="nav-item"><a class="nav-link"><Link to="/adv-sign-login">as Advertiser</Link></a></li>
                          </ul>
                      </li> 
                  </ul>
              </div> 
          </nav>
      </div>
  </header>

  )
}

export default Header