import './css/style.css'
import './css/responsive.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import about_bg from "./image/about_bg.jpg"
import room1 from "./image/room1.jpg"
import room2 from "./image/room2.jpg"
import room3 from "./image/room3.jpg"
import room4 from "./image/room4.jpg"
// import testtimonial1 from "./image/testtimonial-1.jpg"
import blog1 from"./image/blog/blog-1.jpg"
import blog2 from "./image/blog/blog-2.jpg"
import blog3 from "./image/blog/blog-3.jpg"


function index() {
    return (
     <>
<Header/>
<section className="banner_area">
    <div className="booking_table d_flex align-items-center">
      <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
<div className="container">
  <div className="banner_content text-center">
    <h6>Away from monotonous life</h6>
    <h2>Relax Your Mind</h2>
    <p>If you are looking at blank cassettes on the web, you may be very confused at the<br/> difference in price. You may see some for as low as $.17 each.</p>
    <a href="foo" className="btn theme_btn button_hover">Get Started</a>
  </div>
</div>
    </div>
    
</section>


<section className="accomodation_area section_gap">
    <div className="container">
        <div className="section_title text-center">
            <h2 className="title_color">Inspiration for your next trip</h2>
            <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, </p>
        </div>
        <div className="row mb_30">
            <div className="col-lg-3 col-sm-6">
                <div className="accomodation_item text-center">
                    <div className="hotel_img">
                        <img src={room1} alt="" />
                        <a href="foo" className="btn theme_btn button_hover">Book Now</a>
                    </div>
                    <h4 className="sec_h4">Karachi</h4>
                    <h5>2999Rs<small>/night</small></h5>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="accomodation_item text-center">
                    <div className="hotel_img">
                        <img src={room2} alt=""/>
                        <a href="foo" className="btn theme_btn button_hover">Book Now</a>
                    </div>
                    <h4 className="sec_h4">Hydrabad</h4>
                    <h5>1999Rs<small>/night</small></h5>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="accomodation_item text-center">
                    <div className="hotel_img">
                        <img src={room3} alt=""/>
                        <a href="foo" className="btn theme_btn button_hover">Book Now</a>
                    </div>
                    <a href="#"><h4 className="sec_h4">Lahore</h4></a>
                    <h5>2499Rs<small>/night</small></h5>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="accomodation_item text-center">
                    <div className="hotel_img">
                        <img src={room4} alt=""/>
                        <a href="foo" className="btn theme_btn button_hover">Book Now</a>
                    </div>
                    <a href="#"><h4 className="sec_h4">Islamabad</h4></a>
                    <h5>3499Rs<small>/night</small></h5>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="facilities_area section_gap">
    <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background="">  
    </div>
    <div className="container">
        <div className="section_title text-center">
            <h2 className="title_w">Royal Facilities</h2>
            <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="row mb_30">
            <div className="col-lg-4 col-md-6">
                <div className="facilities_item">
                    <h4 className="sec_h4"><i className="lnr lnr-dinner"></i>Restaurant</h4>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="facilities_item">
                    <h4 className="sec_h4"><i className="lnr lnr-bicycle"></i>Sports CLub</h4>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="facilities_item">
                    <h4 className="sec_h4"><i className="lnr lnr-shirt"></i>Swimming Pool</h4>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="facilities_item">
                    <h4 className="sec_h4"><i className="lnr lnr-car"></i>Rent a Car</h4>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="facilities_item">
                    <h4 className="sec_h4"><i className="lnr lnr-construction"></i>Gymnesium</h4>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="facilities_item">
                    <h4 className="sec_h4"><i className="lnr lnr-coffee-cup"></i>Bar</h4>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="about_history_area section_gap">
      <div className="container">
          <div className="row">
              <div className="col-md-6 d_flex align-items-center">
                  <div className="about_content ">
                      <h2 className="title title_color">About Us <br/>Our History<br/>Mission & Vision</h2>
                      <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                      {/* <a href="foo" className="button_hover theme_btn_two">Request Custom Price</a> */}
                  </div>
              </div>
              <div className="col-md-6">
                  <img className="img-fluid" src={about_bg} alt="img"/>
              </div>
          </div>
      </div>
  </section>


  <section className="latest_blog_area section_gap">
      <div className="container">
          <div className="section_title text-center">
              <h2 className="title_color">latest posts from blog</h2>
              <p>The French Revolution constituted for the conscience of the dominant aristocratic class a fall from </p>
          </div>
          <div className="row mb_30">
              <div className="col-lg-4 col-md-6">
                  <div className="single-recent-blog-post">
                      <div className="thumb">
                          <img className="img-fluid" src={blog1} alt="post"/>
                      </div>
                      <div className="details">
                          <div className="tags">
                              <a href="foo" className="button_hover tag_btn">Travel</a>
                              <a href="foo" className="button_hover tag_btn">Life Style</a>
                          </div>
                          <a href="#"><h4 className="sec_h4">Low Cost Advertising</h4></a>
                          <p>Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.</p>
                          <h6 className="date title_color">05th March,2022</h6>
                      </div>	
                  </div>
              </div>
              <div className="col-lg-4 col-md-6">
                  <div className="single-recent-blog-post">
                      <div className="thumb">
                          <img className="img-fluid" src={blog2} alt="post"/>
                      </div>
                      <div className="details">
                          <div className="tags">
                              <a href="foo" className="button_hover tag_btn">Travel</a>
                              <a href="foo" className="button_hover tag_btn">Life Style</a>
                          </div>
                          <a href="#"><h4 className="sec_h4">Creative Outdoor Ads</h4></a>
                          <p>Self-doubt and fear interfere with our ability to achieve or set goals. Self-doubt and fear are</p>
                          <h6 className="date title_color">05th March,2022</h6>
                      </div>	
                  </div>
              </div>
              <div className="col-lg-4 col-md-6">
                  <div className="single-recent-blog-post">
                      <div className="thumb">
                          <img className="img-fluid" src={blog3} alt="post"/>
                      </div>
                      <div className="details">
                          <div className="tags">
                              <a href="foo" className="button_hover tag_btn">Travel</a>
                              <a href="foo" className="button_hover tag_btn">Life Style</a>
                          </div>
                          <a href="#"><h4 className="sec_h4">It S Classified How To Utilize Free</h4></a>
                          <p>Why do you want to motivate yourself? Actually, just answering that question fully can </p>
                          <h6 className="date title_color">05th March,2022</h6>
                      </div>	
                  </div>
              </div>
          </div>
      </div>
  </section>
<Footer/>

  </>
    );
  }
  
  export default index;