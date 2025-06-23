import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Home from "./pages/Home";
import About from "./pages/about";
import Services from "./pages/Services";



const App = () => {
  return (
    <>
    
      <BrowserRouter>
      <header>
        <Navbar/>
      </header>
        <Routes>
         <Route path="/" element={<Hero/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/services" element={<Services/>}/>
         
         <Route path="/stories" element={<Stories/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
      
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
