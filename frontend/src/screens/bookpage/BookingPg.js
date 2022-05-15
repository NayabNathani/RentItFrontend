import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingPg.css';
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import axios from 'axios';
import Button from "react-bootstrap/Button";
// import Modal from 'react-modal';
import { useParams, Link, useNavigate } from "react-router-dom";
// import Header from './Header';
import bd1 from "./assests/bedroom1.jpg"
import bd2 from "./assests/bedroom2.jpg"
import bd3 from "./assests/bedroom3.jpg"
import dr1 from "./assests/drawingroom1.jpg"
import lounge1 from "./assests/lounge1.jpg"
import Footer from '../../components/footer'
import CusHeader from '../../components/CustomerHeader/CustomerHeader' 
import { Image } from 'cloudinary-react';

function BookingPg() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let params = useParams();
    const [apartDetails, setApartDetails] = useState({});
    
    useEffect(async () => {
        const apartmentid = 12;
        console.log(apartmentid);
        let details = await axios.get("http://localhost:3001/customers/apartDetails", {
          params: {
            id: params.id,
          }
        }); 
        console.log(details);
        setApartDetails(details.data[0]);
        //console.log(apartDetails.HostID);
        let obj = details.data[0].HostID;
        console.log(obj);
    }
    ,[]);


    const bookDone = () => {
        const apartmentid = params.id;
        let userdata = JSON.parse(localStorage.getItem("userdata"));
        let dates = JSON.parse(localStorage.getItem("Dates"));
        let start = new Date(dates.start);
        let end = new Date(dates.end);
        axios.post("http://localhost:3001/customers/book", {
            apartmentID: apartmentid,
            customerID: userdata.customerID,
            HostID: apartDetails.HostID,
            startDate: start,
            endDate: end
        }).then(() => {
            alert("Apartment Booked");
            navigate('/search-page/bookings/' + 0);

        })
    }

    //request

    return (
      
<>

<CusHeader/>



<section class="breadcrumb_area">
            <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">Book Appartment</h2>

                </div>
            </div>
        </section>

        {/* ROOM INFO STARTS HERE */}

<div class="row">
<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
<div class="bodyProduct">
<section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				<Image cloudName="teejayycloud" data-bs-toggle="modal" data-bs-target="#BedRoom1" class="imgProduct" publicId={apartDetails.img}/>
			</div>
			<div class="photo-album">
				<ul>
					<li><Image cloudName="teejayycloud"  data-bs-toggle="modal" data-bs-target="#BedRoom2" class="imgProduct" publicId={apartDetails.img1} alt="Bedroom2"/></li>
          <li><Image cloudName="teejayycloud" data-bs-target="#BedRoom3" class="imgProduct" publicId={apartDetails.img2} alt="Bedroom3"/></li>
          <li><Image cloudName="teejayycloud" data-bs-target="#DrawingRoom" class="imgProduct" publicId={apartDetails.img3} alt="DrawingRoom1"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>{apartDetails.Title}</h1>
		</div>
		<div class="price">
		RS<span>{apartDetails.priceperday}/Night</span>
		</div>
		<div class="description">
			<h3 class="h3Product">FEATURES</h3>
			<ul>
				<li>Room: {apartDetails.rooms}</li>
				<li>Type of Place: {apartDetails.PlaceType}</li>
				<li>Address: {apartDetails.address}</li>
			</ul>
		</div>
    <button class="genric-btn primary circle e-large" onClick={() => {bookDone()}}>RESERVE</button>

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
      <Image cloudName="teejayycloud" publicId={apartDetails.img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <Image cloudName="teejayycloud" publicId={apartDetails.img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <Image cloudName="teejayycloud" publicId={apartDetails.img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <Image cloudName="teejayycloud" publicId={apartDetails.img} class="d-block w-100" alt="..."/>
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
      <Image cloudName="teejayycloud" class="imgProduct" publicId={apartDetails.img1} alt="DrawingRoom1"/>
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
      <Image cloudName="teejayycloud" class="imgProduct" publicId={apartDetails.img2} alt="DrawingRoom1"/>
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
      <Image cloudName="teejayycloud" class="imgProduct" publicId={apartDetails.img3} alt="DrawingRoom1"/>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <a class="genric-btn primary" data-bs-dismiss="modal">Close</a>
      </div>
    </div>
  </div>
</div>
</div>
</section></div></div>

 {/* Product Card Area Starts Here */}
 <div class="col-lg-4 mb-4 mb-lg-0">
<div className='ProdCard'>
<div class="justify-content-center mt-5">
        <div class="card p-3 bg-white"><i class="fa fa-apple"></i>
            <div class="about-product text-center mt-2"><Image cloudName="teejayycloud" publicId={apartDetails.img} width="300"/>
                <div>
                    <h4>Believing is seeing</h4>
                    <h6 class="mt-0 text-black-50">{apartDetails.Title}</h6>
                </div>
            </div>
            <div class="stats mt-2">
                <div class="d-flex justify-content-between p-price"><span>Room Charges</span><span>Rs. {apartDetails.priceperday}</span></div>
                <div class="d-flex justify-content-between p-price"><span>Gst</span><span>13%</span></div>
                <div class="d-flex justify-content-between p-price"><span>Our Charges</span><span>2%</span></div>
            </div>
            <div class="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>Rs. {params.total}</span></div>
        </div>
    </div>
</div></div></div>


{/* HOSTED BY CARD STARTS HERE */}

<div class="cardAlign">

            <div class="card p-3">

                <div class="d-flex align-items-center">

                    <div class="image">
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" class="rounded" width="155" />
                </div>

                <div class="ml-3 w-100">
                    
                   <h4 class="mb-0 mt-0">Hosted By {apartDetails.FirstName} {apartDetails.LastName}</h4>
                   <span>Senior Front-end Developer</span>

                   <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">

                    <div class="d-flex flex-column">

                        <span class="articles">Hello this is {apartDetails.FirstName} {apartDetails.LastName}</span>
                        {/* <span class="number1">38</span> */}
                        
                    </div>
                       
                   </div>


                   {/* <div class="button mt-2 d-flex flex-row align-items-center">

                    <button class="btn btn-sm btn-outline-primary w-100">Chat</button>
                    <button class="btn btn-sm btn-primary w-100 ml-2">Follow</button>

                       
                   </div> */}


                </div></div></div></div>

<Footer/>


</>
    )
}

export default BookingPg
