import React from "react";
import images from "../../constants/images";
const Destination = () => {
  return (
    <div className="app__destination">
      <div className="app__destination__bg"></div>
      <div className="app__destination__planet">
        <div className="app__destination__text-cont">
          <p className="app__destination__planet-text">
            <span>01</span> Pick your destination
          </p>
        </div>
        <div className="app__destination__img">
          <img src={images.moon} alt="moon img" />
        </div>
      </div>
      <div className="app__destination__info">
        <ul className="app__destination__list">
          <li>Moon</li>
          <li>Mars</li>
          <li>Europa</li>
          <li>Titan</li>
        </ul>
        <h1 className="app__destination__head">Moon</h1>
        <p className="app__destination__text">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <hr />
        <div className="app__destination__travel">
          <div className="app__destination__distance">
            <p className="app__destination__distance-text">Avg.Distance</p>
            <p className="app__destination__distance-duration">384,400 KM</p>
          </div>
          <div className="app__destination__time">
            <p className="app__destination__time-text">Est.travel time</p>
            <p className="app__destination__time-duration">3 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
