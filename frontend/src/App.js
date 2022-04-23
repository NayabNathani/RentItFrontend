import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './screens/Index/index.js'
import Contact from './screens/contact/contact'
import AboutUs from './screens/aboutus/aboutus'
import HostSignLogin from './components/Host-sign-login/Host-sign-login'
import CusSignLogin from './components/Customer-sign-login/Customer-sign-login'
import AdvSignLogin from './components/Advertiser-sign-login/Adv-sign-login'
import SearchPage from './screens/searchresult/SearchPage'
import InsertApart from './screens/insertapart/InsertApart'
import BookPage from './screens/bookpage/BookingPg'
import AdvSlider from './components/Adv-Slider/advSlider'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={< Index/>} />
          <Route path="/contact" element={< Contact/>} />
          <Route path="/aboutUs" element={< AboutUs/>} />
          <Route path="/host-sign-login" element={< HostSignLogin/>} />
          <Route path="/cus-sign-login" element={< CusSignLogin/>} />
          <Route path="/adv-sign-login" element={< AdvSignLogin/>} />
          <Route path="/search-page" element={< SearchPage/>} />
          <Route path="/insertapart-page" element={< InsertApart/>} />
          <Route path="/book-page" element={< BookPage/>} />
          <Route path="/advSlider" element={< AdvSlider/>} />
          </Routes>
      </Router>
    </div>


  );
}

export default App;