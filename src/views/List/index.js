import React, { useEffect, useContext, useCallback, useRef } from 'react';

// Utils
import { MainAppContext } from '../../utils/Context/MainAppContext';
import useFetch from '../../hook/useFetch'


// Components
import SearchBar from '../../components/Search';
import Header from '../../components/Header';
import CrewList from '../../components/CrewList';

function ListView() {
  let { stateMainApp, dispatchMainApp } = useContext(MainAppContext);
  let { crewMembers, page, searchText } = stateMainApp;

  const { loading, error } = useFetch();
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      if (searchText) {} // si hay texto de busqueda no se hace scroll
      dispatchMainApp({ type: "SET_PAGE_NUM", payload: ++page });;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div>
      <Header/>
      <SearchBar/>
      <h1 className="title">Find your Oompa Loompa</h1>
      <h3 className="subtitle">There are more than 100k</h3>
      <div>{(crewMembers.length === 0) ? 'No Results Found' : <CrewList />}</div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </div>
  );
}

export default ListView;