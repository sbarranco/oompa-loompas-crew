import React, { useEffect, useContext, useCallback, useRef } from "react";

// Utils
import { MainAppContext } from "../../Context/MainAppContext";
import useFetch from "../../hook/useFetch";
import Loader from "../../utils/Loader";

// Components
import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import CrewList from "../../components/CrewList";

// Libraries
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


function ListView() {
  let { stateMainApp, dispatchMainApp } = useContext(MainAppContext);
  let { crewMembers, page } = stateMainApp;

  const { loading, error } = useFetch();
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      dispatchMainApp({ type: "SET_PAGE_NUM", payload: ++page });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div>
      <Header />
      <SearchBar />
      <h1 className="title">Find your Oompa Loompa</h1>
      <h3 className="subtitle">There are more than 100k</h3>
      <Loader isLoading={loading}>
        {crewMembers.length === 0 ? "No Results Found" : <CrewList />}
      </Loader>
      <NotificationContainer/>
      <div ref={loader} />
    </div>
  );
}

export default ListView;
