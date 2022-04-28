import React, { useState } from "react";
import axios from 'axios';
// import ReactDOM from "react-dom";
import * as Components from "./Components";
import "./styles.css";
// import Header from "../header";
// import Footer from "../footer";
import Logo1 from './images/Logo.png'
import { useNavigate, Link } from "react-router-dom";
import logo from '../../screens/Index/image/Logo.png'

function CusSignLogin() {
    const [signIn, toggle] = React.useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFname] = useState("");
    const [lastName, setLname] = useState("");
    const [contact, setContact] = useState("");
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    function submitCustomer() {
      axios.post("http://localhost:3001/customers/signup", {
          FirstName: firstName,
          LastName: lastName,
          CEmail: email,
          Contact: contact,
          password: password
      }).then(() => {
          alert("Insert Success");
      })
    }

    function validateSigninForm() {
      return email.length > 0 && password.length > 0;
  }

  async function handleSigninSubmit() {
      try{
          // send the email and password to the server
          let response = await axios.get(
          "http://localhost:3001/customers/signin", {
            params: {
              email: email,
              password: password
            }
          })
          //console.log(response);
          if(Object.keys(response.data).length == 0){
              alert("Incorrect Email or Password!")
          } else {
          // set the state of the user
          setUser(response.data);
          console.log(user);
          //localStorage.setItem("userdata", JSON.stringify(response.data));
          //let userdata = JSON.parse(localStorage.getItem("userdata"));
          }
      }
      catch(error) {
          console.log(error)
      }
  }

    function validateForm() {
      return email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0 && contact.length > 0;
    }

    function handleSubmit(event) {
      event.preventDefault();
    }

  return (
      <>

<header class="header_area headercustom">
      <div class="container" id="borderHeader">
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

    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSubmit}>
        <img class="Logo1" src={Logo1} alt="LetsRentIt"/> 
          <Components.Title>Create Customer Account</Components.Title>
          <Components.Input type="text" value = {firstName} placeholder="First Name" onChange={(e) => {setFname(e.target.value)}}/>
          <Components.Input type="text" value = {lastName} placeholder="Last Name" onChange={(e) => {setLname(e.target.value)}}/>
          <Components.Input type="email" value = {email} placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
          <Components.Input type="password" value = {password} placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
          <Components.Input type="text" value = {contact} placeholder="Contact Number" onChange={(e) => {setContact(e.target.value)}}/>
          <Components.Button onClick  = {(e) => {
            if (validateForm) {
              console.log("done");
              submitCustomer();
            }
            else {
              e.preventDefault();
              alert("Some values left missing!");
            }
          }
          }>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSubmit}>
        <img class="Logo1" src={Logo1} alt="LetsRentIt"/> 
          <Components.Title>Customer Sign in</Components.Title>
          <Components.Input type="email" value = {email} placeholder="Email" onChange = {(e) => {setEmail(e.target.value)}}/>
          <Components.Input type="password" value = {password} placeholder="Password" onChange = {(e) => {setPassword(e.target.value)}}/>
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button onClick = {(e) => {
            if (validateSigninForm()) {
              console.log("Done");
              handleSigninSubmit();
            }
            else {
              e.preventDefault();
              alert("Some values missing!");
            }
            }}>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>

    <footer class="footer-area section_gap">
      <p class="col-lg-8 col-sm-12 footer-text m-0">
Copyright ©2022 All rights reserved by <a href="#" target="_blank">TeamGG</a></p>
  </footer>


    </>
  );
}

export default CusSignLogin
