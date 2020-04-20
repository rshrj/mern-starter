import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import IceCreamInput from './components/IceCreamInput';
import IceCreams from './components/IceCreams';
import IceCreamDetail from './components/IceCreamDetail';

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadIceCreams } from './redux/actions/iceCream';

function App() {
  const { loading } = useSelector((store) => store.iceCream);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      dispatch(loadIceCreams());
    }
  }, []);

  return (
    <Router>
      <div className={`loading${!loading && ' dn'}`}>
        <div className='spinner'>
          <h1>Loading</h1>
          <div className='loader'>Loading...</div>
        </div>
      </div>
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
