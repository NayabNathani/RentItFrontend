import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../../components/footer'
import { useNavigate, Link } from 'react-router-dom'
import './ViewAds.css'
import AdvHeader from '../../components/AdvHeader/AdvHeader'


function ViewAds() {
    return (
        <>
        {/* HEADER AREA */}
        <AdvHeader/>
        {/* HEADER AREA FINISH */}

<section class="breadcrumb_area">
            <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">View Your Advertisement</h2>
                    <ol class="breadcrumb">
                        <li class="active"><a href="index.html"></a></li>
                    </ol>
                </div>
            </div>
        </section>
<br/><br/><br/><br/>
{/* <!-- Gallery --> */}
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
  <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-90 shadow-1-strong rounded mb-4 paddingGallary"
      alt="Mountains in the Clouds"
    />

<img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-90 shadow-1-strong rounded mb-4 paddingGallary"
      alt="Mountains in the Clouds"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-90 shadow-1-strong rounded mb-4 paddingGallary"
      alt="Mountains in the Clouds"
    />

<img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-90 shadow-1-strong rounded mb-4 paddingGallary"
      alt="Mountains in the Clouds"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
  <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-90 shadow-1-strong rounded mb-4 paddingGallary"
      alt="Mountains in the Clouds"
    />

<img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-90 shadow-1-strong rounded mb-4 paddingGallary"
      alt="Mountains in the Clouds"
    />
  </div>
</div>
{/* <!-- Gallery --> */}
<br/><br/><br/><br/><br/>
        <Footer/></>
    )
}

export default ViewAds
