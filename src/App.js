import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Navb from './component/Navb';
import Movies from './component/Movies';

function App() {
  return (
    <div className="App">
      <Movies />
      <Navb />
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/Movies"></Route>
      </Switch>
    </div>
  );
}
export default App;
