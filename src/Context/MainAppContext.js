import React, { useReducer } from "react";

export const initValueMainApp = {
  crewMembers: [],
  searchList: [],
  memberDetail: null,
  searchText: "",
  page: 1,
};

const MainAppContext = React.createContext(initValueMainApp);

let reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initValueMainApp;
    case "SET_CREW_MEMBERS":
      return {
        ...state,
        ...{ crewMembers: action.payload, searchList: action.payload },
      };
    case "SET_MEMBER_DETAIL":
      return { ...state, ...{ memberDetail: action.payload } };
    case "SET_SEARCH_TEXT":
      return { ...state, ...{ searchText: action.payload } };
    case "SET_SEARCH_LIST":
      return { ...state, ...{ searchList: action.payload } };
    case "SET_PAGE_NUM":
      return { ...state, ...{ page: action.payload } };
    default:
      return { ...state };
  }
};

function MainAppProvider(props) {
  let [stateMainApp, dispatchMainApp] = useReducer(reducer, initValueMainApp);
  let value = { stateMainApp, dispatchMainApp };
  return (
    <MainAppContext.Provider value={value}>
      {props.children}
    </MainAppContext.Provider>
  );
}

let MainAppConsumer = MainAppContext.Consumer;

export { MainAppContext, MainAppProvider, MainAppConsumer };
