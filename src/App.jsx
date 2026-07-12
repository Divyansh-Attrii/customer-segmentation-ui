import React from "react";
import HeroSection from "./components/Section1/HeroSection.jsx";
import Section2 from "./components/Section2/Section2.jsx";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Satisfied",
      context: "Prime customers, that have access to bank credit and are satisfied with the current product."
    },
    
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Underserved",
      context: "Prime Customers, that have access to bank credit and are not satisfied with the current service."
    },
    
    {
      img: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Underbanked",
      context: "Customers from near-prime and sub-prime segments with no access to bank credit."
    },
    {
      img: "https://images.unsplash.com/photo-1541560052-5e137f229371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      tag: "Inactive",
      context: "Customers with low engagement who have access to banking services but rarely use digital products, presenting opportunities for re-engagement."
    },
  ];

  return (
    <div>
      <HeroSection users={users} />
      <Section2 />
    </div>
  );
};

export default App;
