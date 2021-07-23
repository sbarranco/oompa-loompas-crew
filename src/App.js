import React, { useState, useEffect, useContext } from 'react';

// Utils
import axios from 'axios';
import { MainAppContext } from './utils/MainAppContext';

// Components
import SearchBar from './components/Search';
import Header from './components/Header'
import CrewList from './components/CrewList'

// Styles
import './App.css';

function App() {
  let { stateMainApp, dispatchMainApp } = useContext(MainAppContext);
  let { crewMembers } = stateMainApp;

  const [isLoading, setIsLoading] = useState(false)
  const url = `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?pa
  ge=1`

  useEffect(() => {
    getDataElements()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getDataElements = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(url)
      if (response.status === 200) {
        let data = response.data.results
        dispatchMainApp({ type: "SET_CREW_MEMBERS", payload: data });
      } else {
        // ERROR MESSAGE
      }
    } catch (e) {
 // ERROR MESSAGE
    }
    setIsLoading(false)
  }

  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <h1 className="title">Find your Oompa Loompa</h1>
      <h3 className="subtitle">There are more than 100k</h3>
      <div>{(crewMembers.length === 0 && !isLoading) || (crewMembers.length === 0) ? 'No Results Found' : <CrewList/>}</div>

    </div>
  );
}

export default App;
