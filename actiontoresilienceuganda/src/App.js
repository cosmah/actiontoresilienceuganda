// App.js
import React from "react";
import "./App.css";
import RoutingComponent from "./components/Routes/Routes";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Hello from "./components/Hello/Hello";
import Habout from "./components/Habout/Habout";
import Stats from "./components/Stats/Stats";
import AboutUs from "./components/AboutUs/AboutUs";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Support from "./components/Support/Support";
import Donations from "./components/Donations/Donations";
// import About from "./components/about";
// import Contact from "./components/contact";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Router>
      <RoutingComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/habout" element={<Habout />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Home />} />
        <Route path="/donate" element={<Donations />} />
      </Routes>

      {isMobile}
    </Router>
  );
}

export default App;
