import React, { useContext } from 'react';
import { MainAppContext } from '../../utils/Context/MainAppContext';
import './index.css';

function SearchBar() {
    let { stateMainApp, dispatchMainApp } = useContext(MainAppContext);
    let { crewMembers, searchText } = stateMainApp;

    const searchIcon = `https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png`

    const onSearch = () => {

        let newData = crewMembers.filter(item => {
            item.profession.toLowerCase().includes(searchText.toLowerCase()) ||
                item.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
                item.last_name.toLowerCase().includes(searchText.toLowerCase())
        }
        )
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
                <input className='search-input' type="text" value={searchText} placeholder="Search"
                    onChange={e => onChangeSearchInput(e.target.value)} onKeyPress={e => keyPressed(e.key)}></input>
                <button className='search-btn' type="button" onClick={() => onSearch()}>
                    <img className="search-icon" src={searchIcon} alt="Logo" />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;