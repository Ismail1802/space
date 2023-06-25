import React, { useState } from "react";
import data from "../../data/data";
import { motion } from "framer-motion";

const Destination = () => {
  const [planet, setPlanet] = useState("Moon");
  const destinations = data.destinations;

  return (
    <motion.div className="app__destination">
      <div className="app__destination__bg"></div>
      {destinations.map((item, index) => {
        return item.name === planet ? (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              className="app__destination__planet"
            >
              <div className="app__destination__text-cont">
                <p className="app__destination__planet-text">
                  <span>01</span> Pick your destination
                </p>
              </div>
              <div className="app__destination__img">
                <img src={item.images.png} alt="moon img" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              className="app__destination__info"
            >
              <ul className="app__destination__list">
                <li
                  onClick={() => setPlanet("Moon")}
                  className={planet === "Moon" ? "activeplanet" : ""}
                >
                  Moon
                </li>
                <li
                  className={planet === "Mars" ? "activeplanet" : ""}
                  onClick={() => setPlanet("Mars")}
                >
                  Mars
                </li>
                <li
                  className={planet === "Europa" ? "activeplanet" : ""}
                  onClick={() => setPlanet("Europa")}
                >
                  Europa
                </li>
                <li
                  className={planet === "Titan" ? "activeplanet" : ""}
                  onClick={() => setPlanet("Titan")}
                >
                  Titan
                </li>
              </ul>
              <h1 className="app__destination__head">{item.name}</h1>
              <p className="app__destination__text">{item.description}</p>
              <hr />
              <div className="app__destination__travel">
                <div className="app__destination__distance">
                  <p className="app__destination__distance-text">
                    Avg.Distance
                  </p>
                  <p className="app__destination__distance-duration">
                    {item.distance}
                  </p>
                </div>
                <div className="app__destination__time">
                  <p className="app__destination__time-text">Est.travel time</p>
                  <p className="app__destination__time-duration">
                    {item.travel}
                  </p>
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        ) : null;
      })}
    </motion.div>
  );
};

export default Destination;
