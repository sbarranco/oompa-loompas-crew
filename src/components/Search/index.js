import React, { useContext } from 'react';
import {MainAppContext} from '../../utils/MainAppContext';
import './index.css';

function SearchBar() {
    let { stateMainApp, dispatchMainApp } = useContext(MainAppContext);
    let { crewMembers, searchText } = stateMainApp;

    const onSearch = () => {
        
        let newData = crewMembers.filter(item =>
            item.json().toLowerCase().includes(searchText.toLowerCase()))
        dispatchMainApp({ type: "SET_SEARCH_LIST", payload: newData });
    } 

    const onChangeSearchInput = (value) => {
        let newData = crewMembers.filter(item =>
           JSON.stringify(item).toLowerCase().includes(value.toLowerCase()))
        dispatchMainApp({ type: "SET_SEARCH_LIST", payload: newData });
        dispatchMainApp({ type: "SET_SEARCH_TEXT", payload: value });
    }

    const keyPressed = (key) => (key === "Enter") ? onSearch() : undefined;

    return (
        <div>
            <form>
            <input className='search__input' type="text" value={searchText} placeholder="Search"
            onChange={e => onChangeSearchInput(e.target.value)} onKeyPress={e => keyPressed(e.key)}></input>
          <button className='search__btn' type="button" onClick={() => onSearch()}>
          </button>
            </form>
        </div>
    );
}

export default SearchBar;