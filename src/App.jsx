import React from "react";
import './input.css'
import './index.css'
import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/About/About";
import Hero from "./Component/Hero/Hero";
import Service from "./Component/Service/Services";
import Mywork from "./Component/Mywork/Myworks";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Service/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
