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
import CusHeader from '../../components/CustomerHeader/CustomerHeader' 

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

<CusHeader/>
<section class="breadcrumb_area">
            <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">Booked Appartment</h2>

                </div>
            </div>
        </section>

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
