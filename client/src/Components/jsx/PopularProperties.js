import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/beach.jpeg';
import img2 from '../../images/mountain.jpeg';
import img3 from '../../images/countryside.jpeg';
import { request } from '../../util/fetchAPI';
import '../css/popularProperties.css';

const PopularProperties = () => {
  const [beachProperties, setBeachProperties] = useState(0);
  const [mountainProperties, setMountainProperties] = useState(0);
  const [villageProperties, setVillageProperties] = useState(0);

  useEffect(() => {
    const fetchPropertiesNumber = async () => {
      try {
        const data = await request('/property/find/types', 'GET');

        setBeachProperties(data.beach);
        setMountainProperties(data.mountain);
        setVillageProperties(data.village);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPropertiesNumber();
  }, []);

  return (
    <div className="popular-properties-container">
        <div className="header">
          <h5>Explore Diverse Accommodations</h5>
          <h2>Find Your Perfect Stay</h2>
      </div>
      <div className="property-list">
        <Link to={`/properties?type=beach&continent=0&priceRange=1`} className="property-card">
          <img src={img1} alt="Beach Property" className="property-image" />
          <div className="property-quantity">{beachProperties} properties</div>
          <h5 className="property-title">Beach properties</h5>
        </Link>
        <Link to={`/properties?type=mountain&continent=1&priceRange=1`} className="property-card">
          <img src={img2} alt="Mountain Property" className="property-image" />
          <div className="property-quantity">{mountainProperties} properties</div>
          <h5 className="property-title">Mountain properties</h5>
        </Link>
        <Link to={`/properties?type=village&continent=2&priceRange=1`} className="property-card">
          <img src={img3} alt="Village Property" className="property-image" />
          <div className="property-quantity">{villageProperties} properties</div>
          <h5 className="property-title">Village properties</h5>
        </Link>
      </div>
    </div>
  );
};

export default PopularProperties;
