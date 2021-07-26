import { useState, useEffect, useContext, useCallback } from "react";
import { MainAppContext } from '../utils/MainAppContext'
import axios from "axios";

function useFetch() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  let { stateMainApp, dispatchMainApp } = useContext(MainAppContext);
  let { crewMembers, page } = stateMainApp;

  const sendQuery = useCallback(async () => {
    const url = `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?pa
    ge=${page}`
    try {
      setLoading(true);
      setError(false);
      const res = await axios.get(url);
      if (res.status === 200) {
        let data = [...crewMembers, ...res.data.results];
        dispatchMainApp({ type: "SET_CREW_MEMBERS", payload: data });
      }      
    } catch (err) {
      setError(err);
    }    
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  return { loading, error };
}

export default useFetch;

