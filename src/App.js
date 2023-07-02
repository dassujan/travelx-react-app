import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import PopularPlaces from "./components/PopularPlaces";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Pricing />
      <About />
      <PopularPlaces />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
