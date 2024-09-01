// src/components/Header.js
import React from "react";
import "../css/Header.css";
import logo from "../../png/ibb-logo-tr.png"; // Görsel yolunu buraya ekleyin

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="İBB Logo" /> {/* Görseli ekleyin */}
      <h1>İBB İspark Lokasyonları</h1>
    </header>
  );
};

export default Header;
