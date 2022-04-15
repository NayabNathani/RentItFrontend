import React, { useState, useEffect } from 'react';
import './BookingPg.css';
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import axios from 'axios';
import Button from "react-bootstrap/Button";
// import Modal from 'react-modal';
import { useParams, Link } from "react-router-dom";
// import Header from './Header';
import bd1 from "./assests/bedroom1.jpg"
import bd2 from "./assests/bedroom2.jpg"
import bd3 from "./assests/bedroom3.jpg"
import dr1 from "./assests/drawingroom1.jpg"
import lounge1 from "./assests/lounge1.jpg"
import Footer from '../../components/footer'
import logo from '../Index/image/Logo.png'

function BookingPg() {
    const [review, setReview] = useState("");
    const [checked, setChecked] = useState(false);
    const [like, setLike] = useState("");
    // const [reviewDetails, setReviewDetails] = useState([])
    // const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let params = useParams();
    //console.log(params.id);
    const [apartDetails, setApartDetails] = useState([]);
    //const [apartmentid, setApartmentid] = useState();
    
    // useEffect(async () => {
    //     const apartmentid = params.id;
    //     console.log(apartmentid);
    //     let aparts = await axios.post("http://localhost:3001/details", {
    //         apartmentID: apartmentid,
    //     }); 
    //     setApartDetails(aparts.data.data[0]);
    // }
    // ,[]);
    // useEffect(async () => {
    //     const apartmentid = params.id;
    //     //console.log(apartmentid);
    //     let reviews = await axios.post("http://localhost:3001/reviews/get", {
    //         apartmentID: apartmentid,
    //     }); 
    //     console.log(reviews);
    //     setReviewDetails(reviews.data.data);
    //     //console.log(reviewDetails.data);
    // }
    // ,[]);

    // const insertReviews = () => {
    //     const apartmentid = params.id;
    //     console.log(apartmentid);
    //     let userdata = JSON.parse(localStorage.getItem("userdata"));
    //     console.log(userdata.customerid);
    //     axios.post("http://localhost:3001/reviews/set", {
    //         comment: review,
    //         customerID: userdata.customerid,
    //         apartmentID: apartmentid,
    //         liked: like
    //     }).then(() => {
    //         console.log("success");
    //     })
    // }

    // const handleBook = async () => {
    //     const apartmentid = params.id;
    //     let hostInfo = axios.post("http://localhost:3001/reviews/set", {
    //         apartmentID: apartmentid,
    //     })
    //     console.log(hostInfo);
    // }

    // const bookDone = () => {
    //     const apartmentid = params.id;
    //     let userdata = JSON.parse(localStorage.getItem("userdata"));
    //     let start = JSON.parse(localStorage.getItem("start"));
    //     console.log(start);
    //     let end = JSON.parse(localStorage.getItem("end"));
    //     axios.post("http://localhost:3001/booking", {
    //         apartmentID: apartmentid,
    //         customerID: userdata.customerid,
    //         HostID: apartDetails.HostID,
    //         fromDate: start,
    //         toDate: end
    //     }).then(() => {
    //         alert("Apartment Booked")
    //     })
    // }

    //request

    return (
      
<>

{/* HEADER AREA */}
<header class="header_area" >
      <div class="container" id="borderHeader">
          <nav class="navbar navbar-expand-lg navbar-light">

              <a class="navbar-brand logo_h" href="index.html"><img src={logo} alt=""/></a>

              
              
              {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button> */}
              

              <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                  <ul class="nav navbar-nav menu_nav ml-auto">
                  <li class="nav-item">
    <div class="searchBar">
    <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
        <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
        <span class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
        </span>
    </div>
    </div>
    </div></div>
    </li>
                      <li class="nav-item"><a class="nav-link"><Link to="/">Home</Link></a></li> 
                      <li class="nav-item"><a class="nav-link"><Link to="/aboutus">About us</Link></a></li>
                      <li class="nav-item"><a class="nav-link"><Link to="/contact">Contact</Link></a></li>
                      <li class="nav-item"><a class="nav-link"><Link to="/">Sign Out</Link></a></li>
                      {/* <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"></li> */}
 
                  </ul>
              </div> 
          </nav>
      </div>
  </header> 

  {/* HEADER FINISH HERE */}

<div class="bodyProduct">
<section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				<img data-bs-toggle="modal" data-bs-target="#BedRoom1" class="imgProduct" src={bd1}/>
			</div>
			<div class="photo-album">
				<ul>
					<li><img data-bs-toggle="modal" data-bs-target="#BedRoom2" class="imgProduct" src={bd2} alt="Bedroom2"/></li>
          <li><img data-bs-toggle="modal" data-bs-target="#BedRoom3" class="imgProduct" src={bd3} alt="Bedroom3"/></li>
          <li><img data-bs-toggle="modal" data-bs-target="#DrawingRoom" class="imgProduct" src={dr1} alt="DrawingRoom1"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>Beautiful Room</h1>
		</div>
		<div class="price">
		RS<span>2599/Night</span>
		</div>
		<div class="description">
			<h3 class="h3Product">BENEFITS</h3>
			<ul>
				<li>Spacious Rooms</li>
				<li>Fully Furnished</li>
				<li>Clean Kitchen</li>
			</ul>
		</div>
    <a href="#" class="genric-btn primary circle e-large">Primary</a>

{/* <!-- Modal BD1--> */}
<div class="modal fade" id="BedRoom1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bd1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bd2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bd3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={dr1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>  
      </div>
      <div class="modal-footer">
        
        <a class="genric-btn primary" data-bs-dismiss="modal">Close</a>
      </div>
    </div>
  </div>
</div>


{/* <!-- Modal BD2 --> */}
<div class="modal fade" id="BedRoom2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img class="imgProduct" src={bd2} alt="DrawingRoom1"/>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <a class="genric-btn primary" data-bs-dismiss="modal">Close</a>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal BD3 --> */}
<div class="modal fade" id="BedRoom3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img class="imgProduct" src={bd3} alt="DrawingRoom1"/>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <a class="genric-btn primary" data-bs-dismiss="modal">Close</a>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal DR1--> */}
<div class="modal fade" id="DrawingRoom" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img class="imgProduct" src={dr1} alt="DrawingRoom1"/>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <a class="genric-btn primary" data-bs-dismiss="modal">Close</a>
      </div>
    </div>
  </div>
</div>


    
	</div>
</section>
</div>
<Footer/>




</>
    )
}

export default BookingPg
