import React from "react";

// React router
import { Link } from "react-router-dom";

// Styles
import "./index.css";

function CrewCard({ item }) {
  return (
    <div className="card">
      <Link to={`/details/${item.id}`}>
        <img className="card-image" src={item.image} alt="Avatar" />
        <div className="card-text">
          <h3>
            {item.first_name} {item.last_name}
          </h3>
          <div className="card-info">
            <p>{item.gender === "F" ? "Woman" : "Man"}</p>
            <p>{item.profession}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CrewCard;
