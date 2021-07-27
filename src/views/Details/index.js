import React, { useEffect, useContext, useState } from "react";

// Libraries
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

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

  const [loading, setLoading] = useState(true);
  const id = match.params.id;

  useEffect(() => {
    getMemberDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMemberDetails = async () => {
    const url = `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`;
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        dispatchMainApp({ type: "SET_MEMBER_DETAIL", payload: response.data });
      } else {
        NotificationManager.error('Something went wrong!', 'Error', 5000);
      }
    } catch (error) {
      NotificationManager.error('Error', error.message, 5000);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <Loader isLoading={loading}>{memberDetail && <CrewDetails />}</Loader>
      <NotificationContainer/>
    </div>
  );
}

export default DetailsView;
