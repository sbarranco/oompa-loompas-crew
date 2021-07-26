import React, {useContext} from 'react';

// Context
import { MainAppContext } from '../../utils/Context/MainAppContext';

//Components
import CrewCard from './CrewCard';

// Styles
import './index.css';

function CrewList() {
    let { stateMainApp } = useContext(MainAppContext);
    let { searchList } = stateMainApp;

    return (
        <div className='crewList'>
            {!!searchList && searchList.map((item, index) => {
                return (
                    <CrewCard item={item} key={index}/>
                )
            }) }
        </div>
    );
}

export default CrewList;