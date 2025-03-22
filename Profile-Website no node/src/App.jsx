import React from "react";

import Navbar from "./assets/Navbar.jsx";
import Home from "./pages/home.jsx";
import Aboutme from "./pages/aboutme.jsx";
import Gallery from "./pages/gallery.jsx";
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Gallery/>
    </div>
  );
}

export default App;