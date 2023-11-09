import React from 'react';
import { Link } from 'react-router-dom';
import './MapComponent.css';

const MapComponent = () => {
  return (
    <div className='Map-container'>
      <div className="back-btn">
        <Link to="/TablePage"><button>DashBoard</button></Link>
      </div>
    </div>
  );
}

export default MapComponent;
