import React, {useContext} from 'react';
import { MainAppContext } from '../../utils/MainAppContext';
import CrewCard from './CrewCard';

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