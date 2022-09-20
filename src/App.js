import React from "react";
import Crypto from "./Components/Crypto/Crypto";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import MarketCap from "./Components/MarketCap";
import Nav from "./Components/NavBar/Nav";

function App() {
  return (
    <div className="">
      <Nav />
      <Home />
      <Crypto />
      <MarketCap />
      <Footer />
    </div>
  );
}

export default App;
