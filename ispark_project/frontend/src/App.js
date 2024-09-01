// src/App.js
import React from "react";
import Header from "./components/js/Header";
import Footer from "./components/js/Footer";
import MapComponent from "./components/js/MapComponent";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main className="map-container">
        <MapComponent />
      </main>
      <Footer />
    </div>
  );
};

export default App;
