import React, { useState, useContext } from 'react';
import { NavLink, useLocation,Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { Dropdown } from 'react-bootstrap'; // Import Dropdown from react-bootstrap

const NavBar = () => {
  const location = useLocation();
  const { logout, user } = useContext(UserContext); // Use UserContext
  console.log(user);
  // Logout Function
  const handleLogout = () => {
    logout('user');
    window.location.href = '/Login'; // Redirect to the login page
  };
  const hiddenLinkStyle = {
    textDecoration : 'none',
  };

  return (
    <>
      <header className="header-section">
        <div className="top-nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="tn-left">
                  <li><i className="fa fa-phone" /> (12) 345 67890</li>
                  <li><i className="fa fa-envelope" /> info.colorlib@gmail.com</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="tn-right">
                  <div className="top-social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-tripadvisor" /></a>
                    <a href="#"><i className="fa fa-instagram" /></a>
                  </div>
                  <a href="#" className="bk-btn">Booking Now</a>
                  <div className="language-option">
                    {/* User Icon and Username Display */}
                    {user ? (
                      <div className="d-flex align-items-center">
                      {/* Using Font Awesome user icon */}
                      <i className="fa fa-user" style={{ fontSize: '30px', marginRight: '8px' }} />
                      <span className="me-2">{user.username}</span>
                      <Dropdown>
                        <Dropdown.Toggle variant="link" className="p-0">
                          <i className="fa fa-cog" style={{ cursor: 'pointer', fontSize: '20px' }} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={handleLogout}>
                            <i className="fa fa-sign-out" /> Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    ) : (
                      <i className="fa fa-user" style={{ cursor: 'pointer', fontSize: '18px' }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="logo">
                  <a href="./index.html"></a>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="nav-menu">
                  <nav className="mainmenu">
                    <ul>
                      <li className={location.pathname === "/" ? "active" : ""}>
                        <NavLink style={hiddenLinkStyle} to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                          Home
                        </NavLink>
                      </li>
                      <li className={location.pathname.startsWith("/hotels") ? "active" : ""}>
                        <NavLink style={hiddenLinkStyle} to="/hotels" className={({ isActive }) => (isActive ? "active" : "")}>
                          Hotels
                        </NavLink>
                      </li>
                      <li className={location.pathname.startsWith("/bookigs") ? "active" : ""}>
                        <NavLink style={hiddenLinkStyle} to="/bookings" className={({ isActive }) => (isActive ? "active" : "")}>
                          Bookings
                        </NavLink>
                      </li>
                      <li><Link style={hiddenLinkStyle} to="./about-us.html" >About Us</Link></li>
                      <li><Link style={hiddenLinkStyle} to="./pages.html">Pages</Link></li>
                      <li><Link style={hiddenLinkStyle} to="./blog.html">News</Link></li>
                      <li><Link style={hiddenLinkStyle} to="./contact.html">Contact</Link></li>
                    </ul>
                  </nav>
                  <div className="nav-right search-switch">
                    <i className="icon_search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
