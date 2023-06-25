import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import images from "../constants/images";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="app__navbar">
      <div className="app__navbar__logo-cont">
        <img className="app__navbar__logo" src={images.logo} alt="logo" />
      </div>
      <div className="app__navbar__hamburger-cont">
        <img
          onClick={() => setMenu(true)}
          className="app__navbar__hamburger"
          src={images.hamburger}
          alt=""
        />
        <div className={`app__navbar__menu ${menu ? "open" : ""}`}>
          <div className="app__navbar__close-cont">
            <img
              onClick={() => setMenu(false)}
              className="app__navbar__close"
              src={images.close}
              alt=""
            />
          </div>
          <ul onClick={() => setMenu(false)} className="app__navbar__list">
            <NavLink to="/home">
              <li>
                <span>00</span> Home
              </li>
            </NavLink>
            <NavLink to="/destination">
              <li>
                <span>01</span> Destination
              </li>
            </NavLink>
            <NavLink to="/crew">
              <li>
                <span>02</span> Crew
              </li>
            </NavLink>
            <NavLink to="/technology">
              <li>
                <span>03</span> Technology
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
