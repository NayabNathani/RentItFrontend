import React, { useState, useEffect} from 'react';

import './cusSearchPage.css';
import CusSearchResult from './CusSearchResult'
import { Link } from 'react-router-dom'
import { Button } from "@material-ui/core";
import logo from '../Index/image/Logo.png'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer'
import CusHeader from '../../components/CustomerHeader/CustomerHeader' 
import AdvSlider from '../../components/Adv-Slider/advSlider'
// import Header from './Header';

function CusSearchPage() {
    const [apartDetails, setApartDetails] = useState([]);
    const params = useParams();
    useEffect(async () => {
        //const city = params.CusSearchResult
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
        <div className='searchPage_info'>
            <CusHeader/>
            

<section class="breadcrumb_area">
            <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">Search For Appartment</h2>
                    <ol class="breadcrumb">
                        <li class="active"><a href="index.html"></a></li>
                    </ol>
                </div>
            </div>
        </section>

  {/* <div id='searchBody'>
    <br/><br/><br/><br/><br/> */}
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
                <CusSearchResult
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
            {/* <CusSearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                hearts={4.73}
                price="£30 / night"
                total="£117 total"
            />

            <CusSearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · Wifi · Kitchen"
                hearts={4.3}
                price="£40 / night"
                total="£157 total"
            />

            <CusSearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                hearts={3.8}
                price="£35 / night"
                total="£207 total"
            />
            <CusSearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                hearts={4.1}
                price="£55 / night"
                total="£320 total"
            />
            <CusSearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                hearts={5.0}
                price="£60 / night"
                total="£450 total"
            />
            <CusSearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private room in center of London"
                title="The Blue Room In London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                hearts={4.23}
                price="£65 / night"
                total="£480 total"
            />
            <CusSearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                hearts={3.85}
                price="£90"
                total="£650 total"
            />
            <br/>
        </div> */}
        <Footer/>
        </div>
    )
}

export default CusSearchPage

