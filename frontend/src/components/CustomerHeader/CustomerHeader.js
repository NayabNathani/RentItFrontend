import { useState } from 'react'
import logo from "../../screens/Index/image/Logo.png"
import { Link, useNavigate } from 'react-router-dom'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import './CustomerHeader.css';
import { jssPreset } from '@material-ui/core';
import axios from 'axios';

function CusHeader() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showSearch, setShowSearch] = useState(false);
    const [searchResult, setSearchResult] = useState('');
    const navigate = useNavigate();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        console.log(ranges);
        let dates = {
            start: ranges.selection.startDate,
            end: ranges.selection.endDate,
        }
        console.log(dates);
        localStorage.setItem("Dates", JSON.stringify(dates));
        const d = JSON.parse(localStorage.getItem("Dates"));
        const start = new Date(d.start);
        console.log(start.getTime());
        // axios.post("http://localhost:3001/k", {
        //     startDate: start
        // }).then(() => {
        //     console.log("insert Successful!");
        // })
        //console.log(new Date(dates.startDate.getTime()));
        // let diff = end.getTime() - start.getTime();
        // let total = 0;
        // console.log('Days', total = diff / (1000 * 3600 * 24));
        // console.log(start);
    }

    return (
            <header class="header_area" >
            <div class="container">
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
                <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={searchResult} onChange={(e) => {setSearchResult(e.target.value)}} placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                <span class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2" onClick={() => {
                    if((startDate.toString() != endDate.toString()) && searchResult.length > 0) {
                        navigate('/search-page/' + searchResult + '/' + 1);
                    }
                    else  {
                        console.log(startDate.toString());
                        console.log(endDate);
                        setShowSearch(true);
                    }
                    // else { 
                    //     alert("Missing!");
                    // }
                }}>
                <a href="#"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg></a>
                </span>
            </div>
            </div>
            </div></div>
    
            </li>

            <div className='searching'>
                {showSearch && 
                <div className='search'>
                    <DateRangePicker ranges={
                    [selectionRange]} onChange= {handleSelect} />
                </div>}
            </div>
                      <li class="nav-item "><a class="nav-link"><button onClick={() => setShowSearch(!showSearch)}
                        className='searchingButton'
                        variant='outlined'>
                        {showSearch ? "HIDE" : "SEARCH DATES"}</button></a></li>
                      <li class="nav-item "><a class="nav-link"><button onClick={()=>{navigate('/search-page/bookedapartments/' + 0)}}>Booked Appartment</button></a></li>
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


  )
}

export default CusHeader