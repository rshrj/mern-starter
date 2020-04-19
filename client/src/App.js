import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import IceCreamInput from './components/IceCreamInput';
import IceCreams from './components/IceCreams';
import IceCreamDetail from './components/IceCreamDetail';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <IceCreamInput />
        <Switch>
          <Route exact path='/:id' component={IceCreamDetail} />
          <Route exact path='/' component={IceCreams} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
