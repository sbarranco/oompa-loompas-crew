import React, { useEffect, useContext, useState } from "react";

// Libraries
import axios from "axios";

// Components
import Header from "../../components/Header";
import CrewDetails from "../../components/CrewDetails";

// Context
import { MainAppContext } from "../../Context/MainAppContext";

// Utils
import Loader from "../../utils/Loader";

function DetailsView({ match }) {
  let { stateMainApp, dispatchMainApp } = useContext(MainAppContext);
  let { memberDetail } = stateMainApp;

  const [loading, setLoading] = useState(false);
  const id = match.params.id;
  const prevId = JSON.parse(localStorage.getItem("ID_DETAIL"));
  const prevDetail = JSON.parse(localStorage.getItem("MEMBER_DETAIL"));

  useEffect(() => {
    if (prevId === id) {
      dispatchMainApp({
        type: "SET_MEMBER_DETAIL",
        payload: prevDetail,
      });
    } else {
      
      getMemberDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMemberDetails = async () => {
    const url = `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`;
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        dispatchMainApp({ type: "SET_MEMBER_DETAIL", payload: response.data });
        localStorage.setItem("MEMBER_DETAIL", JSON.stringify(response.data));
        localStorage.setItem("ID_DETAIL", JSON.stringify(id));
      } 
    } catch (err) {
      console.log(err)
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <Loader isLoading={loading}>{memberDetail && <CrewDetails />}</Loader>
    </div>
  );
}

export default DetailsView;
