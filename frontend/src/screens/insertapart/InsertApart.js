import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
// import './InsertApart.css';
// import axios from 'axios';
import Footer from '../../components/footer'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../Index/image/Logo.png'
import './InsertApart.css'

function InsertApart() {
    const navigate = useNavigate();
    const [uploadStatus, setUploadStatus] = useState('');
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [image_info, setImageInfo] = useState("");
    const [Title, setTitle] = useState("");
    const [City, setCity] = useState("");
    const [Descrip, setDescrip] = useState("");
    const [HostID, setHostID] = useState();
    const [priceperday, setPrice] = useState();

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    };
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };
    // const handleSubmitFile = (e) => {
    //     e.preventDefault();
    //     if (!previewSource) return;
    //     uploadImage(previewSource);
    // }

    // const uploadImage = (base64EncodedImage) => {
    //     console.log(base64EncodedImage);
    //     axios.post("http://localhost:3001/apartment/insert", {
    //         image_info: base64EncodedImage,
    //         Title: Title,
    //         Descrip: Descrip,
    //         priceperday: priceperday,
    //         City: City,
    //         HostID: 2,
    //     }).then(() => {
    //         console.log("Success");
    //     })
    // }



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

        <div class='containerInsert'>
        <div className='box'>
            <h1> UPLOAD APPARTMENT </h1>
            <br/>
            <form className="form">
            {/* onSubmit={handleSubmitFile} */}
            <div class="upload-btn-wrapper">
            <button class="btn123">Click Here to Upload appartment pictures</button>
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                /></div>
                <br/><br/>
                <Form.Group size="lg" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                type="text"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                type="text"
                value={Descrip}
                onChange={(e) => setDescrip(e.target.value)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                type="text"
                value={City}
                onChange={(e) => setCity(e.target.value)}
                />
                </Form.Group>
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
                    Submit
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
