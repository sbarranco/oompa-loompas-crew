import { useState, useEffect, useContext, useCallback } from "react";

// Libraries
import {NotificationManager} from 'react-notifications';
import axios from "axios";

// Context
import { MainAppContext } from "../Context/MainAppContext";

function useFetch() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const date =  new Date().toDateString();

  let { stateMainApp, dispatchMainApp } = useContext(MainAppContext);
  let { crewMembers, page } = stateMainApp;

  const sendQuery = useCallback(async () => {
    const url = `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?pa
    ge=${page}`;
    try {
      setLoading(true);
      setError(false);
      const res = await axios.get(url);
      if (res.status === 200) {
        let data = [...crewMembers, ...res.data.results];
        dispatchMainApp({ type: "SET_CREW_MEMBERS", payload: data });
        localStorage.setItem('CREW_MEMBERS', data);
      }
    } catch (err) {
      setError(err);
      NotificationManager.error('Error', err.message, 5000);
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    console.log('date', date)
    if (localStorage.getItem('CREW_MEMBERS')) {

    } else {      
      localStorage.clear();
      sendQuery();
    }
  }, [sendQuery, page]);

  return { loading, error };
}

export default useFetch;
