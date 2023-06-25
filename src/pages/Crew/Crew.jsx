import React, { useState } from "react";
import data from "../../data/data";
import { motion } from "framer-motion";
const Crew = () => {
  const [astronaut, setAstronaut] = useState(0);
  const crew = data.crew;

  return (
    <motion.div className="app__crew">
      <div className="app__crew__bg"></div>
      <div className="app__crew__head-cont">
        <p className="app__crew__head">
          <span>02</span> Meet your crew
        </p>
      </div>
      {crew.map((item, index) => {
        return index === astronaut ? (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              className="app__crew__cont"
            >
              <div className="app__crew__meet">
                <img
                  className="app__crew__image"
                  src={item.images.png}
                  alt=""
                />
                <hr />
              </div>
              <div className="app__crew__info">
                <div className="app__crew__dots">
                  <div
                    onClick={() => setAstronaut(0)}
                    className={`dot ${index === 0 && "activedot"}`}
                  ></div>
                  <div
                    onClick={() => setAstronaut(1)}
                    className={`dot ${index === 1 && "activedot"}`}
                  ></div>
                  <div
                    onClick={() => setAstronaut(2)}
                    className={`dot ${index === 2 && "activedot"}`}
                  ></div>
                  <div
                    onClick={() => setAstronaut(3)}
                    className={`dot ${index === 3 && "activedot"}`}
                  ></div>
                </div>
                <div className="app__crew__person">
                  <p className="app__crew__rank">{item.role}</p>
                  <p className="app__crew__name">{item.name}</p>
                  <p className="app__crew__text">{item.bio}</p>
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        ) : null;
      })}
    </motion.div>
  );
};

export default Crew;
