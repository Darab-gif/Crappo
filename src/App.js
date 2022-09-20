import React, { useEffect } from "react";
import Crypto from "./Components/Crypto/Crypto";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import MarketCap from "./Components/MarketCap";
import Nav from "./Components/NavBar/Nav";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
