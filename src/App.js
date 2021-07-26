import React from 'react';

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Views
import ListView from './views/List';
import DetailsView from './views/Details'

// Styles
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route exact path="/" component={ListView} />
          <Route path="/details/:id" component={DetailsView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
