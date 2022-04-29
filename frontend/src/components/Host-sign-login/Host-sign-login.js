import React from "react";
import { useState } from "react";
import axios from "axios";
import * as Components from "./Components";
import "./styles.css";
import Logo1 from './images/Logo.png'
import { useNavigate, useParams, Link } from "react-router-dom";
import logo from '../../screens/Index/image/Logo.png'
import LoginHeader from "../loginHeader/LoginHeader";


function HostSignLogin() {
    const [signIn, toggle] = React.useState(true);
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [firstName, setFname] = useState("");
      const [lastName, setLname] = useState("");
      const [contact, setContact] = useState("");
      const [address, setAddress] = useState("");
      const [city, setCity] = useState("");
      const [user, setUser] = useState({});
      const navigate = useNavigate();

      function submitHost() {
        axios.post("http://localhost:3001/hosts/signup", {
            TEmail: email,
            password: password,
            FirstName: firstName,
            LastName: lastName,
            Contact: contact,
            address: address,
            city: city
        }).then(() => {
            alert("Insert Success");
        })
      }

      async function handleSigninSubmit() {
        try{
            let response = await axios.get(
            "http://localhost:3001/hosts/signin", {
              params: {
                TEmail: email,
                password: password
              }
            })
            console.log(response.data);
            if(Object.keys(response.data).length == 0){
              alert("Incorrect Email or Password!")
            } else {
          // set the state of the user
            setUser(response.data);
            console.log(user);
            //localStorage.setItem("userdata", JSON.stringify(response.data));
            //let userdata = JSON.parse(localStorage.getItem("userdata"));
            //console.log(userdata.customerid)
            // store the user in localStorage
            }
        }
        catch(error) {
            console.log(error)
        }
    }

      function handleSubmit(e) {
        e.preventDefault();
      }

      function validateForm() {
        return email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0 && contact.length > 0 && address.length > 0 && city.length > 0;
      }

      function validateSigninForm() {
        return email.length > 0 && password.length > 0;
      }



  return (
      <>

<LoginHeader/>

  {/* <!--================Breadcrumb Area =================--> */}
  <section class="breadcrumb_area">
            <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">Host Login/Signup</h2>
                </div>
            </div>
        </section>
        {/* <!--================Breadcrumb Area =================--> */}
      
            
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSubmit}>
        {/* <img class="Logo1" src={Logo1} alt="LetsRentIt"/>  */}
          <Components.Title>Create Host Account</Components.Title>
          <Components.Input type="text" value = {firstName} placeholder="First Name" onChange={(e) => {setFname(e.target.value)}}/>
          <Components.Input type="text" value = {lastName} placeholder="Last Name" onChange={(e) => {setLname(e.target.value)}}/>
          <Components.Input type="email" value = {email} placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
          <Components.Input type="password" value = {password} placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
          <Components.Input type="text" value = {contact} placeholder="Contact Number" onChange={(e) => {setContact(e.target.value)}}/>
          <Components.Input type="text" value = {address} placeholder="Residential Address" onChange={(e) => {setAddress(e.target.value)}}/>
          <Components.Input type="text" value = {city} placeholder="City" onChange={(e) => {setCity(e.target.value)}}/>
          <Components.Button onClick={(e) => {
            if(validateForm()) {
              submitHost();
            }
            else {
              e.preventDefault();
              alert("Some Values left missing");
            }
          }}>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSubmit}>
        {/* <img class="Logo1" src={Logo1} alt="LetsRentIt"/>  */}
          <Components.Title>Host Sign in</Components.Title>
          <Components.Input type="email" value = {email} placeholder="Email" onChange = {(e) => {setEmail(e.target.value)}}/>
          <Components.Input type="password" value = {password} placeholder="Password" onChange = {(e) => {setPassword(e.target.value)}}/>
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button onClick={ (e) => {
            if(validateSigninForm()) {
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

export default HostSignLogin
