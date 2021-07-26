import React from 'react';
import './index.css';

function CrewCard({ item }) {

  return (
    <div className="card">
      <img className="card-image" src={item.image} alt="Avatar" />
      <div className="card-text">
        <h3 className="card-name">{item.first_name} {item.last_name}</h3>
        <div className="card-info">
          <p>{item.gender === 'F' ? 'Woman' : 'Man'}</p>
          <p>{item.profession}</p>
        </div>
      </div>
    </div>
  );
}

export default CrewCard;