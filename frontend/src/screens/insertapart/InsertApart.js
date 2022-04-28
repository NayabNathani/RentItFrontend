import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
// import './InsertApart.css';
import axios from 'axios';
import Footer from '../../components/footer'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../Index/image/Logo.png'
import './InsertApart.css'

function InsertApart() {
    const navigate = useNavigate();
    const [fileInputState, setFileInputState] = useState("");
    const [previewSource, setPreviewSource] = useState('');
    const [Title, setTitle] = useState("");
    const [City, setCity] = useState("");
    const [Descrip, setDescrip] = useState("");
    const [HostID, setHostID] = useState();
    const [priceperday, setPrice] = useState();

    function validatForm() {
        return Title.length > 0 && City.length > 0 && Descrip.length > 0 && priceperday.length > 0 && previewSource.length > 0;
    }

    const handleFileInputChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        console.log(file);
        previewFile(file);
    };
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result);
            setPreviewSource(reader.result);
        };
    };
    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!previewSource) return;
        uploadImage(previewSource);
    }

    const uploadImage = (base64EncodedImage) => {
        console.log("UploadImage!");
        console.log(base64EncodedImage);
        // axios.post("http://localhost:3001/apartment/insert", {
        //     image_info: base64EncodedImage,
        //     Title: Title,
        //     Descrip: Descrip,
        //     priceperday: priceperday,
        //     City: City,
        //     HostID: 2,
        // }).then(() => {
        //     console.log("Success");
        // })
        localStorage.setItem("apartInfo", JSON.stringify({
            image_info: base64EncodedImage,
            Title: Title,
            Descrip: Descrip,
            priceperday: priceperday,
            City: City,
            HostID: 3
        }))
        console.log("done");
        navigate('/apartdetails-page');
    }



    return (
        <>
        {/* HEADER AREA */}
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
                              <li class="nav-item"><a class="nav-link"><Link to="/hosthome">Listed</Link></a></li>
                              <li class="nav-item"><a class="nav-link"><Link to="">Booked</Link></a></li>
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
                      <li class="nav-item"><a class="nav-link"><Link to="/">Sign Out</Link></a></li>
                  </ul>
              </div> 
          </nav>
      </div>
  </header> 

  {/* HEADER AREA FINISH */}

<section class="breadcrumb_area">
            <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">Insert Appartment</h2>
                    <ol class="breadcrumb">
                        <li class="active"><a href="index.html"></a></li>
                    </ol>
                </div>
            </div>
        </section>

        <div class='containerInsert'>
        <div className='box'>
            <h1> UPLOAD APPARTMENT </h1>
            <br/>
            <form className="form" onSubmit={handleSubmitFile}>

            {/*Picture*/}    
            <div class="upload-btn-wrapper">
            <button class="btn123">Click Here to Upload appartment pictures</button>
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    value={fileInputState}
                    onChange={handleFileInputChange}
                    className="form-input"
                    accept="image/*"
                /></div>
                <br/><br/>

                {/*Title*/}
                <Form.Group size="lg" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                type="text"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                />
                </Form.Group>

                {/*Description*/}
                <Form.Group size="lg" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                type="text"
                value={Descrip}
                onChange={(e) => setDescrip(e.target.value)}
                />
                </Form.Group>

                {/*City*/}
                <Form.Group size="lg" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                type="text"
                value={City}
                onChange={(e) => setCity(e.target.value)}
                />
                </Form.Group>

                {/*Price*/}
                <Form.Group size="lg" controlId="price">
                <Form.Label>PricePerNight</Form.Label>
                <Form.Control
                type="number"
                value={priceperday}
                onChange={(e) => setPrice(e.target.value)}
                />
                </Form.Group>
                <br/>


                <button type="submit" class='genric-btn primary e-large'>
                    Next
                </button>
            </form>
            {/* <button onClick = {() => {
                    localStorage.clear();
                    navigate('/');
                }}>
                    Logout
            </button> */}
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
        </div>
        </div>
        <Footer/></>
    )
}

export default InsertApart
