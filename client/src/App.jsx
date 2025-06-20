import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import navbar from "./components/navbar";
import Hero from "./components/hero";

const App = () => {
  return (
    <>
      <BrowserRouter>

      <header>
        <navbar/>
       <Hero/>

      </header>

      </BrowserRouter>
    </>
  );
};

export default App;