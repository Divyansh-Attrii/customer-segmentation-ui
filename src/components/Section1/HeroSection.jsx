import React from "react";
import Navbar from "./Navbar.jsx";
import Page1Content from "./Page1Content.jsx";

const HeroSection = (props) => {
  return (
    <div>
      <Navbar />
      <Page1Content users={props.users}/>
    </div>
  );
};

export default HeroSection;
