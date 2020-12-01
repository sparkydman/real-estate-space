import React from "react";
import About from "./about/About";
import Footer from "./footer/Footer";
import Houses from "./house/Houses";

const Home = () => {
  return (
    <div>
      <Houses />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
