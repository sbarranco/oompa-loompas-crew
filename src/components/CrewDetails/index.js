import React, { useContext } from "react";

// Context
import { MainAppContext } from "../../Context/MainAppContext";

function CrewDetails() {
  let { stateMainApp } = useContext(MainAppContext);
  let { memberDetail } = stateMainApp;

  return (
    <div>
      <img className="detail_image" src={memberDetail.image} alt="Avatar" />
      <div className="detail_text">
        <h3 className="detail_name">
          {memberDetail.first_name} {memberDetail.last_name}
        </h3>
        <div className="detail_info">
          <p>{memberDetail.gender === "F" ? "Woman" : "Man"}</p>
          <p>{memberDetail.profession}</p>
        </div>
        <p>{memberDetail.description}</p>
      </div>
    </div>
  );
}

export default CrewDetails;
