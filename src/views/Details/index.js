import React, {useEffect, useContext, useState} from 'react';

// Axios
import axios from "axios";

// Components
import Header from '../../components/Header';
import CrewDetails from '../../components/CrewDetails';

// Context
import {MainAppContext } from '../../utils/Context/MainAppContext'


function DetailsView({match}) {
    let { stateMainApp, dispatchMainApp } = useContext(MainAppContext);
    let { memberDetail } = stateMainApp;
    
    const [loading, setLoading] = useState(true);
    const id = match.params.id
  

    useEffect(() => {
        getMemberDetails()
      }, []);

      const getMemberDetails = async () => {
        
        const url= `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus /oompa-loompas/${id}`;
        setLoading(true); 
        try {
          const response = await axios.get(url)
          if (response.status === 200) {
              console.log(response.data)
            dispatchMainApp({ type: "SET_MEMBER_DETAIL", payload: response.data });
          } else {
            // error notification
          }
        } catch (e) {
            // error notification
        }
        setLoading(false)
      }

  return (
    <div>
      <Header/>
      <CrewDetails />
    </div>
  );
}

export default DetailsView;