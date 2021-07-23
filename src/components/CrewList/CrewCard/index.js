import React from 'react';

function CrewCard({ item }) {

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={item.image} alt="Avatar" className="profile-image"/>
          <div className="name">{item.name}</div>
        </div>
        <div className="flip-card-back">
          <div className="back-content">
            <div>{item.first_name} {item.last_name}</div>
            <div>{item.gender === 'F' ? 'Woman' : 'Man'}</div>
            <div>{item.profession}</div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewCard;