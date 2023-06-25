import React, { useState } from "react";
import data from "../../data/data";
import { motion } from "framer-motion";
const Technology = () => {
  const [portrait, setPortrait] = useState(0);
  const tech = data.technology;

  return (
    <motion.div className="app__technology">
      <div className="app__technology__bg"></div>
      {tech.map((item, index) => {
        return portrait === index ? (
          <React.Fragment key={index}>
            <div className="app__technology__head-cont">
              <p className="app__technology__head">
                <span>03</span> Space Launch 101
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              className="app__technology__global-cont"
            >
              <div className="app__technology__image-cont">
                <picture>
                  <source
                    media="(min-width: 1150px)"
                    srcSet={item.images.landscape}
                  />
                  <img src={item.images.portrait} alt="images" />
                </picture>
              </div>
              <div className="app__technology__cont">
                <div className="app__technology__buttons">
                  <div
                    className={`button ${0 === index ? "activebtn" : ""}`}
                    onClick={() => setPortrait(0)}
                  >
                    1
                  </div>
                  <div
                    className={`button ${1 === index ? "activebtn" : ""}`}
                    onClick={() => setPortrait(1)}
                  >
                    2
                  </div>
                  <div
                    className={`button ${2 === index ? "activebtn" : ""}`}
                    onClick={() => setPortrait(2)}
                  >
                    3
                  </div>
                </div>
                <div className="app__technology__text-cont">
                  <p className="app__technology__termin">The terminology..</p>
                  <h1 className="app__technology__proccess">{item.name}</h1>
                  <p className="app__technology__text">{item.description}</p>
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        ) : null;
      })}
    </motion.div>
  );
};

export default Technology;
