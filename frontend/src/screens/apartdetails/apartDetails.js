import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import axios from 'axios';
import Footer from '../../components/footer'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../Index/image/Logo.png'
import './apartDetails.css'

function InsertApart() {
    const navigate = useNavigate();
    const [fileInputState, setFileInputState] = useState("");
    const [previewSource, setPreviewSource] = useState([]);
    const [HostID, setHostID] = useState();
    const [count, setCount] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [type, setType] = useState("cabin");
    const [address, setAddress] = useState("");
    const [flag, setFlag] = useState(false);

    const file = [];

    function validatForm() {
        return rooms.length > 0 && type.length > 0 && address.length > 0 && previewSource.length > 0;
    }

        const handleFileInputChange = (e) => {
        e.preventDefault();
        file[count] = e.target.files[0];
        console.log(file[count]);
        previewFile(file[count]);
    };
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result);
            let newArr = [...previewSource];
            newArr[count] = reader.result;
            //console.log(newArr[count]);
            setPreviewSource(newArr);
            //console.log(previewSource);
        };
    };
    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!previewSource) return;
        uploadImage(previewSource);
    }

    const uploadImage = async (base64EncodedImage) => {
        console.log("UploadImage!");
        const apartInfo = JSON.parse(localStorage.getItem("apartInfo"));
        console.log(...base64EncodedImage);
        await axios.post("http://localhost:3001/hosts/apartments", {
            City: apartInfo.City,
            Title: apartInfo.Title,
            Descrip: apartInfo.Descrip,
            HostID: apartInfo.HostID,
            priceperday: apartInfo.priceperday,
            img: apartInfo.image_info,
            address: address,
            placeType: type,
            rooms: rooms,
            img1: base64EncodedImage[0],
            img2: base64EncodedImage[1],
            img3: base64EncodedImage[2]
        }).then(() => {
            navigate('/hosthome/' + 0);
        })
        setFlag(true);
    }



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
            <form className="form" onSubmit={ (e) => {
                if(validatForm()) {
                    handleSubmitFile(e);
                }
                else {
                    e.preventDefault();
                    setFlag(true);
                }
            }}>

            {/*Picture*/}    
            <div class="upload-btn-wrapper" onClick={ () => {setCount(0)} }>
            <button class="btn123">Click Here to Upload additional picture (1)</button>
                <input 
                    id="fileInput"
                    type="file"
                    name="image"
                    value={fileInputState}
                    onChange={handleFileInputChange}
                    className="form-input"
                    multiple
                />
            </div>

            <div class="upload-btn-wrapper" onClick={ () => {setCount(1)} }>
            <button class="btn123">Click Here to Upload additional picture (2)</button>
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    value={fileInputState}
                    onChange={handleFileInputChange}
                    className="form-input"
                    multiple
                />
            </div>

            <div class="upload-btn-wrapper" onClick={ () => {setCount(2)} }>
            <button class="btn123">Click Here to Upload additional picture (3)</button>
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    value={fileInputState}
                    onChange={handleFileInputChange}
                    className="form-input"
                    multiple
                />
            </div>
                


                {/*Address*/}
                <Form.Group size="lg" controlId="description">
                <Form.Label>Address</Form.Label>
                <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
                </Form.Group>
                <br/>
                <label>
                Place Type
                
                <select className="types labelBorder" value={type} onChange={(e) => {setType(e.target.value)}}>            
                    <option value="cabin">Cabin</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="suite">Suite</option>
                    <option value="condo">Condo</option>
                </select>
                </label>
                <br/><br/>
                {/*rooms*/}
                <Form.Group size="lg" controlId="room">
                <Form.Label>Rooms</Form.Label>
                <Form.Control
                type="number"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                />
                </Form.Group>
                <br/>

                {flag && validatForm() && <h2>Kindly wait while we process the information!!:D</h2>}
                {flag && !validatForm() && <h2>Kindly provide the complete information!!;)</h2>}

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
            {/* {previewSource.map( e => 
                <img
                    src={e}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )} */}
        </div>
        </div>
        <Footer/></>
    )
}

export default InsertApart
