import React from 'react';
import PokeLayout from './components/layout';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Details from './components/Pokemon';
import Error404 from './components/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={PokeLayout} />
        <Route path="/pokemon/:id" exact={true} component={Details} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
