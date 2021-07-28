import React, { useContext } from "react";

// Context
import { MainAppContext } from "../../Context/MainAppContext";

// Styles
import './index.css';

function CrewDetails() {
  let { stateMainApp } = useContext(MainAppContext);
  let { memberDetail } = stateMainApp;

  const htmlString = memberDetail?.description;

  return (
    <div className="detail-container">
      <img className="detail-image" src={memberDetail.image} alt="Avatar" />
      <div className="detail-text">
        <h3>
          {memberDetail.first_name} {memberDetail.last_name}
        </h3>
        <div className="detail-info">
          <p>{memberDetail.gender === "F" ? "Woman" : "Man"}</p>
          <p>{memberDetail.profession}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>
    </div>
  );
}

export default CrewDetails;
