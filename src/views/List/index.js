import React, { useEffect, useContext, useCallback, useRef } from "react";

// Utils
import { MainAppContext } from "../../Context/MainAppContext";
import useFetch from "../../hook/useFetch";

// Components
import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import CrewList from "../../components/CrewList";
import Loader from "../../components/Loader";

// Styles
import "./index.css";

function ListView() {
  let { stateMainApp, dispatchMainApp } = useContext(MainAppContext);
  let { crewMembers, page } = stateMainApp;

  const { loading } = useFetch();
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
      <div className="title">
        <h1>Find your Oompa Loompa</h1>
        <h3>There are more than 100k</h3>
      </div>
      <Loader isLoading={loading}>
        {crewMembers.length === 0 ? "No Results Found" : <CrewList />}
      </Loader>
      <div ref={loader} />
    </div>
  );
}

export default ListView;
