import React from 'react'
import { useState } from 'react';
import logo from "../../screens/Index/image/Logo.png"
import { Link, useNavigate } from 'react-router-dom'
import './HostHeader.css';

function HostHeader() {
    const [flag, setFlag] = useState();
    const navigate = useNavigate();
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
                    <li class="nav-item"><a class="nav-link"><Link to="/insertapart-page">Insert Appartment</Link></a></li>
                                            
                    <li class="nav-item submenu dropdown">
                    <li class="nav-item"></li>
                        <a href="#" class="nav-link dropdown-toggle"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Your Appartments</a>
                        <ul class="dropdown-menu">
                            <li class="nav-item" ><a class="nav-link"><button onClick={() => {navigate("/hosthome/" + 0)}}>Listed</button></a></li>
                            <li class="nav-item" onClick={() => {setFlag(1)}}><a class="nav-link"><Link to="/hosthome/1">Booked</Link></a></li>
                        </ul>
                    </li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"><a class="nav-link"><button onClick={() => {
                        localStorage.clear();
                        navigate("/");
                    }}>Sign Out</button></a></li>
                </ul>
            </div> 
        </nav>
        </div>
        </header>
    )
}

export default HostHeader;