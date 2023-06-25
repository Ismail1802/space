import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="app__home">
      <div className="app__home__bg"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="app__home__container"
      >
        <p className="app__home__introduction">So, you want to travel to</p>
        <h1 className="app__home__head">Space</h1>
        <p className="app__home__info">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="app__home__btn-cont"
      >
        <button className="app__home__btn">Explore</button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
