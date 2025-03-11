import NavBar from "./NavBar";
import React from 'react';
import LogoutButton from "./LogoutButton";
const MainClient = () => {
  return (
    <>
      <NavBar />
{/* About Us Section Begin */}
<section className="aboutus-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="about-text">
          <div className="section-title">
            <span>About Us</span>
            <h2>Intercontinental LA <br />Westlake Hotel</h2>
          </div>
          <p className="f-para">Sona.com is a leading online accommodation site. We’re passionate about
            travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41
            languages.</p>
          <p className="s-para">So when it comes to booking the perfect hotel, vacation rental, resort,
            apartment, guest house, or tree house, we’ve got you covered.</p>
          <a href="#" className="primary-btn about-btn">Read More</a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-pic">
          <div className="row">
            <div className="col-sm-6">
              <img src="img/about/about-1.jpg" alt />
            </div>
            <div className="col-sm-6">
              <img src="img/about/about-2.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* About Us Section End */}
  {/* Services Section End */}
  <section className="services-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>What We Do</span>
            <h2>Discover Our Services</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="service-item">
            <i className="flaticon-036-parking" />
            <h4>Travel Plan</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="service-item">
            <i className="flaticon-033-dinner" />
            <h4>Catering Service</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="service-item">
            <i className="flaticon-026-bed" />
            <h4>Babysitting</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="service-item">
            <i className="flaticon-024-towel" />
            <h4>Laundry</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="service-item">
            <i className="flaticon-044-clock-1" />
            <h4>Hire Driver</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="service-item">
            <i className="flaticon-012-cocktail" />
            <h4>Bar &amp; Drink</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Services Section End */}
  {/* Home Room Section Begin */}
  <section className="hp-room-section">
    <div className="container-fluid">
      <div className="hp-room-items">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="hp-room-item set-bg"  style={{ backgroundImage: 'url(/img/room/room-b1.jpg)' }}>
              <div className="hr-text">
                <h3>Double Room</h3>
                <h2>199$<span>/Pernight</span></h2>
                <table>
                  <tbody>
                    <tr>
                      <td className="r-o">Size:</td>
                      <td>30 ft</td>
                    </tr>
                    <tr>
                      <td className="r-o">Capacity:</td>
                      <td>Max persion 5</td>
                    </tr>
                    <tr>
                      <td className="r-o">Bed:</td>
                      <td>King Beds</td>
                    </tr>
                    <tr>
                      <td className="r-o">Services:</td>
                      <td>Wifi, Television, Bathroom,...</td>
                    </tr>
                  </tbody>
                </table>
                <a href="#" className="primary-btn">More Details</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="hp-room-item set-bg" style={{ backgroundImage: 'url(/img/room/room-b2.jpg)'}}>
              <div className="hr-text">
                <h3>Premium King Room</h3>
                <h2>159$<span>/Pernight</span></h2>
                <table>
                  <tbody>
                    <tr>
                      <td className="r-o">Size:</td>
                      <td>30 ft</td>
                    </tr>
                    <tr>
                      <td className="r-o">Capacity:</td>
                      <td>Max persion 5</td>
                    </tr>
                    <tr>
                      <td className="r-o">Bed:</td>
                      <td>King Beds</td>
                    </tr>
                    <tr>
                      <td className="r-o">Services:</td>
                      <td>Wifi, Television, Bathroom,...</td>
                    </tr>
                  </tbody>
                </table>
                <a href="#" className="primary-btn">More Details</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="hp-room-item set-bg" style={{ backgroundImage: 'url(/img/room/room-b3.jpg)'}}>
              <div className="hr-text">
                <h3>Deluxe Room</h3>
                <h2>198$<span>/Pernight</span></h2>
                <table>
                  <tbody>
                    <tr>
                      <td className="r-o">Size:</td>
                      <td>30 ft</td>
                    </tr>
                    <tr>
                      <td className="r-o">Capacity:</td>
                      <td>Max persion 5</td>
                    </tr>
                    <tr>
                      <td className="r-o">Bed:</td>
                      <td>King Beds</td>
                    </tr>
                    <tr>
                      <td className="r-o">Services:</td>
                      <td>Wifi, Television, Bathroom,...</td>
                    </tr>
                  </tbody>
                </table>
                <a href="#" className="primary-btn">More Details</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="hp-room-item set-bg" style={{ backgroundImage: 'url(/img/room/room-b4.jpg)'}}>
              <div className="hr-text">
                <h3>Family Room</h3>
                <h2>299$<span>/Pernight</span></h2>
                <table>
                  <tbody>
                    <tr>
                      <td className="r-o">Size:</td>
                      <td>30 ft</td>
                    </tr>
                    <tr>
                      <td className="r-o">Capacity:</td>
                      <td>Max persion 5</td>
                    </tr>
                    <tr>
                      <td className="r-o">Bed:</td>
                      <td>King Beds</td>
                    </tr>
                    <tr>
                      <td className="r-o">Services:</td>
                      <td>Wifi, Television, Bathroom,...</td>
                    </tr>
                  </tbody>
                </table>
                <a href="#" className="primary-btn">More Details</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  {/* Home Room Section End */}
  {/* Blog Section Begin */}
  <section className="blog-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Hotel News</span>
            <h2>Our Blog &amp; Event</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="blog-item set-bg" style={{ backgroundImage: 'url(/img/blog/blog-1.jpg)' }}>
            <div className="bi-text">
              <span className="b-tag">Travel Trip</span>
              <h4><a href="#">Tremblant In Canada</a></h4>
              <div className="b-time"><i className="icon_clock_alt" /> 15th April, 2019</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-item set-bg" style={{ backgroundImage: 'url(/img/blog/blog-2.jpg)' }}>
            <div className="bi-text">
              <span className="b-tag">Camping</span>
              <h4><a href="#">Choosing A Static Caravan</a></h4>
              <div className="b-time"><i className="icon_clock_alt" /> 15th April, 2019</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-item set-bg" style={{ backgroundImage: 'url(/img/blog/blog-3.jpg)' }}>
            <div className="bi-text">
              <span className="b-tag">Event</span>
              <h4><a href="#">Copper Canyon</a></h4>
              <div className="b-time"><i className="icon_clock_alt" /> 21th April, 2019</div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="blog-item small-size set-bg" style={{ backgroundImage: 'url(/img/blog/blog-wide.jpg)' }}>
            <div className="bi-text">
              <span className="b-tag">Event</span>
              <h4><a href="#">Trip To Iqaluit In Nunavut A Canadian Arctic City</a></h4>
              <div className="b-time"><i className="icon_clock_alt" /> 08th April, 2019</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-item small-size set-bg" style={{ backgroundImage: 'url(/img/blog/blog-10.jpg)' }}>
            <div className="bi-text">
              <span className="b-tag">Travel</span>
              <h4><a href="#">Traveling To Barcelona</a></h4>
              <div className="b-time"><i className="icon_clock_alt" /> 12th April, 2019</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section End */}
  {/* Footer Section Begin */}
  <footer className="footer-section">
    <div className="container">
      <div className="footer-text">
        <div className="row">
          <div className="col-lg-4">
            <div className="ft-about">
              <div className="logo">
                <a href="#">
                  <img src="img/footer-logo.png" alt />
                </a>
              </div>
              <p>We inspire and reach millions of travelers<br /> across 90 Country</p>
              <div className="fa-social">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-tripadvisor" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-youtube-play" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="ft-contact">
              <h6>Contact Us</h6>
              <ul>
                <li>(12) 345 67890</li>
                <li>info.colorlib@gmail.com</li>
                <li>856 Cordia Extension Apt. 356, Lake, United State</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="ft-newslatter">
              <h6>New latest</h6>
              <p>Get the latest updates and offers.</p>
              <form action="#" className="fn-form">
                <input type="text" placeholder="Email" />
                <button type="submit"><i className="fa fa-send" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-option">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Environmental Policy</a></li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="co-text"><p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved  <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Prime</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer Section End */}
  {/* Search model Begin */}
    </>
  );
};

export default MainClient;
