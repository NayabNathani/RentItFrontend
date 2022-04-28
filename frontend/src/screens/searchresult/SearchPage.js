import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './SearchPage.css';
import SearchResult from './SearchResult'
import { Button } from "@material-ui/core";
import logo from '../Index/image/Logo.png'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer'
import AdvSlider from '../../components/Adv-Slider/advSlider'
// import Header from './Header';

function SearchPage() {
    const [apartDetails, setApartDetails] = useState([]);
    const params = useParams();
    useEffect(async () => {
        //const city = params.searchresult
        let aparts = await axios.get("http://localhost:3001/temp_customers/searchResults"); 
        console.log("aparts");
        console.log(aparts.data[0]);
        //const responseJson = await fullResponse.json();
        setApartDetails(aparts.data);
        console.log("aparts.data.data");
        console.log(aparts.data)
    }
    ,[]) 

    return (
        <>
        <div className='searchPage_info'>
            {/* <Header /> */}
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
                      <li class="nav-item active"><a class="nav-link" href="about.html">About us</a></li>
                      <li class="nav-item "><a class="nav-link"><Link to="/contact">Contact</Link></a></li>
                      <li class="nav-item "><a class="nav-link"><Link to="/">Sign Out</Link></a></li>
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

  {/* HEADER AREA FINISH */}

  

  <div id='searchBody'>
    <br/><br/><br/><br/><br/>
            {/* <div className='searchPage__info'>
                <br/><br/><br/><br/><br/>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div> */}

            {/* {apartDetails.map((apart) => (
                <SearchResult
                id={apart.apartmentID}
                img={apart.img}
                location={apart.City}
                title={apart.Title}
                description={apart.Descrip}
                price={apart.priceperday}
                total={990}
                // total={() => {
                //     let date1 = JSON.parse(localStorage.getItem("start"));
                //     let date2 = JSON.parse(localStorage.getItem("end")); 
                //     let diff = date1.endDate.getTime() - date2.startDate.getTime();
                //     let total = 0;
                //     return (total = diff / (1000 * 3600 * 24));
                // }}
            />
            ))} */}
                {/* <br/><br/><br/><br/><br/> */}
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                hearts={4.73}
                price="£30 / night"
                total="£117 total"
            />

            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                hearts={4.3}
                price="£40 / night"
                total="£157 total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                hearts={3.8}
                price="£35 / night"
                total="£207 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                hearts={4.1}
                price="£55 / night"
                total="£320 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                hearts={5.0}
                price="£60 / night"
                total="£450 total"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private room in center of London"
                title="The Blue Room In London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                hearts={4.23}
                price="£65 / night"
                total="£480 total"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                hearts={3.85}
                price="£90"
                total="£650 total"
            />
            <br/>
        </div>
        
        </div>
        {/* <AdvSlider/> */}
        
        <Footer/></>
    )
}

export default SearchPage

