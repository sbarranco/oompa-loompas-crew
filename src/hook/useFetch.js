import { useState, useEffect, useContext, useCallback } from "react";

// Libraries
import axios from "axios";

// Context
import { MainAppContext } from "../Context/MainAppContext";

function useFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const date = new Date().toDateString();

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
        localStorage.setItem("CREW_MEMBERS", JSON.stringify(data));
        localStorage.setItem("STORAGE_DATE", date);
      }
    } catch (err) {
      setError(err);
      console.log(err)
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
     if (confirmSendQuery()) {
      dispatchMainApp({
        type: "SET_CREW_MEMBERS",
        payload: JSON.parse(localStorage.getItem("CREW_MEMBERS")),
      });
    } else {
      localStorage.clear();
      sendQuery();
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendQuery, page]);

  const confirmSendQuery = () => {
    const date = localStorage.getItem("STORAGE_DATE");
    return date === new Date().toDateString();
  };

  return { loading, error };
}

export default useFetch;
