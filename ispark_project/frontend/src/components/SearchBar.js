// src/components/SearchBar.js
import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;