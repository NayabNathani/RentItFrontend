import React from "react";
import axios from 'axios';
// import ReactDOM from "react-dom";
import * as Components from "./Components";
import "./styles.css";
// import Header from "../header";
// import Footer from "../footer";
import { useState } from "react";
import Logo1 from './images/Logo.png'
import logo from '../../screens/Index/image/Logo.png'
import { Link } from "react-router-dom";
import LoginHeader from "../loginHeader/LoginHeader";

function AdvSignLogin() {
    const [signIn, toggle] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [agencyName, setAgencyName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function validateForm() {
      return email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0 && agencyName.length > 0;
    }

    function validateSigninForm() {
      return email.length > 0 && password.length > 0;
    }

    function submitAdvertiser() {
      axios.post("http://localhost:3001/advertisers/signup", {
          AEmail: email,
          password: password,
          FirstName: firstName,
          LastName: lastName,
          AgencyName: agencyName,
      }).then(() => {
          alert("Insert Success");
      })
      setEmail("");
      setPassword("");
      toggle(true);
    }

    async function handleSigninSubmit() {
      try{
          console.log('inside!');
          let response = await axios.get(
          "http://localhost:3001/advertisers/signin", {
            params: {
              AEmail: email,
              password: password
            }
          })
          console.log(response.data);
          if(Object.keys(response.data).length == 0){
            alert("Incorrect Email or Password!")
          } else {
        // set the state of the user
          //setUser(response.data);
          //console.log(user);
          localStorage.setItem("userdata", JSON.stringify(response.data));
          setEmail("");
          setPassword("");
          }
      }
      catch(error) {
          console.log(error)
      }
    }


  return (
      <>
<LoginHeader/>

{/* <!--================Breadcrumb Area =================--> */}
<section class="breadcrumb_area">
          <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
          <div class="container">
              <div class="page-cover text-center">
                  <h2 class="page-cover-tittle">Advertiser Login/Signup</h2>
              </div>
          </div>
      </section>
      {/* <!--================Breadcrumb Area =================--> */}
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit = {(e) => {e.preventDefault()}}>
        <img class="Logo1" src={Logo1} alt="LetsRentIt"/> 
          <Components.Title>Create Advertiser Account</Components.Title>
          <Components.Input type="text" placeholder="First Name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
          <Components.Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
          <Components.Input type="text" placeholder="Agency Name" value={agencyName} onChange={(e) => {setAgencyName(e.target.value)}}/>
          <Components.Input type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
          <Components.Input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
          <Components.Button onClick={(e) => {
            if(validateForm()) {
              submitAdvertiser();
            }
            else {
              e.preventDefault();
              alert("Some Values left missing");
            }
          }}>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={(e) => {e.preventDefault()}}>
        <img class="Logo1" src={Logo1} alt="LetsRentIt"/> 
          <Components.Title>Advertiser Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
          <Components.Input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button onClick={(e) => {
            if(validateSigninForm()) {
              handleSigninSubmit();
            }
            else {
              e.preventDefault();
              alert("Some values left missing!!");
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

export default AdvSignLogin
