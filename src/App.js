import React from "react";
import Crypto from "./Components/Crypto/Crypto";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import MarketCap from "./Components/MarketCap";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Crypto />
      <MarketCap />
      <Footer />
    </div>
  );
}

export default App;
