import React from "react";
import About from "./component/about/About";
import Houses from "./component/house/Houses";
import Navbar from "./component/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Houses />
      <About />
    </div>
  );
};

export default App;
