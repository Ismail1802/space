import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Crew from "../pages/Crew/Crew";
import Technology from "../pages/Technology/Technology";
import Home from "../pages/Home/Home";
import Destination from "../pages/Destination/Destination";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
