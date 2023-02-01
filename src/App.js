import Navbar from "./components/Navbar";
import "./styles/styles.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
