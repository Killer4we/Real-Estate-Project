// MainPage.js
import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/homePage.css';

const MainPage = () => {
  const [type, setType] = useState("beach")
  const [continent, setContinent] = useState("0")
  const [priceRange, setPriceRange] = useState("0")
  const navigate = useNavigate()

  const handleSearch = () => {
    // navigating to properties
    navigate(`/properties?type=${type}&continent=${continent}&priceRange=${priceRange}`)
  }
  return (
    <div className="main-page">
      <div className="quote">
        <h1>Your Dream Place Awaits...</h1>
        <p>Start your search now!</p>
      </div>
      <div className="search-bar">
      <select className="dropdown" onChange={(e) => setType(e.target.value)}>
        <option disabled>Select type</option>
          <option value="Mountain">Mountain</option>
          <option value="Beach">Beach</option>
          <option value="Village">Village</option>
        </select>
        <select className="dropdown" onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option>
        </select>
        <select className="dropdown" onChange={(e) => setContinent(e.target.value)}>
            <option disabled>Select Continent</option>
            <option value="0">Europe</option>
            <option value="1">Asia</option>
            <option value="2">Africa</option>
            <option value="3">South America</option>
            <option value="4">North America</option>
            <option value="5">Oceania</option>
        </select>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      <div class="overlay">
      <div className="background-image">
        {/* Your background image styling and content here */}
      </div>
      </div>
    </div>
  );
};

export default MainPage;
