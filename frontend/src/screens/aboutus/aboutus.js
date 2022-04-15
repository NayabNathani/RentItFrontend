import { Link } from 'react-router-dom'
import './css/style.css'
import './aboutus.css'
import './css/responsive.css'
// import Header from '../../components/header'
import Footer from '../../components/footer'
import logo from '../Index/image/Logo.png'
import pic1 from './image/about_bg.jpg'
import nayu from './image/Nayu.jpg'
function index() {
    return (
        <>
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
                      <li class="nav-item active"><a class="nav-link"><Link to="/aboutus">About Us</Link></a></li>
                      <li class="nav-item"><a class="nav-link"><Link to="/contact">Contact</Link></a></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>

                      
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

  {/* HEADER AREA FINISH */}
  {/* <!--================Breadcrumb Area =================--> */}
        <section class="breadcrumb_area">
            <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">About Us</h2>
                    <ol class="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">About</li>
                    </ol>
                </div>
            </div>
        </section>
        {/* <!--================Breadcrumb Area =================--> */}

  <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
<div class="card1">
  <img src={nayu} alt="John" />
  <h1>Ali Nayab</h1>
  <p class="title1">CEO and Founder, Let's Rent It</p>
  <p>NUCES, Fast</p>
</div>
</div>
<div class="col">
<div class="card1">
  <img src={nayu} alt="John" />
  <h1>Tuaha Ajaz</h1>
  <p class="title1">CEO and Founder, Let's Rent It</p>
  <p>NUCES, Fast</p>
</div>
</div>
<div class="col">
<div class="card1">
  <img src={nayu} alt="John" />
  <h1>Saad Sohail</h1>
  <p class="title1">CEO and Founder, Let's Rent It</p>
  <p>NUCES, Fast</p>
</div>
</div>
<div class="col">
<div class="card1">
  <img src={nayu} alt="John" />
  <h1>Hammad</h1>
  <p class="title1">CEO and Founder, Let's Rent It</p>
  <p>NUCES, Fast</p>
</div>
</div>
</div>


        
        {/* <!--================ About History Area  =================--> */}
        <section class="about_history_area section_gap">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 d_flex align-items-center">
                        <div class="about_content ">
                            <h2 class="title title_color">About Us <br/>Our History<br/>Mission & Vision</h2>
                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img class="img-fluid" src={pic1} alt="img"/>
                    </div>
                </div>
            </div>
        </section>

    

 
<Footer/>

  </>
    );
  }
  
  export default index;