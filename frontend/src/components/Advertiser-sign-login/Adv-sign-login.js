import React from "react";
// import ReactDOM from "react-dom";
import * as Components from "./Components";
import "./styles.css";
// import Header from "../header";
// import Footer from "../footer";
import Logo1 from './images/Logo.png'
import logo from '../../screens/Index/image/Logo.png'
import { Link } from "react-router-dom";
import LoginHeader from "../loginHeader/LoginHeader";

function AdvSignLogin() {
    const [signIn, toggle] = React.useState(true);
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
        <Components.Form>
        <img class="Logo1" src={Logo1} alt="LetsRentIt"/> 
          <Components.Title>Create Advertiser Account</Components.Title>
          <Components.Input type="text" placeholder="First Name" />
          <Components.Input type="text" placeholder="Last Name" />
          <Components.Input type="text" placeholder="Agency Name" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
        <img class="Logo1" src={Logo1} alt="LetsRentIt"/> 
          <Components.Title>Advertiser Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
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
